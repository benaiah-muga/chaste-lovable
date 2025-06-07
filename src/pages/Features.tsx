import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Shield, BarChart3, Zap, Clock, Users, CheckCircle, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-950 dark">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <Badge className="mb-6 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Explore Our Powerful Features
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Unlock the Full Potential of AI Customer Support
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Discover how our advanced features can transform your customer experience and streamline your support operations.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
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

        {/* Advanced Features Section */}
        <div className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-neon-purple border border-neon-purple/30">
                Advanced Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Take your customer support to the next level
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our advanced features designed to provide personalized and efficient customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
                <CardHeader>
                  <Zap className="w-8 h-8 text-neon-blue mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white">AI-Powered Automation</CardTitle>
                  <CardDescription className="text-gray-400">
                    Automate repetitive tasks and provide instant support with our AI-powered automation features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Automated ticket routing</li>
                    <li>Intelligent knowledge base suggestions</li>
                    <li>Proactive customer engagement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-purple/30 transition-all duration-300 group">
                <CardHeader>
                  <Clock className="w-8 h-8 text-neon-purple mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white">24/7 Availability</CardTitle>
                  <CardDescription className="text-gray-400">
                    Provide round-the-clock support with our AI-powered virtual assistants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Instant responses at any time</li>
                    <li>Multilingual support</li>
                    <li>Consistent and reliable service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300 group">
                <CardHeader>
                  <Users className="w-8 h-8 text-neon-cyan mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white">Personalized Support</CardTitle>
                  <CardDescription className="text-gray-400">
                    Deliver personalized support experiences with our advanced AI technology.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Customized responses based on customer data</li>
                    <li>Sentiment analysis for empathetic support</li>
                    <li>Personalized recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
                <CardHeader>
                  <Star className="w-8 h-8 text-neon-blue mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white">Proactive Engagement</CardTitle>
                  <CardDescription className="text-gray-400">
                    Engage customers proactively and provide assistance before they even ask.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Automated welcome messages</li>
                    <li>Personalized onboarding assistance</li>
                    <li>Real-time support suggestions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Ready to unlock the full potential of AI customer support?
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
      </div>
    </div>
  );
};

export default Features;
