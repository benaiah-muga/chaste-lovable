import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, MessageSquare, Shield, BarChart3, Zap, Clock, Users, CheckCircle, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterText from '@/components/TypewriterText';
import AnimatedChat from '@/components/AnimatedChat';
import { ChatInterface } from '@/components/ChatInterface';
import Navigation from '@/components/Navigation';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-950 dark">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/background-gradient.png"
            alt="Gradient Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Next-Generation AI Customer Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              Deploy AI Customer Support{' '}
              <TypewriterText 
                texts={["In Minutes", "Not Hours"]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple"
                loop={true}
                speed={150}
                pauseDuration={3000}
              />
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Transform your customer experience with AI-powered support that understands your business, 
              speaks your language, and delivers instant, accurate responses 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white px-8 py-3 text-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                  Start Free Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/docs">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:border-neon-blue px-8 py-3 text-lg">
                  View Documentation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free plan available • No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </div>

      {/* What is Chaste AI Section */}
      <div className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-neon-purple border border-neon-purple/30">
                About Chaste AI
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                What is Chaste AI?
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Chaste AI is an intelligent customer support platform designed for modern businesses. 
                We help companies provide instant, accurate, and personalized customer service through 
                advanced AI technology.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">For Growing Businesses</h3>
                    <p className="text-gray-400">Scale your customer support without scaling your team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">For E-commerce Stores</h3>
                    <p className="text-gray-400">Handle product inquiries, orders, and returns instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">For SaaS Companies</h3>
                    <p className="text-gray-400">Provide technical support and onboarding assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">For Service Providers</h3>
                    <p className="text-gray-400">Answer questions about your services and book appointments</p>
                  </div>
                </div>
              </div>

              <Link to="/features">
                <Button className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white">
                  Explore Features
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/lovable-uploads/a1f8b9d8-f624-4e15-88e6-14c2468b1d0e.png" 
                alt="Chaste AI Dashboard" 
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-800/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30">
              Key Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Everything you need for exceptional customer support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful features designed to enhance your customer experience and streamline your support operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-neon-blue mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white">Instant Responses</CardTitle>
                <CardDescription className="text-gray-400">
                  AI-powered responses that understand context and provide accurate answers in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-purple/30 transition-all duration-300 group">
              <CardHeader>
                <Shield className="w-8 h-8 text-neon-purple mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white">Secure & Reliable</CardTitle>
                <CardDescription className="text-gray-400">
                  Enterprise-grade security with 99.9% uptime guarantee to keep your business running smoothly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300 group">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-neon-cyan mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-400">
                  Detailed insights into customer interactions, satisfaction rates, and performance metrics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-neon-purple border border-neon-purple/30">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Choose the perfect plan for your business
            </h2>
            <p className="text-xl text-gray-400">
              Start free and scale as you grow. All plans include core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Free Plan</CardTitle>
                <div className="text-3xl font-bold text-white">$0<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-400">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    100 messages/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Basic AI responses
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <Link to="/signup">
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-neon-blue/10 to-neon-purple/10 backdrop-blur-xl border border-neon-blue/30 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Professional</CardTitle>
                <div className="text-3xl font-bold text-white">$49<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-400">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    5,000 messages/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Advanced AI with RAG
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Custom branding
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Analytics dashboard
                  </li>
                </ul>
                <Link to="/signup">
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white">
                    Start Professional
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-white">$199<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-400">For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Unlimited messages
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Dedicated account manager
                  </li>
                </ul>
                <Link to="/signup">
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan border border-neon-cyan/30">
              See It In Action
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Watch Chaste AI in action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our AI handles real customer conversations with intelligence and empathy.
            </p>
          </div>

          <div className="flex justify-center">
            <AnimatedChat />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            Ready to transform your customer support?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of businesses already using Chaste AI to provide exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white px-8 py-3 text-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                Start Your Free Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:border-neon-blue px-8 py-3 text-lg">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ChatInterface />
    </div>
  );
};

export default Landing;
