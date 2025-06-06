
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, Upload, Palette, Code, CheckCircle, User, Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    company: '',
    hearAboutUs: ''
  });
  const [chatbotConfig, setChatbotConfig] = useState({
    welcomeMessage: "Hi! I'm here to help you with any questions about our products and services.",
    tone: 'friendly',
    primaryColor: '#0ea5e9',
    name: 'Assistant',
    supportEmail: '',
    supportPhone: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map(file => file.name);
      setUploadedFiles([...uploadedFiles, ...fileNames]);
      toast({
        title: "Files uploaded successfully!",
        description: `${fileNames.length} file(s) added to your knowledge base.`,
      });
    }
  };

  const handleConfigChange = (field: string, value: string) => {
    setChatbotConfig({
      ...chatbotConfig,
      [field]: value
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Setup complete!",
        description: "Your chatbot is ready to deploy.",
      });
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const hearAboutOptions = [
    'Google Search', 'Social Media', 'Friend Referral', 'Blog/Article', 'Advertisement', 'Conference/Event', 'Other'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Avatar className="w-24 h-24 border-4 border-neon-blue/30">
                  <AvatarImage src="/placeholder.svg" alt="Welcome" />
                  <AvatarFallback className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-2xl">
                    <Heart className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white">We'd love to know you better!</h2>
              <p className="text-gray-400">Help us personalize your experience with Chaste AI</p>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input
                    id="firstName"
                    value={personalInfo.firstName}
                    onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                    placeholder="John"
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input
                    id="lastName"
                    value={personalInfo.lastName}
                    onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                    placeholder="Doe"
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-gray-300">Company Name</Label>
                <Input
                  id="company"
                  value={personalInfo.company}
                  onChange={(e) => handlePersonalInfoChange('company', e.target.value)}
                  placeholder="Acme Corp"
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>

              <div>
                <Label htmlFor="hearAboutUs" className="text-gray-300">How did you hear about us?</Label>
                <select
                  id="hearAboutUs"
                  value={personalInfo.hearAboutUs}
                  onChange={(e) => handlePersonalInfoChange('hearAboutUs', e.target.value)}
                  className="w-full p-2 border border-gray-700 rounded-md bg-gray-800/50 text-white"
                >
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Upload Your Knowledge Base</h2>
              <p className="text-gray-400">Add documents, FAQs, and files that your chatbot will use to answer questions.</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-neon-blue/50 transition-colors">
              <input
                type="file"
                multiple
                accept=".pdf,.txt,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400">Click to upload files or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, TXT, DOC, DOCX (Max 10MB each)</p>
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium text-white">Uploaded Files:</h3>
                {uploadedFiles.map((fileName, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-300">{fileName}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Palette className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Customize Your Chatbot</h2>
              <p className="text-gray-400">Set the personality and appearance of your AI assistant.</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="botName" className="text-gray-300">Chatbot Name</Label>
                <Input
                  id="botName"
                  value={chatbotConfig.name}
                  onChange={(e) => handleConfigChange('name', e.target.value)}
                  placeholder="Assistant"
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="supportEmail" className="text-gray-300">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={chatbotConfig.supportEmail}
                    onChange={(e) => handleConfigChange('supportEmail', e.target.value)}
                    placeholder="support@yourcompany.com"
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Email where complex queries will be forwarded for human assistance
                  </p>
                </div>

                <div>
                  <Label htmlFor="supportPhone" className="text-gray-300">Support Phone</Label>
                  <Input
                    id="supportPhone"
                    type="tel"
                    value={chatbotConfig.supportPhone}
                    onChange={(e) => handleConfigChange('supportPhone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Phone number for urgent customer support
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="welcomeMessage" className="text-gray-300">Welcome Message</Label>
                <Textarea
                  id="welcomeMessage"
                  value={chatbotConfig.welcomeMessage}
                  onChange={(e) => handleConfigChange('welcomeMessage', e.target.value)}
                  rows={3}
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>

              <div>
                <Label htmlFor="tone" className="text-gray-300">Tone</Label>
                <select
                  id="tone"
                  value={chatbotConfig.tone}
                  onChange={(e) => handleConfigChange('tone', e.target.value)}
                  className="w-full p-2 border border-gray-700 rounded-md bg-gray-800/50 text-white"
                >
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                </select>
              </div>

              <div>
                <Label htmlFor="primaryColor" className="text-gray-300">Primary Color</Label>
                <input
                  type="color"
                  id="primaryColor"
                  value={chatbotConfig.primaryColor}
                  onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                  className="w-full h-10 border border-gray-700 rounded-md bg-gray-800/50"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Bot className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Preview Your Chatbot</h2>
              <p className="text-gray-400">See how your chatbot will look and behave on your website.</p>
            </div>

            <Card className="max-w-sm mx-auto bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader style={{ backgroundColor: chatbotConfig.primaryColor + '20' }} className="text-white border-b border-gray-700/50">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5" style={{ color: chatbotConfig.primaryColor }} />
                  <span className="font-medium">{chatbotConfig.name}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-gray-800/30 p-3 rounded-lg mb-3 border-l-2" style={{ borderLeftColor: chatbotConfig.primaryColor }}>
                  <p className="text-sm text-gray-300">{chatbotConfig.welcomeMessage}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Type your message..." className="text-sm bg-gray-800/50 border-gray-700 text-white" />
                  <Button size="sm" style={{ backgroundColor: chatbotConfig.primaryColor }} className="text-white">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>

            {personalInfo.firstName && (
              <div className="text-center">
                <p className="text-gray-400">
                  Looking great, {personalInfo.firstName}! Your AI assistant is almost ready.
                </p>
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Code className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Get Your Embed Code</h2>
              <p className="text-gray-400">Copy and paste this code into your website to activate your chatbot.</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800/50">
              <code className="text-green-400 text-sm">
{`<script>
  (function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id))return;
    js=d.createElement(s);js.id=id;
    js.src="https://chaste.ai/embed/chatbot-123.js";
    fjs.parentNode.insertBefore(js,fjs);
  })(document,"script","chaste-embed");
</script>`}
              </code>
            </div>

            <Button 
              className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 text-white" 
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText('embed code here');
                toast({ title: "Code copied to clipboard!" });
              }}
            >
              Copy Embed Code
            </Button>

            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium text-green-300">Setup Complete!</span>
              </div>
              <p className="text-green-200 text-sm mt-1">
                {personalInfo.firstName ? `Great job, ${personalInfo.firstName}! ` : ''}
                Your chatbot is now ready to serve customers. You can always customize it further from your dashboard.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 dark">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Bot className="w-8 h-8 text-neon-blue animate-glow" />
          <span className="text-2xl font-bold text-white font-display">Chaste AI</span>
        </div>
        <Badge className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30">
          <Sparkles className="w-3 h-3 mr-1" />
          Setup Wizard
        </Badge>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50"
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white"
          >
            {currentStep === totalSteps ? 'Complete Setup' : 'Next Step'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
