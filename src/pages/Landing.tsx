
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Shield, Zap, BarChart3, Upload, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ChatSaaS</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <Badge className="mb-4 bg-blue-100 text-blue-800">
          🚀 Self-Serve RAG Chatbot Platform
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Deploy AI Customer Support
          <br />
          <span className="text-blue-600">In Minutes, Not Months</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Upload your documents, customize your chatbot, and embed intelligent customer support on your website. 
          No approval needed - start serving customers with AI-powered answers instantly.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need for AI Customer Support
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Instant Onboarding</CardTitle>
              <CardDescription>
                Upload docs, customize, and deploy in under 5 minutes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bot className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Smart LLM Fallback</CardTitle>
              <CardDescription>
                Multi-model system ensures 99.9% uptime with cost optimization
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                Full data control with delete rights and export capabilities
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Upload className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Document RAG</CardTitle>
              <CardDescription>
                Upload PDFs, FAQs, and docs for context-aware responses
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Track queries, top questions, and performance metrics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Settings className="w-8 h-8 text-indigo-600 mb-2" />
              <CardTitle>Full Customization</CardTitle>
              <CardDescription>
                Brand colors, tone, welcome messages, and restricted topics
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses already using AI-powered customer support
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">ChatSaaS</span>
          </div>
          <p className="text-gray-400">© 2024 ChatSaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
