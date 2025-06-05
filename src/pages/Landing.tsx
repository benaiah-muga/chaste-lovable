
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Shield, Zap, BarChart3, Upload, Settings, Sparkles, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedChat from '@/components/AnimatedChat';
import { ChatInterface } from '@/components/ChatInterface';
import TypewriterText from '@/components/TypewriterText';

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
              Chaste AI
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
              Home
            </Link>
            <Link to="/features" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
              Features
            </Link>
            <Link to="/solutions" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
              Solutions
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/support" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                Start for Free
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
            <h1 className="text-5xl lg:text-6xl font-bold font-display text-white leading-tight">
              <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Deploy Smart AI Support
              </span>
              <br />
              <span className="text-white">In </span>
              <TypewriterText 
                text="Minutes"
                speed={150}
                delay={1000}
                loop={true}
                pauseDuration={3000}
                className="text-neon-cyan"
              />
              <span className="text-white">, Not Hours</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Transform your customer experience with AI that actually understands your business. 
              Upload your knowledge base, customize your assistant, and deploy intelligent support that scales instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-2xl hover:shadow-neon-blue/25 transform hover:scale-105 transition-all duration-300 group">
                  Start for Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-neon-blue/50 transition-all duration-300">
                Watch Demo
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
            Everything You Need for Intelligent Support
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Designed for businesses that want to provide exceptional customer service at scale
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Lightning Fast Setup",
              description: "Go from zero to deployed AI support in under 10 minutes"
            },
            {
              icon: Upload,
              title: "Smart Document Processing",
              description: "Upload PDFs, docs, and FAQs for context-aware responses"
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level encryption with full data control and compliance"
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              description: "Deep insights into customer queries and satisfaction metrics"
            },
            {
              icon: Settings,
              title: "Total Customization",
              description: "Brand voice, appearance, and behavior that matches your company"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-neon-blue/10 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-700/50 p-3 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-neon-blue" />
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
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300">
              Join innovative businesses already using AI to deliver exceptional support
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-2xl hover:shadow-neon-blue/25 transform hover:scale-105 transition-all duration-300 group">
                Start for Free Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-950/80 backdrop-blur-xl border-t border-gray-800/50 py-12 z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6 text-neon-blue" />
                <span className="text-xl font-bold font-display text-white">Chaste AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Deploy intelligent customer support in minutes, not hours. Transform your customer experience with AI that understands your business.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-400 hover:text-neon-blue transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-neon-blue transition-colors">Pricing</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-neon-blue transition-colors">Solutions</Link></li>
                <li><Link to="/integrations" className="text-gray-400 hover:text-neon-blue transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors">About</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-neon-blue transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-neon-blue transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/support" className="text-gray-400 hover:text-neon-blue transition-colors">Help Center</Link></li>
                <li><Link to="/docs" className="text-gray-400 hover:text-neon-blue transition-colors">Documentation</Link></li>
                <li><Link to="/status" className="text-gray-400 hover:text-neon-blue transition-colors">System Status</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2024 Chaste AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface />
    </div>
  );
};

export default Landing;
