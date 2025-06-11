
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, ArrowLeft, Book, Settings, Upload, MessageSquare, BarChart3, Shield, Users, Globe, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and set up your first AI assistant",
      topics: [
        "Creating your account",
        "Dashboard overview",
        "Basic configuration",
        "First deployment"
      ]
    },
    {
      icon: Upload,
      title: "Knowledge Base",
      description: "Upload and manage your documents and training data",
      topics: [
        "Supported file formats",
        "Document processing",
        "Content optimization",
        "Knowledge updates"
      ]
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Personalize your chatbot's appearance and behavior",
      topics: [
        "Branding and colors",
        "Personality settings",
        "Welcome messages",
        "Widget positioning"
      ]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "Integrate Chaste AI into your applications",
      topics: [
        "REST API endpoints",
        "Authentication",
        "SDKs and libraries",
        "Rate limits"
      ],
      link: "/api-docs"
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Connect with CRM systems and other platforms",
      topics: [
        "Zendesk integration",
        "Odoo CRM sync",
        "Freshdesk support",
        "Custom webhooks"
      ],
      link: "/integrations"
    },
    {
      icon: Globe,
      title: "Deployment",
      description: "Deploy your chatbot across different platforms",
      topics: [
        "Website embedding",
        "WhatsApp integration",
        "Mobile app SDK",
        "Custom implementations"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Monitor performance and gain insights",
      topics: [
        "Conversation metrics",
        "User satisfaction",
        "Performance reports",
        "Custom dashboards"
      ]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Understand our security measures and data handling",
      topics: [
        "Data encryption",
        "Privacy policies",
        "GDPR compliance",
        "Access controls"
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
            Documentation & <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">Guides</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Everything you need to know to get the most out of Chaste AI. From setup to advanced customization.
          </p>
          <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 px-4 py-2">
            <Book className="w-4 h-4 mr-2" />
            Comprehensive guides & tutorials
          </Badge>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-700/50 p-3 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <CardTitle className="text-white font-display group-hover:text-neon-blue transition-colors duration-300">
                  {section.title}
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-gray-500 flex items-center hover:text-neon-blue transition-colors duration-200 cursor-pointer">
                      <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3 flex-shrink-0"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
                {section.link && (
                  <Link to={section.link}>
                    <Button size="sm" className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue">
                      Explore {section.title}
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Guide */}
        <div className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10 rounded-2xl p-8 border border-neon-blue/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-display text-white mb-4">
              Quick Start Guide
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get your AI assistant up and running in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-neon-blue font-bold">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Sign Up & Setup</h3>
              <p className="text-gray-400 text-sm">Create your account and complete the onboarding process</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-neon-blue font-bold">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Upload Knowledge</h3>
              <p className="text-gray-400 text-sm">Add your documents and training data to the knowledge base</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-neon-blue font-bold">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Deploy & Test</h3>
              <p className="text-gray-400 text-sm">Embed the code and start serving your customers</p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-4">
            Need More Help?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-neon-blue/50 transition-all duration-300">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-gray-900/30 px-6 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Chaste AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
