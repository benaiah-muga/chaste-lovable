
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Bot, Users, Settings, AlertTriangle, Search, Eye, Ban, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const clients = [
    {
      id: 1,
      businessName: 'Acme Corp',
      email: 'john@acme.com',
      status: 'active',
      queries: 1247,
      joinDate: '2024-01-15',
      trialEnds: '2024-02-15'
    },
    {
      id: 2,
      businessName: 'TechStart Inc',
      email: 'sarah@techstart.com',
      status: 'trial',
      queries: 156,
      joinDate: '2024-01-20',
      trialEnds: '2024-02-20'
    },
    {
      id: 3,
      businessName: 'Global Solutions',
      email: 'mike@global.com',
      status: 'suspended',
      queries: 892,
      joinDate: '2024-01-10',
      trialEnds: '2024-02-10'
    }
  ];

  const stats = {
    totalClients: 45,
    activeTrials: 23,
    totalQueries: 12847,
    suspendedAccounts: 2
  };

  const handleRevokeAccess = (clientId: number, businessName: string) => {
    toast({
      title: "Access revoked",
      description: `${businessName}'s access has been suspended.`,
      variant: "destructive"
    });
  };

  const handleRestoreAccess = (clientId: number, businessName: string) => {
    toast({
      title: "Access restored",
      description: `${businessName}'s access has been restored.`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'trial':
        return <Badge className="bg-blue-100 text-blue-800">Trial</Badge>;
      case 'suspended':
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredClients = clients.filter(client =>
    client.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ChatSaaS</span>
            </div>
            <Badge className="bg-purple-100 text-purple-800">Admin Panel</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Admin User</span>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="flex items-center space-x-3 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
              <Users className="w-5 h-5" />
              <span>Client Management</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>System Settings</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Bot className="w-5 h-5" />
              <span>Model Management</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage clients, monitor system health, and control access</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold">{stats.totalClients}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Active Trials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-green-600" />
                  <span className="text-2xl font-bold">{stats.activeTrials}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <span className="text-2xl font-bold">{stats.totalQueries.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Suspended</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="text-2xl font-bold">{stats.suspendedAccounts}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Management */}
          <Card>
            <CardHeader>
              <CardTitle>Client Management</CardTitle>
              <CardDescription>Monitor and manage all client accounts</CardDescription>
              <div className="flex items-center space-x-2 mt-4">
                <Search className="w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <div key={client.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-gray-900">{client.businessName}</h3>
                          {getStatusBadge(client.status)}
                        </div>
                        <p className="text-sm text-gray-600">{client.email}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Joined: {client.joinDate}</span>
                          <span>Queries: {client.queries.toLocaleString()}</span>
                          <span>Trial ends: {client.trialEnds}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        {client.status === 'suspended' ? (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleRestoreAccess(client.id, client.businessName)}
                          >
                            Restore
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleRevokeAccess(client.id, client.businessName)}
                          >
                            <Ban className="w-4 h-4 mr-1" />
                            Revoke
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
