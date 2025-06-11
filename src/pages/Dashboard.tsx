
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Bot, BarChart3, Settings, Upload, Users, MessageSquare, Shield, LogOut, Sparkles, ArrowRight, Zap, TrendingUp, Star, Heart, Frown, Meh, Smile, ThumbsUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const navigate = useNavigate();

  const stats = {
    totalQueries: 1247,
    activeUsers: 89,
    documentsUploaded: 12,
    responseTime: '1.2s',
    satisfactionRate: '96%',
    monthlyGrowth: '+24%',
    averageRating: 4.8,
    totalRatings: 234
  };

  // Sample interaction data with ratings
  const recentInteractions = [
    {
      id: 1,
      customerName: 'John Doe',
      message: 'How do I reset my password?',
      response: 'You can reset your password by clicking on "Forgot Password" on the login page...',
      rating: 5,
      timestamp: '2 hours ago',
      addedToKB: false
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      message: 'What are your business hours?',
      response: 'Our business hours are Monday to Friday, 9 AM to 6 PM EST...',
      rating: 4,
      timestamp: '4 hours ago',
      addedToKB: true
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      message: 'How do I cancel my subscription?',
      response: 'To cancel your subscription, please visit your account settings...',
      rating: 3,
      timestamp: '6 hours ago',
      addedToKB: false
    }
  ];

  const getRatingIcon = (rating: number) => {
    switch (rating) {
      case 5: return <ThumbsUp className="w-4 h-4 text-green-500" />;
      case 4: return <Smile className="w-4 h-4 text-blue-500" />;
      case 3: return <Meh className="w-4 h-4 text-yellow-500" />;
      case 2: return <Frown className="w-4 h-4 text-orange-500" />;
      case 1: return <Heart className="w-4 h-4 text-red-500" />;
      default: return <Meh className="w-4 h-4 text-gray-500" />;
    }
  };

  const addToKnowledgeBase = (interactionId: number) => {
    // This would normally make an API call
    console.log(`Adding interaction ${interactionId} to knowledge base`);
  };

  const handleStartOnboarding = () => {
    setShowOnboarding(false);
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-gray-950 dark">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-neon-blue animate-glow" />
              <span className="text-2xl font-bold text-white font-display">Chaste</span>
            </div>
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Pro Plan Active
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Acme Corp</span>
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800/50">
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800/50">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800/50 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue rounded-lg border border-neon-blue/30">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/dashboard/customize" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
              <Settings className="w-5 h-5" />
              <span>Customize</span>
            </Link>
            <Link to="/dashboard/documents" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
              <Upload className="w-5 h-5" />
              <span>Knowledge Base</span>
            </Link>
            <Link to="/dashboard/analytics" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
              <TrendingUp className="w-5 h-5" />
              <span>Analytics</span>
            </Link>
            <Link to="/dashboard/privacy" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
              <Shield className="w-5 h-5" />
              <span>Privacy & Data</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2 font-display">Welcome to Your AI Command Center</h1>
            <p className="text-gray-400">Monitor, customize, and optimize your intelligent customer support</p>
          </div>

          {/* Onboarding Prompt */}
          {showOnboarding && (
            <Card className="mb-8 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10 border border-neon-blue/30 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">Let's Get Your AI Assistant Ready!</CardTitle>
                      <CardDescription className="text-gray-300">
                        It only takes 5 minutes to set up your intelligent customer support. We'll guide you through every step.
                      </CardDescription>
                    </div>
                  </div>
                  <Button 
                    onClick={handleStartOnboarding}
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 group"
                  >
                    Start Setup
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-400">Total Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-neon-blue" />
                    <span className="text-2xl font-bold text-white">{stats.totalQueries.toLocaleString()}</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                    {stats.monthlyGrowth}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-400">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-white">{stats.averageRating}</span>
                  <span className="text-sm text-gray-400">({stats.totalRatings} ratings)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-400">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-white">{stats.activeUsers}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-400">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-white">{stats.responseTime}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Interactions with Ratings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Recent Interactions & Ratings</CardTitle>
                <CardDescription className="text-gray-400">Customer interactions with satisfaction ratings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInteractions.map((interaction) => (
                  <div key={interaction.id} className="border border-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{interaction.customerName}</span>
                      <div className="flex items-center space-x-2">
                        {getRatingIcon(interaction.rating)}
                        <span className="text-sm text-gray-400">{interaction.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{interaction.message}</p>
                    <p className="text-xs text-gray-500 mb-3">{interaction.response}</p>
                    <div className="flex items-center justify-between">
                      <Badge className={interaction.addedToKB ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}>
                        {interaction.addedToKB ? "In Knowledge Base" : "Not in KB"}
                      </Badge>
                      {!interaction.addedToKB && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => addToKnowledgeBase(interaction.id)}
                          className="text-neon-blue border-neon-blue/30 hover:bg-neon-blue/10"
                        >
                          Add to KB
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-400">Manage your AI assistant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Documents
                </Button>
                <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Customize Assistant
                </Button>
                <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300" variant="outline">
                  <Bot className="w-4 h-4 mr-2" />
                  Test Assistant
                </Button>
                <Link to="/integrations">
                  <Button className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300" variant="outline">
                    <Zap className="w-4 h-4 mr-2" />
                    View Integrations
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Embed Code */}
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-white">Integration Code</CardTitle>
              <CardDescription className="text-gray-400">Add this code to your website to display the AI assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-950/80 p-4 rounded-lg border border-gray-800/50">
                <code className="text-green-400 text-sm font-mono">
{`<script>
  (function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id))return;
    js=d.createElement(s);js.id=id;
    js.src="https://chaste.ai/embed/assistant-${Math.random().toString(36).substr(2, 9)}.js";
    fjs.parentNode.insertBefore(js,fjs);
  })(document,"script","chaste-embed");
</script>`}
                </code>
              </div>
              <Button className="mt-4 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue" variant="outline">
                Copy Integration Code
              </Button>
            </CardContent>
          </Card>

          {/* Copyright Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">© 2025 Chaste AI. All rights reserved.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
