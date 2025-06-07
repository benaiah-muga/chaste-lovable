import React from 'react';
import Navigation from '@/components/Navigation';
import { ChatInterface } from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileText, Book, Code, Terminal, Copy, CheckCircle, Search, ArrowRight, BookOpen, Lightbulb, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Documentation = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 dark">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30">
                Documentation
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-4 font-display">
                Chaste AI Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Everything you need to know about integrating and using Chaste AI for your business.
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input 
                  placeholder="Search documentation..." 
                  className="pl-10 bg-gray-900/50 border-gray-700 text-white w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Documentation</h3>
                <nav className="space-y-1">
                  <a href="#getting-started" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-800/50 text-neon-blue">
                    <BookOpen className="mr-3 h-4 w-4" />
                    Getting Started
                  </a>
                  <a href="#installation" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800/30 hover:text-white">
                    <Code className="mr-3 h-4 w-4" />
                    Installation
                  </a>
                  <a href="#configuration" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800/30 hover:text-white">
                    <Terminal className="mr-3 h-4 w-4" />
                    Configuration
                  </a>
                  <a href="#api-reference" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800/30 hover:text-white">
                    <FileText className="mr-3 h-4 w-4" />
                    API Reference
                  </a>
                  <a href="#examples" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800/30 hover:text-white">
                    <Lightbulb className="mr-3 h-4 w-4" />
                    Examples
                  </a>
                  <a href="#faq" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800/30 hover:text-white">
                    <MessageSquare className="mr-3 h-4 w-4" />
                    FAQ
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div id="getting-started" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
                <p className="text-gray-400 mb-6">
                  Welcome to Chaste AI documentation. This guide will help you get started with integrating
                  our AI-powered customer support solution into your website or application.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-gray-900/50 border-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-white">Quick Start Guide</CardTitle>
                      <CardDescription className="text-gray-400">
                        Get up and running in minutes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="bg-neon-blue/20 text-neon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                          <span>Create an account on the Chaste AI dashboard</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-neon-blue/20 text-neon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                          <span>Generate your API key in the settings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-neon-blue/20 text-neon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                          <span>Install our JavaScript widget on your site</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-neon-blue/20 text-neon-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                          <span>Customize the appearance in the dashboard</span>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-white">System Requirements</CardTitle>
                      <CardDescription className="text-gray-400">
                        What you need to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Modern web browser (Chrome, Firefox, Safari, Edge)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>JavaScript enabled on your website</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>HTTPS website (required for security)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>Admin access to your website or CMS</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div id="installation" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
                <p className="text-gray-400 mb-6">
                  Installing Chaste AI is simple and straightforward. You can use our JavaScript widget
                  or integrate via our API.
                </p>

                <Tabs defaultValue="javascript" className="mb-8">
                  <TabsList className="bg-gray-800/50 border border-gray-700/50">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="vue">Vue</TabsTrigger>
                    <TabsTrigger value="api">API</TabsTrigger>
                  </TabsList>
                  <TabsContent value="javascript" className="mt-4">
                    <Card className="bg-gray-900/50 border-gray-800/50">
                      <CardHeader>
                        <CardTitle className="text-white">JavaScript Installation</CardTitle>
                        <CardDescription className="text-gray-400">
                          Add this script to your website's HTML
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                            <code>{`<script>
  (function(c,h,a,s,t,e,ai) {
    c[t]=c[t]||function(){(c[t].q=c[t].q||[]).push(arguments)};
    c[t].l=1*new Date();e=h.createElement(a);
    e.async=1;e.src=s;ai=h.getElementsByTagName(a)[0];
    ai.parentNode.insertBefore(e,ai);
  })(window,document,'script','https://cdn.chasteai.com/widget.js','chasteAI');
  
  chasteAI('init', 'YOUR_API_KEY_HERE');
</script>`}</code>
                          </pre>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            onClick={() => copyToClipboard(`<script>
  (function(c,h,a,s,t,e,ai) {
    c[t]=c[t]||function(){(c[t].q=c[t].q||[]).push(arguments)};
    c[t].l=1*new Date();e=h.createElement(a);
    e.async=1;e.src=s;ai=h.getElementsByTagName(a)[0];
    ai.parentNode.insertBefore(e,ai);
  })(window,document,'script','https://cdn.chasteai.com/widget.js','chasteAI');
  
  chasteAI('init', 'YOUR_API_KEY_HERE');
</script>`)}
                          >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="react" className="mt-4">
                    <Card className="bg-gray-900/50 border-gray-800/50">
                      <CardHeader>
                        <CardTitle className="text-white">React Installation</CardTitle>
                        <CardDescription className="text-gray-400">
                          Install our React component
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="relative">
                            <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                              <code>npm install @chasteai/react</code>
                            </pre>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="absolute top-2 right-2 text-gray-400 hover:text-white"
                              onClick={() => copyToClipboard('npm install @chasteai/react')}
                            >
                              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                          <div className="relative">
                            <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                              <code>{`import { ChasteAI } from '@chasteai/react';

function App() {
  return (
    <div className="App">
      <h1>My Website</h1>
      <ChasteAI apiKey="YOUR_API_KEY_HERE" />
    </div>
  );
}`}</code>
                            </pre>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="absolute top-2 right-2 text-gray-400 hover:text-white"
                              onClick={() => copyToClipboard(`import { ChasteAI } from '@chasteai/react';

function App() {
  return (
    <div className="App">
      <h1>My Website</h1>
      <ChasteAI apiKey="YOUR_API_KEY_HERE" />
    </div>
  );
}`)}
                            >
                              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="vue" className="mt-4">
                    <Card className="bg-gray-900/50 border-gray-800/50">
                      <CardHeader>
                        <CardTitle className="text-white">Vue Installation</CardTitle>
                        <CardDescription className="text-gray-400">
                          Install our Vue component
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="relative">
                            <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                              <code>npm install @chasteai/vue</code>
                            </pre>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="absolute top-2 right-2 text-gray-400 hover:text-white"
                              onClick={() => copyToClipboard('npm install @chasteai/vue')}
                            >
                              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                          <div className="relative">
                            <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                              <code>{`<template>
  <div>
    <h1>My Website</h1>
    <ChasteAI apiKey="YOUR_API_KEY_HERE" />
  </div>
</template>

<script>
import { ChasteAI } from '@chasteai/vue';

export default {
  components: {
    ChasteAI
  }
}
</script>`}</code>
                            </pre>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="absolute top-2 right-2 text-gray-400 hover:text-white"
                              onClick={() => copyToClipboard(`<template>
  <div>
    <h1>My Website</h1>
    <ChasteAI apiKey="YOUR_API_KEY_HERE" />
  </div>
</template>

<script>
import { ChasteAI } from '@chasteai/vue';

export default {
  components: {
    ChasteAI
  }
}
</script>`)}
                            >
                              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="api" className="mt-4">
                    <Card className="bg-gray-900/50 border-gray-800/50">
                      <CardHeader>
                        <CardTitle className="text-white">API Integration</CardTitle>
                        <CardDescription className="text-gray-400">
                          Use our REST API for custom integrations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                            <code>{`// Example API request
fetch('https://api.chasteai.com/v1/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  },
  body: JSON.stringify({
    message: "User's question here",
    sessionId: "unique-session-id"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}</code>
                          </pre>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            onClick={() => copyToClipboard(`// Example API request
fetch('https://api.chasteai.com/v1/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  },
  body: JSON.stringify({
    message: "User's question here",
    sessionId: "unique-session-id"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`)}
                          >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div id="configuration" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Configuration</h2>
                <p className="text-gray-400 mb-6">
                  Customize Chaste AI to match your brand and specific requirements.
                </p>

                <Card className="bg-gray-900/50 border-gray-800/50 mb-6">
                  <CardHeader>
                    <CardTitle className="text-white">Configuration Options</CardTitle>
                    <CardDescription className="text-gray-400">
                      Available customization parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs uppercase bg-gray-800/50 text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">Option</th>
                            <th scope="col" className="px-6 py-3">Type</th>
                            <th scope="col" className="px-6 py-3">Default</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800/30">
                            <td className="px-6 py-4 font-medium text-neon-blue">theme</td>
                            <td className="px-6 py-4">string</td>
                            <td className="px-6 py-4">'dark'</td>
                            <td className="px-6 py-4">Widget theme ('dark' or 'light')</td>
                          </tr>
                          <tr className="border-b border-gray-800/30">
                            <td className="px-6 py-4 font-medium text-neon-blue">position</td>
                            <td className="px-6 py-4">string</td>
                            <td className="px-6 py-4">'right'</td>
                            <td className="px-6 py-4">Widget position ('right' or 'left')</td>
                          </tr>
                          <tr className="border-b border-gray-800/30">
                            <td className="px-6 py-4 font-medium text-neon-blue">primaryColor</td>
                            <td className="px-6 py-4">string</td>
                            <td className="px-6 py-4">'#3B82F6'</td>
                            <td className="px-6 py-4">Primary color in hex format</td>
                          </tr>
                          <tr className="border-b border-gray-800/30">
                            <td className="px-6 py-4 font-medium text-neon-blue">welcomeMessage</td>
                            <td className="px-6 py-4">string</td>
                            <td className="px-6 py-4">'Hi! How can I help?'</td>
                            <td className="px-6 py-4">Initial bot message</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-neon-blue">voiceEnabled</td>
                            <td className="px-6 py-4">boolean</td>
                            <td className="px-6 py-4">false</td>
                            <td className="px-6 py-4">Enable voice interactions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white">Configuration Example</CardTitle>
                    <CardDescription className="text-gray-400">
                      How to apply custom configuration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <pre className="bg-gray-950 p-4 rounded-md text-gray-300 overflow-x-auto">
                        <code>{`<script>
  // Initialize with configuration
  chasteAI('init', 'YOUR_API_KEY_HERE', {
    theme: 'light',
    position: 'left',
    primaryColor: '#10B981',
    welcomeMessage: 'Hello! Welcome to our website. How can I assist you today?',
    voiceEnabled: true
  });
</script>`}</code>
                      </pre>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(`<script>
  // Initialize with configuration
  chasteAI('init', 'YOUR_API_KEY_HERE', {
    theme: 'light',
    position: 'left',
    primaryColor: '#10B981',
    welcomeMessage: 'Hello! Welcome to our website. How can I assist you today?',
    voiceEnabled: true
  });
</script>`)}
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center mt-12">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white">
                  View Full Documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatInterface />
    </div>
  );
};

export default Documentation;
