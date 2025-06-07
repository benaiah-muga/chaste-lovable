
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, ArrowLeft, Zap, Upload, Shield, BarChart3, Settings, MessageSquare, Globe, Smartphone, Database, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Deploy your AI assistant in under 10 minutes with our intuitive setup wizard.",
      details: [
        "One-click deployment to any website",
        "Pre-built templates for common use cases", 
        "Automatic code generation",
        "No technical expertise required"
      ]
    },
    {
      icon: Upload,
      title: "Smart Document Processing",
      description: "Upload any document format and watch as our AI extracts knowledge automatically.",
      details: [
        "Support for PDFs, Word docs, text files",
        "Automatic content extraction and indexing",
        "Smart chunking for optimal retrieval",
        "Real-time document updates"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your sensitive data.",
      details: [
        "End-to-end encryption",
        "SOC 2 Type II compliance",
        "GDPR compliant data handling",
        "Regular security audits"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into customer interactions and satisfaction metrics.",
      details: [
        "Real-time conversation analytics",
        "Customer satisfaction tracking",
        "Performance optimization insights",
        "Custom reporting dashboards"
      ]
    },
    {
      icon: Settings,
      title: "Complete Customization",
      description: "Tailor every aspect of your AI assistant to match your brand perfectly.",
      details: [
        "Custom branding and colors",
        "Personality and tone configuration",
        "Flexible widget positioning",
        "Multi-language support"
      ]
    },
    {
      icon: MessageSquare,
      title: "Intelligent Conversations",
      description: "Context-aware responses that understand your business and customer needs.",
      details: [
        "Natural language understanding",
        "Context retention across conversations",
        "Smart escalation to human agents",
        "Multi-turn conversation handling"
      ]
    },
    {
      icon: Globe,
      title: "Multi-Channel Support",
      description: "Deploy across websites, mobile apps, and messaging platforms seamlessly.",
      details: [
        "Website chat widgets",
        "WhatsApp integration",
        "Mobile SDK for apps",
        "API for custom integrations"
      ]
    },
    {
      icon: Database,
      title: "Knowledge Management",
      description: "Centralized knowledge base with smart content organization and retrieval.",
      details: [
        "Automatic content categorization",
        "Version control for documents",
        "Bulk content management",
        "Search and filter capabilities"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI assistant never sleeps, providing instant support around the clock.",
      details: [
        "Always-on customer support",
        "Instant response times",
        "Global timezone coverage",
        "Automatic fallback handling"
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
            Powerful Features for <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">Modern Support</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Everything you need to create, deploy, and manage intelligent customer support that scales with your business
          </p>
          <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 px-4 py-2">
            ✨ No coding required
          </Badge>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
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
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10 rounded-2xl p-12 border border-neon-blue/20">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Ready to experience these features?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how Chaste AI can transform your customer support in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                Start for Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-neon-blue/50 transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
