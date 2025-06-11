
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, ArrowLeft, Code, Key, Database, MessageSquare, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApiDocs = () => {
  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/chat',
      description: 'Send a message to the AI assistant',
      parameters: ['message', 'session_id', 'user_id'],
      response: 'AI response with message ID and metadata'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/conversations',
      description: 'Retrieve conversation history',
      parameters: ['user_id', 'limit', 'offset'],
      response: 'Array of conversation objects'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/knowledge',
      description: 'Upload documents to knowledge base',
      parameters: ['file', 'metadata', 'tags'],
      response: 'Upload status and document ID'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics',
      description: 'Get analytics data',
      parameters: ['date_range', 'metrics'],
      response: 'Analytics data with metrics'
    }
  ];

  const sdks = [
    { name: 'JavaScript', status: 'available', description: 'Full-featured SDK for web applications' },
    { name: 'Python', status: 'available', description: 'Server-side integration and automation' },
    { name: 'PHP', status: 'available', description: 'Easy integration with PHP applications' },
    { name: 'Node.js', status: 'available', description: 'Backend services and serverless functions' },
    { name: 'Ruby', status: 'coming-soon', description: 'Ruby on Rails integration' },
    { name: 'Go', status: 'coming-soon', description: 'High-performance applications' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 dark">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Bot className="w-8 h-8 text-neon-blue group-hover:animate-glow transition-all duration-300" />
              <span className="text-2xl font-bold text-white font-display">Chaste AI</span>
            </Link>
            <Link to="/documentation" className="inline-flex items-center text-neon-blue hover:text-neon-cyan text-sm transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to docs
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                Get API Key
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            API <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">Documentation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Integrate Chaste AI into your applications with our powerful REST API
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              REST API
            </Badge>
            <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 px-4 py-2">
              <Key className="w-4 h-4 mr-2" />
              API Keys
            </Badge>
            <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Secure
            </Badge>
          </div>
        </div>

        {/* Getting Started */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 mb-12">
          <CardHeader>
            <CardTitle className="text-white font-display">Getting Started</CardTitle>
            <CardDescription className="text-gray-400">
              Follow these steps to start using the Chaste AI API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-neon-blue font-bold">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Get API Key</h3>
                <p className="text-gray-400 text-sm">Sign up and generate your API key from the dashboard</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-neon-blue font-bold">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Make Request</h3>
                <p className="text-gray-400 text-sm">Use your API key to authenticate requests</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-neon-blue font-bold">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Get Response</h3>
                <p className="text-gray-400 text-sm">Receive AI-powered responses in real-time</p>
              </div>
            </div>

            <div className="bg-gray-950/80 p-4 rounded-lg border border-gray-800/50">
              <h4 className="text-white font-semibold mb-2">Authentication</h4>
              <code className="text-green-400 text-sm font-mono block">
                curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                &nbsp;&nbsp;&nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                &nbsp;&nbsp;&nbsp;&nbsp;https://api.chaste.ai/v1/chat
              </code>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display text-white mb-8">API Endpoints</h2>
          <div className="grid gap-6">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge className={`${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-neon-blue font-mono">{endpoint.endpoint}</code>
                  </div>
                  <CardDescription className="text-gray-300">
                    {endpoint.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Parameters</h4>
                      <ul className="space-y-1">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <li key={paramIndex} className="text-gray-400 text-sm">
                            <code className="bg-gray-800/50 px-2 py-1 rounded text-neon-cyan">{param}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Response</h4>
                      <p className="text-gray-400 text-sm">{endpoint.response}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display text-white mb-8">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdks.map((sdk, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{sdk.name}</CardTitle>
                    <Badge className={sdk.status === 'available' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }>
                      {sdk.status === 'available' ? 'Available' : 'Coming Soon'}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {sdk.description}
                  </CardDescription>
                </CardHeader>
                {sdk.status === 'available' && (
                  <CardContent>
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Download SDK
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Rate Limits */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white font-display">Rate Limits & Pricing</CardTitle>
            <CardDescription className="text-gray-400">
              Understanding API usage limits and pricing tiers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800/30 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Free Tier</h3>
                <div className="text-2xl font-bold text-neon-blue mb-2">1,000</div>
                <p className="text-gray-400 text-sm">requests per month</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/30 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Pro Tier</h3>
                <div className="text-2xl font-bold text-neon-blue mb-2">100K</div>
                <p className="text-gray-400 text-sm">requests per month</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/30 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Enterprise</h3>
                <div className="text-2xl font-bold text-neon-blue mb-2">Unlimited</div>
                <p className="text-gray-400 text-sm">custom solutions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiDocs;
