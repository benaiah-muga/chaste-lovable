
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, ArrowLeft, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
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
        "Basic statistics",
        "Human handoff",
        "Limited technical support"
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
        "Customizable forms",
        "Calendar integration",
        "Email summaries of collected data",
        "Human handoff",
        "Basic ticketing system",
        "Chatbot UI customization",
        "Response customization",
        "Priority technical support"
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
        "Customer satisfaction surveys",
        "Advanced analytics",
        "Basic integrations with external data sources",
        "Advanced AI capabilities",
        "Custom branding",
        "API access",
        "24/7 priority support"
      ]
    }
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
            <Link to="/" className="inline-flex items-center text-neon-blue hover:text-neon-cyan text-sm transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to home
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
                Start for Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            Simple, <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs. All plans include our core AI features and can be upgraded anytime.
          </p>
          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 px-4 py-2">
            ✨ Free plan available - no trial needed
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
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
                <CardTitle className="text-2xl font-bold text-white font-display">{plan.name}</CardTitle>
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
                      <Check className="w-4 h-4 text-neon-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className={feature.includes("Everything in") ? "text-gray-300 font-medium" : "text-gray-400"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/signup">
                  <Button className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25' 
                      : 'bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50'
                  } transition-all duration-300`}>
                    {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-400 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">What happens when I exceed my interaction limit?</h3>
                <p className="text-gray-400 text-sm">Your chatbot will continue to work, but you'll be charged for additional interactions at standard rates.</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Do you offer annual discounts?</h3>
                <p className="text-gray-400 text-sm">Yes! Save 20% when you pay annually. Contact our sales team for enterprise pricing.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-gray-400 text-sm">No setup fees ever. You only pay for your monthly subscription.</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-400 text-sm">Absolutely. Cancel anytime with no cancellation fees. Your service continues until the end of your billing period.</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Do you offer custom enterprise plans?</h3>
                <p className="text-gray-400 text-sm">Yes, we offer custom solutions for large organizations. Contact our sales team to discuss your needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10 rounded-2xl p-12 border border-neon-blue/20">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Chaste AI to provide exceptional customer support.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
              Start for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
