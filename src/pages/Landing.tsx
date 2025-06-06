import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, BarChart, ArrowRight, Star, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChatInterface } from '@/components/ChatInterface';
import TypewriterText from '@/components/TypewriterText';

const Landing = () => {
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Deploy AI Customer Support In{' '}
              <TypewriterText 
                texts={["Minutes", "Not Hours"]}
                speed={100}
                loop={true}
                pauseDuration={2000}
                className="text-neon-blue"
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your customer service with intelligent AI agents that understand your business, 
              respond instantly, and scale effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white px-8 py-4 text-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                  Start for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-300 text-lg">Explore the powerful features that make Chaste AI the perfect solution for your customer support needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <Zap className="w-10 h-10 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-semibold">Instant Responses</CardTitle>
                <CardDescription className="text-gray-400">Provide immediate answers to customer inquiries, reducing wait times and improving satisfaction.</CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <Shield className="w-10 h-10 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-semibold">Secure & Reliable</CardTitle>
                <CardDescription className="text-gray-400">Ensure the security of your data with our enterprise-grade security measures and reliable infrastructure.</CardDescription>
              </CardHeader>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <BarChart className="w-10 h-10 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-semibold">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-400">Gain valuable insights into customer behavior and support performance with our advanced analytics dashboard.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-900/30 border-t border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
            <p className="text-gray-300 text-lg">Join the thousands of businesses that are already using Chaste AI to transform their customer support.</p>
          </div>

          <div className="flex items-center justify-around flex-wrap gap-8">
            {/* Company Logos */}
            <div className="text-gray-400">
              <Users className="w-12 h-12 mx-auto mb-2" />
              <p className="text-center">Acme Corp</p>
            </div>
            <div className="text-gray-400">
              <Clock className="w-12 h-12 mx-auto mb-2" />
              <p className="text-center">Tech Solutions</p>
            </div>
            <div className="text-gray-400">
              <Star className="w-12 h-12 mx-auto mb-2" />
              <p className="text-center">Global Innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-gray-300 text-xl mb-12">
            Deploy your AI customer support agent in minutes and start providing exceptional service to your customers.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white px-8 py-4 text-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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
                Revolutionizing customer support with intelligent AI agents that understand your business and delight your customers.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-blue">
                  Privacy Policy
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-blue">
                  Terms of Service
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-gray-400 hover:text-neon-blue transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-neon-blue transition-colors">Pricing</Link></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">Documentation</Button></li>
                <li><Button variant="ghost" className="text-gray-400 hover:text-neon-blue p-0 h-auto">API</Button></li>
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

          <div className="border-t border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Chaste AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="outline" className="text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                All systems operational
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface />
    </div>
  );
};

export default Landing;
