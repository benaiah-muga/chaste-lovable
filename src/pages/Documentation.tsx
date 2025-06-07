
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, BookOpen, Code, Settings, FileText, Zap, ArrowRight, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Documentation = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "Code has been copied to your clipboard.",
    });
  };

  const embedCode = `<script>
  (function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id))return;
    js=d.createElement(s);js.id=id;
    js.src="https://chaste.ai/embed/chatbot-YOUR_ID.js";
    fjs.parentNode.insertBefore(js,fjs);
  })(document,"script","chaste-embed");
</script>`;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="w-8 h-8 text-neon-blue animate-glow" />
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Chaste AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Home</Link>
              <Link to="/features" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Features</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Pricing</Link>
              <Link to="/docs" className="text-neon-blue">Docs</Link>
              <Link to="/support" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Support</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-neon-blue">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue">
                  Start for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <BookOpen className="w-10 h-10 text-neon-blue" />
            <h1 className="text-4xl font-bold">Documentation</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Everything you need to set up and customize your AI customer support chatbot.
          </p>
          <Badge className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30">
            <Zap className="w-3 h-3 mr-1" />
            Quick Setup Guide
          </Badge>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start Guide</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <CardTitle>Sign Up & Setup</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Create your account and complete the onboarding process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Enter your business information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Upload knowledge base documents
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Customize your chatbot appearance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <CardTitle>Embed on Website</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Add the chatbot to your website with a simple code snippet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Copy the embed code
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Paste before closing &lt;/body&gt; tag
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Test the integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <CardTitle>Monitor & Optimize</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Track performance and improve your chatbot over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Review conversation analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Update knowledge base
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Refine chatbot responses
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 bg-gray-900/30 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Installation</h2>
          
          <Card className="bg-gray-900/50 border-gray-800/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-neon-blue" />
                Embed Code
              </CardTitle>
              <CardDescription>
                Add this code snippet to your website before the closing &lt;/body&gt; tag
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/50 relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={() => copyToClipboard(embedCode)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{embedCode}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Replace "YOUR_ID" with your actual chatbot ID from your dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Configuration */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Configuration Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-neon-blue" />
                  Chatbot Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Appearance</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Custom colors and branding</li>
                    <li>• Welcome message personalization</li>
                    <li>• Chatbot name and avatar</li>
                    <li>• Position and size settings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Behavior</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Response tone (friendly, professional, etc.)</li>
                    <li>• Auto-trigger messages</li>
                    <li>• Escalation to human support</li>
                    <li>• Operating hours settings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-neon-blue" />
                  Knowledge Base Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Supported Formats</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• PDF documents</li>
                    <li>• Text files (.txt)</li>
                    <li>• Word documents (.doc, .docx)</li>
                    <li>• FAQ files</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Keep documents well-structured</li>
                    <li>• Use clear headings and sections</li>
                    <li>• Update content regularly</li>
                    <li>• Test chatbot responses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-16 bg-gray-900/30 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">API Reference</h2>
          
          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardHeader>
              <CardTitle>JavaScript API</CardTitle>
              <CardDescription>
                Control your chatbot programmatically with our JavaScript API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Available Methods</h4>
                  <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/50">
                    <pre className="text-green-400 text-sm">
                      <code>{`// Open the chatbot
ChasteAI.open();

// Close the chatbot
ChasteAI.close();

// Send a message programmatically
ChasteAI.sendMessage("Hello, I need help");

// Set user information
ChasteAI.setUser({
  name: "John Doe",
  email: "john@example.com"
});`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-8">
            Our support team is here to help you get the most out of Chaste AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/support">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <ExternalLink className="mr-2 w-4 h-4" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-8 h-8 text-neon-blue" />
                <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Chaste AI
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Revolutionizing customer support with intelligent AI agents.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Documentation</h3>
              <ul className="space-y-3">
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Quick Start</Button></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">API Reference</Button></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Examples</Button></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Tutorials</Button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/support" className="text-gray-400 hover:text-neon-blue transition-colors">Help Center</Link></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Contact Us</Button></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Status</Button></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Community</Button></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
