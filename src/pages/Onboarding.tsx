
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Bot, Upload, Palette, Code, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chatbotConfig, setChatbotConfig] = useState({
    welcomeMessage: "Hi! I'm here to help you with any questions about our products and services.",
    tone: 'friendly',
    primaryColor: '#3B82F6',
    name: 'Assistant'
  });
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Upload Your Knowledge Base</h2>
              <p className="text-gray-600">Add documents, FAQs, and files that your chatbot will use to answer questions.</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
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
                <p className="text-gray-600">Click to upload files or drag and drop</p>
                <p className="text-sm text-gray-400">PDF, TXT, DOC, DOCX (Max 10MB each)</p>
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium">Uploaded Files:</h3>
                {uploadedFiles.map((fileName, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{fileName}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Customize Your Chatbot</h2>
              <p className="text-gray-600">Set the personality and appearance of your AI assistant.</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="botName">Chatbot Name</Label>
                <Input
                  id="botName"
                  value={chatbotConfig.name}
                  onChange={(e) => handleConfigChange('name', e.target.value)}
                  placeholder="Assistant"
                />
              </div>

              <div>
                <Label htmlFor="welcomeMessage">Welcome Message</Label>
                <Textarea
                  id="welcomeMessage"
                  value={chatbotConfig.welcomeMessage}
                  onChange={(e) => handleConfigChange('welcomeMessage', e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="tone">Tone</Label>
                <select
                  id="tone"
                  value={chatbotConfig.tone}
                  onChange={(e) => handleConfigChange('tone', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                </select>
              </div>

              <div>
                <Label htmlFor="primaryColor">Primary Color</Label>
                <input
                  type="color"
                  id="primaryColor"
                  value={chatbotConfig.primaryColor}
                  onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Bot className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Preview Your Chatbot</h2>
              <p className="text-gray-600">See how your chatbot will look and behave on your website.</p>
            </div>

            <Card className="max-w-sm mx-auto">
              <CardHeader style={{ backgroundColor: chatbotConfig.primaryColor }} className="text-white">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-medium">{chatbotConfig.name}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-gray-100 p-3 rounded-lg mb-3">
                  <p className="text-sm">{chatbotConfig.welcomeMessage}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Type your message..." className="text-sm" />
                  <Button size="sm" style={{ backgroundColor: chatbotConfig.primaryColor }}>
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Get Your Embed Code</h2>
              <p className="text-gray-600">Copy and paste this code into your website to activate your chatbot.</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <code className="text-green-400 text-sm">
{`<script>
  (function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id))return;
    js=d.createElement(s);js.id=id;
    js.src="https://chatsaas.com/embed/chatbot-123.js";
    fjs.parentNode.insertBefore(js,fjs);
  })(document,"script","chatsaas-embed");
</script>`}
              </code>
            </div>

            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText('embed code here');
                toast({ title: "Code copied to clipboard!" });
              }}
            >
              Copy Embed Code
            </Button>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Setup Complete!</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ChatSaaS</span>
          </div>
          <Badge variant="secondary">Onboarding</Badge>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card>
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
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            {currentStep === totalSteps ? 'Complete Setup' : 'Next Step'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
