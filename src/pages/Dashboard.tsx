
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, BarChart3, Settings, Upload, Users, MessageSquare, Shield, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = {
    totalQueries: 1247,
    activeUsers: 89,
    documentsUploaded: 12,
    responseTime: '1.2s'
  };

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
            <Badge className="bg-green-100 text-green-800">Trial Active</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Acme Corp</span>
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
            <Link to="/dashboard" className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/dashboard/customize" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>Customize</span>
            </Link>
            <Link to="/dashboard/documents" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Upload className="w-5 h-5" />
              <span>Documents</span>
            </Link>
            <Link to="/dashboard/privacy" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Shield className="w-5 h-5" />
              <span>Privacy & Data</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Monitor your chatbot performance and customer interactions</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold">{stats.totalQueries.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-2xl font-bold">{stats.activeUsers}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-purple-600" />
                  <span className="text-2xl font-bold">{stats.documentsUploaded}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-orange-600" />
                  <span className="text-2xl font-bold">{stats.responseTime}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks for your chatbot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Documents
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Customize Chatbot
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bot className="w-4 h-4 mr-2" />
                  Test Chatbot
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest interactions and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Document uploaded</p>
                  <p className="text-gray-600">FAQ.pdf added to knowledge base</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">45 new queries</p>
                  <p className="text-gray-600">Customer support questions answered</p>
                  <p className="text-xs text-gray-400">Today</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Chatbot customized</p>
                  <p className="text-gray-600">Updated welcome message and colors</p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Embed Code */}
          <Card>
            <CardHeader>
              <CardTitle>Embed Code</CardTitle>
              <CardDescription>Add this code to your website to display the chatbot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 p-4 rounded-lg">
                <code className="text-green-400 text-sm">
{`<script>
  (function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id))return;
    js=d.createElement(s);js.id=id;
    js.src="https://chatsaas.com/embed/chatbot-123.js";
    fjs.parentNode.insertBefore(js,fjs);
  })(document,"script","chatsaas-embed");
</script>`}
                </code>
              </div>
              <Button className="mt-4" variant="outline">
                Copy Code
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
