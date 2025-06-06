
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, Users, Settings, AlertTriangle, Search, Eye, Ban, LogOut, 
  DollarSign, BarChart, FileText, Shield, Globe, Palette,
  Database, Cloud, MessageSquare, Mail, Calendar, PlusCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');
  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 'free',
      name: 'Free',
      price: 0,
      features: [
        '1 Agent',
        '60 interactions/month',
        'Website data extraction',
        'Up to 5 document uploads',
        'Email integration',
        'Basic statistics',
        'Human handoff',
        'Limited technical support'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 22,
      features: [
        'Unlimited agents',
        '600 interactions/month',
        'Up to 10 document uploads',
        'Customizable forms',
        'Calendar integration',
        'Email summaries',
        'Human handoff',
        'Basic ticketing system',
        'Chatbot UI customization',
        'Response customization',
        'Priority technical support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 45,
      features: [
        'WhatsApp integration',
        'Customer satisfaction surveys',
        'Advanced analytics',
        'Basic integrations with external data sources'
      ]
    }
  ]);

  const { toast } = useToast();

  const clients = [
    {
      id: 1,
      businessName: 'Acme Corp',
      email: 'john@acme.com',
      status: 'active',
      plan: 'premium',
      queries: 1247,
      joinDate: '2024-01-15',
      trialEnds: '2024-02-15'
    },
    {
      id: 2,
      businessName: 'TechStart Inc',
      email: 'sarah@techstart.com',
      status: 'trial',
      plan: 'standard',
      queries: 156,
      joinDate: '2024-01-20',
      trialEnds: '2024-02-20'
    },
    {
      id: 3,
      businessName: 'Global Solutions',
      email: 'mike@global.com',
      status: 'suspended',
      plan: 'free',
      queries: 892,
      joinDate: '2024-01-10',
      trialEnds: '2024-02-10'
    }
  ];

  const stats = {
    totalClients: 45,
    activeTrials: 23,
    totalQueries: 12847,
    suspendedAccounts: 2,
    monthlyRevenue: 1250,
    avgResponseTime: '2.3s'
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>;
      case 'trial':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Trial</Badge>;
      case 'suspended':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredClients = clients.filter(client =>
    client.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="w-8 h-8 text-neon-blue animate-glow" />
                <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Chaste AI
              </span>
            </div>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Admin Panel</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Admin User</span>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900/30 border-r border-gray-800/50 min-h-screen">
          <nav className="p-4">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} orientation="vertical" className="w-full">
              <TabsList className="grid w-full grid-cols-1 bg-transparent h-auto space-y-1">
                <TabsTrigger value="overview" className="w-full justify-start bg-transparent data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-gray-400 hover:text-white">
                  <BarChart className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="clients" className="w-full justify-start bg-transparent data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-gray-400 hover:text-white">
                  <Users className="w-4 h-4 mr-2" />
                  Client Management
                </TabsTrigger>
                <TabsTrigger value="pricing" className="w-full justify-start bg-transparent data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-gray-400 hover:text-white">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Pricing Configuration
                </TabsTrigger>
                <TabsTrigger value="analytics" className="w-full justify-start bg-transparent data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-gray-400 hover:text-white">
                  <BarChart className="w-4 h-4 mr-2" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="system" className="w-full justify-start bg-transparent data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-gray-400 hover:text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  System Settings
                </TabsTrigger>
                <TabsTrigger value="security" className="w-full justify-start bg-transparent data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-gray-400 hover:text-white">
                  <Shield className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                <p className="text-gray-400">Monitor system performance and manage your platform</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-900/50 border-gray-800/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-400">Total Clients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-2xl font-bold text-white">{stats.totalClients}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-400">Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-white">${stats.monthlyRevenue}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-400">Total Queries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-purple-400" />
                      <span className="text-2xl font-bold text-white">{stats.totalQueries.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Client Management Tab */}
            <TabsContent value="clients" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Client Management</CardTitle>
                  <CardDescription className="text-gray-400">Monitor and manage all client accounts</CardDescription>
                  <div className="flex items-center space-x-2 mt-4">
                    <Search className="w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search clients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm bg-gray-800/50 border-gray-700/50 text-white"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredClients.map((client) => (
                      <div key={client.id} className="border border-gray-800/50 rounded-lg p-4 bg-gray-800/20">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-medium text-white">{client.businessName}</h3>
                              {getStatusBadge(client.status)}
                              <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                                {client.plan}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-400">{client.email}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>Joined: {client.joinDate}</span>
                              <span>Queries: {client.queries.toLocaleString()}</span>
                              <span>Trial ends: {client.trialEnds}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="destructive">
                              <Ban className="w-4 h-4 mr-1" />
                              Suspend
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pricing Configuration Tab */}
            <TabsContent value="pricing" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Pricing Plans Configuration</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure pricing plans and features for your platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {pricingPlans.map((plan) => (
                      <Card key={plan.id} className="bg-gray-800/30 border-gray-700/50">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white">{plan.name} Plan</CardTitle>
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-neon-blue">
                                ${plan.price}
                              </span>
                              <span className="text-gray-400">/month</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Label htmlFor={`price-${plan.id}`} className="text-gray-300">Price</Label>
                            <Input
                              id={`price-${plan.id}`}
                              type="number"
                              value={plan.price}
                              onChange={(e) => {
                                const newPrice = parseInt(e.target.value);
                                setPricingPlans(plans => 
                                  plans.map(p => p.id === plan.id ? {...p, price: newPrice} : p)
                                );
                              }}
                              className="bg-gray-800/50 border-gray-700/50 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-gray-300">Features</Label>
                            <Textarea
                              value={plan.features.join('\n')}
                              onChange={(e) => {
                                const newFeatures = e.target.value.split('\n').filter(f => f.trim());
                                setPricingPlans(plans => 
                                  plans.map(p => p.id === plan.id ? {...p, features: newFeatures} : p)
                                );
                              }}
                              rows={6}
                              className="bg-gray-800/50 border-gray-700/50 text-white"
                              placeholder="Enter features, one per line"
                            />
                          </div>
                          <Button className="w-full bg-neon-blue hover:bg-neon-cyan">
                            Save Changes
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Platform Analytics</CardTitle>
                  <CardDescription className="text-gray-400">
                    Monitor usage patterns and system performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-400 mb-2">Avg Response Time</h3>
                      <p className="text-2xl font-bold text-green-400">{stats.avgResponseTime}</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-400 mb-2">Active Trials</h3>
                      <p className="text-2xl font-bold text-blue-400">{stats.activeTrials}</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-400 mb-2">Conversion Rate</h3>
                      <p className="text-2xl font-bold text-purple-400">23%</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg">
                      <h3 className="text-sm text-gray-400 mb-2">Uptime</h3>
                      <p className="text-2xl font-bold text-green-400">99.9%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Settings Tab */}
            <TabsContent value="system" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">System Configuration</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure global system settings and API integrations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">API Configuration</h3>
                      <div>
                        <Label className="text-gray-300">Groq API Key</Label>
                        <Input type="password" placeholder="gsk_..." className="bg-gray-800/50 border-gray-700/50 text-white" />
                      </div>
                      <div>
                        <Label className="text-gray-300">JINA API Key</Label>
                        <Input type="password" placeholder="jina_..." className="bg-gray-800/50 border-gray-700/50 text-white" />
                      </div>
                      <div>
                        <Label className="text-gray-300">Mistral API Key</Label>
                        <Input type="password" placeholder="vIL4z3s1..." className="bg-gray-800/50 border-gray-700/50 text-white" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">System Limits</h3>
                      <div>
                        <Label className="text-gray-300">Max File Upload Size (MB)</Label>
                        <Input type="number" defaultValue="10" className="bg-gray-800/50 border-gray-700/50 text-white" />
                      </div>
                      <div>
                        <Label className="text-gray-300">Max Documents per User</Label>
                        <Input type="number" defaultValue="100" className="bg-gray-800/50 border-gray-700/50 text-white" />
                      </div>
                      <div>
                        <Label className="text-gray-300">Default Rate Limit (req/min)</Label>
                        <Input type="number" defaultValue="60" className="bg-gray-800/50 border-gray-700/50 text-white" />
                      </div>
                    </div>
                  </div>
                  <Button className="bg-neon-blue hover:bg-neon-cyan">
                    Save System Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Security Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure security policies and access controls
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-400">Require 2FA for all admin accounts</p>
                      </div>
                      <Button variant="outline" className="border-gray-600 text-gray-300">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">API Rate Limiting</h3>
                        <p className="text-sm text-gray-400">Protect against API abuse</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                      <div>
                        <h3 className="font-medium text-white">Audit Logging</h3>
                        <p className="text-sm text-gray-400">Track all admin actions</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">Enabled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
