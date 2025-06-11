
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bot, ArrowLeft, Zap, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Integrations = () => {
  const integrations = [
    {
      name: 'Zendesk',
      description: 'Seamlessly integrate with Zendesk for unified customer support workflows',
      logo: (
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">Z</span>
        </div>
      ),
      status: 'coming-soon',
      features: ['Ticket creation', 'Agent handoff', 'Customer history sync', 'Automated routing']
    },
    {
      name: 'Odoo',
      description: 'Connect with Odoo CRM for comprehensive business management integration',
      logo: (
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">O</span>
        </div>
      ),
      status: 'coming-soon',
      features: ['Lead generation', 'Customer data sync', 'Sales pipeline integration', 'Activity tracking']
    },
    {
      name: 'Freshdesk',
      description: 'Integrate with Freshdesk to enhance your customer service capabilities',
      logo: (
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">F</span>
        </div>
      ),
      status: 'coming-soon',
      features: ['Multi-channel support', 'Agent collaboration', 'Knowledge base sync', 'Analytics integration']
    },
    {
      name: 'Salesforce',
      description: 'Connect with the world\'s leading CRM platform for enterprise solutions',
      logo: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
      ),
      status: 'coming-soon',
      features: ['Lead management', 'Opportunity tracking', 'Customer 360 view', 'Workflow automation']
    },
    {
      name: 'HubSpot',
      description: 'Integrate with HubSpot for inbound marketing and sales automation',
      logo: (
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">H</span>
        </div>
      ),
      status: 'coming-soon',
      features: ['Contact management', 'Deal tracking', 'Marketing automation', 'Analytics dashboard']
    },
    {
      name: 'Slack',
      description: 'Get real-time notifications and manage customer interactions in Slack',
      logo: (
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">#</span>
        </div>
      ),
      status: 'coming-soon',
      features: ['Real-time alerts', 'Team collaboration', 'Quick responses', 'Status updates']
    }
  ];

  const handleComingSoon = (integrationName: string) => {
    alert(`${integrationName} integration is coming soon! We'll notify you when it's ready.`);
  };

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
            <Link to="/features" className="inline-flex items-center text-neon-blue hover:text-neon-cyan text-sm transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to features
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
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">Integrations</span> & Partnerships
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Connect Chaste AI with your favorite tools and platforms for a seamless workflow experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue border border-neon-blue/20 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Integrations
            </Badge>
            <Badge className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 border border-yellow-500/20 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              More Coming Soon
            </Badge>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <Card className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10 border border-neon-blue/30 mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Exciting Integrations Coming Soon!</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're working hard to bring you seamless integrations with the most popular CRM and customer service platforms. 
              Each integration will provide deep, native connectivity to enhance your customer support workflow.
            </p>
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue">
              Get Notified When Ready
            </Button>
          </CardContent>
        </Card>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {integration.logo}
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>
                <CardTitle className="text-white font-display group-hover:text-neon-blue transition-colors duration-300">
                  {integration.name}
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {integration.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <CheckCircle className="w-4 h-4 text-neon-blue mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  onClick={() => handleComingSoon(integration.name)}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300"
                  variant="outline"
                >
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What to Expect */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white font-display text-center">What to Expect</CardTitle>
            <CardDescription className="text-gray-400 text-center">
              When our integrations launch, you'll get these powerful capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="text-white font-semibold mb-2">Seamless Data Sync</h3>
                <p className="text-gray-400 text-sm">
                  Customer data, conversation history, and support tickets automatically synchronized across platforms
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Intelligent Handoffs</h3>
                <p className="text-gray-400 text-sm">
                  Smart routing to human agents when needed, with full context and conversation history
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Unified Workflows</h3>
                <p className="text-gray-400 text-sm">
                  Manage all customer interactions from your existing tools while leveraging AI capabilities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Integrations;
