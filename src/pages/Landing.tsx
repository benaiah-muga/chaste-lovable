import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, BarChart, ArrowRight, Star, Users, Clock, CheckCircle, Building2, MessageSquare, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChatInterface } from '@/components/ChatInterface';
import TypewriterText from '@/components/TypewriterText';

const Landing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      popular: false,
      features: [
        "1 Agent",
        "60 interactions/month",
        "Website data extraction",
        "Up to 5 document uploads",
        "Email integration",
        "Basic statistics"
      ]
    },
    {
      name: "Standard",
      price: "$22",
      period: "per month",
      description: "Great for growing businesses",
      popular: true,
      features: [
        "Everything in Free, plus:",
        "Unlimited agents",
        "600 interactions/month",
        "Up to 10 document uploads",
        "Custom branding",
        "Priority support"
      ]
    },
    {
      name: "Premium",
      price: "$45",
      period: "per month",
      description: "For advanced automation needs",
      popular: false,
      features: [
        "Everything in Standard, plus:",
        "WhatsApp integration",
        "Advanced analytics",
        "API access",
        "24/7 priority support"
      ]
    }
  ];

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
              <Link to="/docs" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Docs</Link>
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
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free plan available</span>
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

      {/* What is Chaste AI Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What is Chaste AI?</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Chaste AI is an intelligent customer support platform that transforms how businesses interact with their customers. 
              Our AI-powered chatbots provide instant, accurate responses while learning from your business data to deliver personalized experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800/50 text-center">
              <CardHeader>
                <Building2 className="w-10 h-10 text-neon-blue mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold text-white">For Growing Businesses</CardTitle>
                <CardDescription className="text-gray-400">
                  Perfect for startups and SMEs looking to scale their customer support without hiring more staff.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50 text-center">
              <CardHeader>
                <Users className="w-10 h-10 text-neon-blue mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold text-white">For Enterprise Teams</CardTitle>
                <CardDescription className="text-gray-400">
                  Reduce support ticket volume and improve response times with intelligent automation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50 text-center">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-neon-blue mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold text-white">For Customer-Centric Companies</CardTitle>
                <CardDescription className="text-gray-400">
                  Deliver 24/7 support that never sleeps, ensuring your customers always get help when they need it.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 bg-gray-900/30 border-t border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Powerful Dashboard at Your Fingertips</h2>
            <p className="text-gray-300 text-lg">
              Monitor conversations, analyze performance, and customize your AI assistant all from one intuitive dashboard.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg blur-3xl"></div>
            <img 
              src="/lovable-uploads/a1f8b9d8-f624-4e15-88e6-14c2468b1d0e.png" 
              alt="Chaste AI Dashboard" 
              className="relative w-full rounded-lg border border-gray-800/50 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
            <p className="text-gray-300 text-lg">Explore the powerful features that make Chaste AI the perfect solution for your customer support needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <Zap className="w-10 h-10 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-semibold text-white">Instant Responses</CardTitle>
                <CardDescription className="text-gray-400">Provide immediate answers to customer inquiries, reducing wait times and improving satisfaction.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <Shield className="w-10 h-10 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-semibold text-white">Secure & Reliable</CardTitle>
                <CardDescription className="text-gray-400">Ensure the security of your data with our enterprise-grade security measures and reliable infrastructure.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <BarChart className="w-10 h-10 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-semibold text-white">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-400">Gain valuable insights into customer behavior and support performance with our advanced analytics dashboard.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900/30 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Choose Your Plan</h2>
            <p className="text-gray-300 text-lg">Start with our free plan and scale as you grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-gray-900/50 backdrop-blur-xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-neon-blue/50 shadow-2xl shadow-neon-blue/20 scale-105' 
                  : 'border-gray-800/50 hover:border-neon-blue/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-1 flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-400 mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/signup">
                    <Button className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25' 
                        : 'bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50'
                    } transition-all duration-300`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Trusted by Leading Companies</h2>
            <p className="text-gray-300 text-lg">Join the thousands of businesses that are already using Chaste AI to transform their customer support.</p>
          </div>

          <div className="flex items-center justify-around flex-wrap gap-8">
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
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Get Started?</h2>
          <p className="text-gray-300 text-xl mb-12">
            Deploy your AI customer support agent in minutes and start providing exceptional service to your customers.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white px-8 py-4 text-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
              Start Your Free Plan
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
                <li><Link to="/docs" className="text-gray-400 hover:text-neon-blue transition-colors">Documentation</Link></li>
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
