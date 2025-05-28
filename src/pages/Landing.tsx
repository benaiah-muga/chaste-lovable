
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Shield, Zap, BarChart3, Upload, Settings, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedChat from '@/components/AnimatedChat';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-950 dark">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
      
      {/* Header */}
      <header className="relative container mx-auto px-6 py-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <Bot className="w-8 h-8 text-neon-blue group-hover:animate-glow transition-all duration-300" />
              <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold font-display text-white bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              ChatSaaS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fadeInUp">
            <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 hover:bg-gradient-to-r hover:from-neon-blue/20 hover:to-neon-purple/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Self-Serve RAG Chatbot Platform
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold font-display text-white leading-tight">
              Deploy AI Customer Support
              <br />
              <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-gradient bg-300%">
                In Minutes, Not Months
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Upload your documents, customize your chatbot, and embed intelligent customer support on your website. 
              No approval needed - start serving customers with AI-powered answers instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-2xl hover:shadow-neon-blue/25 transform hover:scale-105 transition-all duration-300 group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-neon-blue/50 transition-all duration-300">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Animated Chat */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-3xl"></div>
              <AnimatedChat />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative container mx-auto px-6 py-20 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-white mb-4">
            Everything You Need for AI Customer Support
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for modern businesses that want to scale their support without scaling their team
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Instant Onboarding",
              description: "Upload docs, customize, and deploy in under 5 minutes",
              color: "from-yellow-400 to-orange-500"
            },
            {
              icon: Bot,
              title: "Smart LLM Fallback",
              description: "Multi-model system ensures 99.9% uptime with cost optimization",
              color: "from-green-400 to-blue-500"
            },
            {
              icon: Shield,
              title: "Privacy First",
              description: "Full data control with delete rights and export capabilities",
              color: "from-purple-400 to-pink-500"
            },
            {
              icon: Upload,
              title: "Document RAG",
              description: "Upload PDFs, FAQs, and docs for context-aware responses",
              color: "from-orange-400 to-red-500"
            },
            {
              icon: BarChart3,
              title: "Analytics Dashboard",
              description: "Track queries, top questions, and performance metrics",
              color: "from-red-400 to-pink-500"
            },
            {
              icon: Settings,
              title: "Full Customization",
              description: "Brand colors, tone, welcome messages, and restricted topics",
              color: "from-indigo-400 to-purple-500"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-neon-blue/10 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white font-display group-hover:text-neon-blue transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300">
              Join hundreds of businesses already using AI-powered customer support
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-2xl hover:shadow-neon-blue/25 transform hover:scale-105 transition-all duration-300 group">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-950/80 backdrop-blur-xl border-t border-gray-800/50 py-12 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-6 h-6 text-neon-blue" />
            <span className="text-xl font-bold font-display text-white">ChatSaaS</span>
          </div>
          <p className="text-gray-500">© 2024 ChatSaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
