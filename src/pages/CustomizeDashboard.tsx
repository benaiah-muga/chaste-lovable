import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, Upload, Palette, MessageSquare, Settings, Eye, Save, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const CustomizeDashboard = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState({
    botName: 'Chaste Assistant',
    welcomeMessage: "Hi! I'm here to help you with any questions about our products and services.",
    tone: 'friendly',
    primaryColor: '#0ea5e9',
    secondaryColor: '#8b5cf6',
    logoUrl: '',
    avatarUrl: '',
    chatBubbleImage: '/lovable-uploads/66785ad5-7976-4832-b6ab-07e914385877.png',
    position: 'bottom-right',
    size: 'medium',
    showBranding: true,
    responseStyle: 'conversational',
    language: 'English',
    fallbackMessage: 'I apologize, but I need to connect you with a human agent for this request.'
  });

  const handleConfigChange = (field: string, value: string | boolean) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    toast({
      title: "Settings saved!",
      description: "Your chatbot customizations have been updated.",
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      handleConfigChange('logoUrl', url);
      toast({
        title: "Logo uploaded!",
        description: "Your logo has been updated.",
      });
    }
  };

  const handleChatBubbleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      handleConfigChange('chatBubbleImage', url);
      toast({
        title: "Chat bubble image uploaded!",
        description: "Your chat bubble image has been updated.",
      });
    }
  };

  const toneOptions = [
    { value: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
    { value: 'professional', label: 'Professional', description: 'Formal and business-like' },
    { value: 'casual', label: 'Casual', description: 'Relaxed and informal' },
    { value: 'enthusiastic', label: 'Enthusiastic', description: 'Energetic and excited' }
  ];

  const positionOptions = [
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'top-left', label: 'Top Left' }
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small', description: '320px × 400px' },
    { value: 'medium', label: 'Medium', description: '380px × 500px' },
    { value: 'large', label: 'Large', description: '440px × 600px' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 dark">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={handleSave} className="bg-gradient-to-r from-neon-blue to-neon-purple">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2 font-display">Customize Your AI Assistant</h1>
            <p className="text-gray-400">Personalize your chatbot's appearance, behavior, and responses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Configuration Panel */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="appearance" className="space-y-6">
                <TabsList className="bg-gray-900/50 border border-gray-800/50">
                  <TabsTrigger value="appearance" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
                    <Palette className="w-4 h-4 mr-2" />
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger value="behavior" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
                    <Bot className="w-4 h-4 mr-2" />
                    Behavior
                  </TabsTrigger>
                  <TabsTrigger value="messages" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Messages
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="appearance" className="space-y-6">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-white">Visual Appearance</CardTitle>
                      <CardDescription className="text-gray-400">Customize how your chatbot looks and feels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="primaryColor" className="text-gray-300">Primary Color</Label>
                          <div className="flex items-center space-x-2 mt-1">
                            <input
                              type="color"
                              id="primaryColor"
                              value={config.primaryColor}
                              onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                              className="w-10 h-10 rounded border border-gray-700"
                            />
                            <Input
                              value={config.primaryColor}
                              onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                              className="bg-gray-800/50 border-gray-700 text-white"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="secondaryColor" className="text-gray-300">Secondary Color</Label>
                          <div className="flex items-center space-x-2 mt-1">
                            <input
                              type="color"
                              id="secondaryColor"
                              value={config.secondaryColor}
                              onChange={(e) => handleConfigChange('secondaryColor', e.target.value)}
                              className="w-10 h-10 rounded border border-gray-700"
                            />
                            <Input
                              value={config.secondaryColor}
                              onChange={(e) => handleConfigChange('secondaryColor', e.target.value)}
                              className="bg-gray-800/50 border-gray-700 text-white"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="logo" className="text-gray-300">Company Logo</Label>
                        <div className="mt-1">
                          <input
                            type="file"
                            id="logo"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                          <label htmlFor="logo" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-neon-blue/50 transition-colors">
                            {config.logoUrl ? (
                              <img src={config.logoUrl} alt="Logo" className="h-20 object-contain" />
                            ) : (
                              <div className="text-center">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-400">Upload your logo</p>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="chatBubble" className="text-gray-300">Chat Bubble Image</Label>
                        <div className="mt-1">
                          <input
                            type="file"
                            id="chatBubble"
                            accept="image/*"
                            onChange={handleChatBubbleUpload}
                            className="hidden"
                          />
                          <label htmlFor="chatBubble" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-neon-blue/50 transition-colors">
                            {config.chatBubbleImage ? (
                              <img src={config.chatBubbleImage} alt="Chat Bubble" className="h-20 object-contain" />
                            ) : (
                              <div className="text-center">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-400">Upload chat bubble image</p>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      <div>
                        <Label className="text-gray-300">Chat Position</Label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {positionOptions.map((option) => (
                            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="position"
                                value={option.value}
                                checked={config.position === option.value}
                                onChange={(e) => handleConfigChange('position', e.target.value)}
                                className="text-neon-blue"
                              />
                              <span className="text-gray-300">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-gray-300">Chat Size</Label>
                        <div className="space-y-2 mt-2">
                          {sizeOptions.map((option) => (
                            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="size"
                                value={option.value}
                                checked={config.size === option.value}
                                onChange={(e) => handleConfigChange('size', e.target.value)}
                                className="text-neon-blue"
                              />
                              <div>
                                <span className="text-gray-300">{option.label}</span>
                                <p className="text-xs text-gray-500">{option.description}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="behavior" className="space-y-6">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-white">Chatbot Personality</CardTitle>
                      <CardDescription className="text-gray-400">Define how your AI assistant behaves and responds</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="botName" className="text-gray-300">Assistant Name</Label>
                        <Input
                          id="botName"
                          value={config.botName}
                          onChange={(e) => handleConfigChange('botName', e.target.value)}
                          className="bg-gray-800/50 border-gray-700 text-white mt-1"
                        />
                      </div>

                      <div>
                        <Label className="text-gray-300">Tone of Voice</Label>
                        <div className="grid grid-cols-1 gap-3 mt-2">
                          {toneOptions.map((tone) => (
                            <label key={tone.value} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-700 hover:border-neon-blue/50 transition-colors">
                              <input
                                type="radio"
                                name="tone"
                                value={tone.value}
                                checked={config.tone === tone.value}
                                onChange={(e) => handleConfigChange('tone', e.target.value)}
                                className="text-neon-blue"
                              />
                              <div>
                                <span className="text-gray-300 font-medium">{tone.label}</span>
                                <p className="text-xs text-gray-500">{tone.description}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="language" className="text-gray-300">Language</Label>
                        <select
                          id="language"
                          value={config.language}
                          onChange={(e) => handleConfigChange('language', e.target.value)}
                          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800/50 text-white mt-1"
                        >
                          <option value="English">English</option>
                          <option value="Spanish">Spanish</option>
                          <option value="French">French</option>
                          <option value="German">German</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="messages" className="space-y-6">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-white">Message Configuration</CardTitle>
                      <CardDescription className="text-gray-400">Customize the messages your chatbot sends</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="welcomeMessage" className="text-gray-300">Welcome Message</Label>
                        <Textarea
                          id="welcomeMessage"
                          value={config.welcomeMessage}
                          onChange={(e) => handleConfigChange('welcomeMessage', e.target.value)}
                          rows={3}
                          className="bg-gray-800/50 border-gray-700 text-white mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="fallbackMessage" className="text-gray-300">Fallback Message</Label>
                        <Textarea
                          id="fallbackMessage"
                          value={config.fallbackMessage}
                          onChange={(e) => handleConfigChange('fallbackMessage', e.target.value)}
                          rows={3}
                          className="bg-gray-800/50 border-gray-700 text-white mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">Message shown when the AI can't provide a helpful response</p>
                      </div>

                      <div>
                        <Label className="text-gray-300">Response Style</Label>
                        <div className="space-y-2 mt-2">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="responseStyle"
                              value="conversational"
                              checked={config.responseStyle === 'conversational'}
                              onChange={(e) => handleConfigChange('responseStyle', e.target.value)}
                              className="text-neon-blue"
                            />
                            <div>
                              <span className="text-gray-300">Conversational</span>
                              <p className="text-xs text-gray-500">Natural, flowing responses</p>
                            </div>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="responseStyle"
                              value="structured"
                              checked={config.responseStyle === 'structured'}
                              onChange={(e) => handleConfigChange('responseStyle', e.target.value)}
                              className="text-neon-blue"
                            />
                            <div>
                              <span className="text-gray-300">Structured</span>
                              <p className="text-xs text-gray-500">Bullet points and organized format</p>
                            </div>
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-white">Advanced Settings</CardTitle>
                      <CardDescription className="text-gray-400">Fine-tune your chatbot's behavior</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-300 font-medium">Show Chaste Branding</span>
                          <p className="text-xs text-gray-500">Display "Powered by Chaste" in the chat widget</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={config.showBranding}
                            onChange={(e) => handleConfigChange('showBranding', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-blue"></div>
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Live Preview
                  </CardTitle>
                  <CardDescription className="text-gray-400">See how your chatbot will look</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    {/* Chat Preview */}
                    <div 
                      className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-lg"
                      style={{ borderColor: config.primaryColor + '40' }}
                    >
                      {/* Chat Header */}
                      <div 
                        className="p-3 border-b border-gray-700/50 flex items-center space-x-2 rounded-t-2xl"
                        style={{ backgroundColor: config.primaryColor + '20' }}
                      >
                        {config.chatBubbleImage ? (
                          <img 
                            src={config.chatBubbleImage} 
                            alt="AI Assistant" 
                            className="w-8 h-8 object-contain rounded-lg"
                          />
                        ) : (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={config.avatarUrl} />
                            <AvatarFallback style={{ backgroundColor: config.primaryColor }}>
                              <Bot className="w-4 h-4 text-white" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="text-white text-sm font-medium">{config.botName}</p>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-gray-400">Online</span>
                          </div>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="p-3 space-y-3 max-h-40 overflow-y-auto">
                        <div className="flex space-x-2">
                          {config.chatBubbleImage ? (
                            <img 
                              src={config.chatBubbleImage} 
                              alt="AI Assistant" 
                              className="w-6 h-6 object-contain rounded"
                            />
                          ) : (
                            <Avatar className="w-6 h-6">
                              <AvatarFallback style={{ backgroundColor: config.primaryColor }}>
                                <Bot className="w-3 h-3 text-white" />
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div 
                            className="bg-gray-800/50 p-2 rounded-xl text-sm text-gray-300 max-w-[200px]"
                            style={{ borderLeft: `3px solid ${config.primaryColor}` }}
                          >
                            {config.welcomeMessage}
                          </div>
                        </div>
                      </div>

                      {/* Chat Input */}
                      <div className="p-3 border-t border-gray-700/50 rounded-b-2xl">
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-2 py-1 text-sm text-white"
                            readOnly
                          />
                          <button 
                            className="px-3 py-1 rounded-xl text-white text-sm"
                            style={{ backgroundColor: config.primaryColor }}
                          >
                            Send
                          </button>
                        </div>
                        {config.showBranding && (
                          <p className="text-xs text-gray-500 text-center mt-2">Powered by Chaste AI</p>
                        )}
                      </div>
                    </div>

                    {/* Chat Bubble Preview */}
                    <div className="mt-4 flex justify-end">
                      <div 
                        className="w-16 h-16 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple shadow-lg flex items-center justify-center border-2 border-white/20"
                        style={{ 
                          background: `linear-gradient(to right, ${config.primaryColor}, ${config.secondaryColor})` 
                        }}
                      >
                        {config.chatBubbleImage ? (
                          <img 
                            src={config.chatBubbleImage} 
                            alt="Chat Bubble" 
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <MessageSquare className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomizeDashboard;
