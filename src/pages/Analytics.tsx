
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, MessageSquare, Users, Clock, ThumbsUp, ThumbsDown, 
  Download, Calendar, ArrowLeft, Zap, Target, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const conversationData = [
    { name: 'Mon', conversations: 45, resolved: 42, satisfaction: 4.2 },
    { name: 'Tue', conversations: 52, resolved: 48, satisfaction: 4.1 },
    { name: 'Wed', conversations: 38, resolved: 35, satisfaction: 4.3 },
    { name: 'Thu', conversations: 61, resolved: 58, satisfaction: 4.4 },
    { name: 'Fri', conversations: 73, resolved: 69, satisfaction: 4.2 },
    { name: 'Sat', conversations: 28, resolved: 26, satisfaction: 4.5 },
    { name: 'Sun', conversations: 34, resolved: 32, satisfaction: 4.3 }
  ];

  const topicsData = [
    { name: 'Billing', value: 35, color: '#8884d8' },
    { name: 'Technical Support', value: 28, color: '#82ca9d' },
    { name: 'Product Info', value: 20, color: '#ffc658' },
    { name: 'Account Issues', value: 12, color: '#ff7300' },
    { name: 'General', value: 5, color: '#00c4a7' }
  ];

  const responseTimeData = [
    { time: '00:00', avgTime: 1.2 },
    { time: '04:00', avgTime: 0.8 },
    { time: '08:00', avgTime: 2.1 },
    { time: '12:00', avgTime: 3.2 },
    { time: '16:00', avgTime: 2.8 },
    { time: '20:00', avgTime: 1.9 }
  ];

  const satisfactionData = [
    { month: 'Jan', score: 4.1 },
    { month: 'Feb', score: 4.2 },
    { month: 'Mar', score: 4.0 },
    { month: 'Apr', score: 4.3 },
    { month: 'May', score: 4.4 },
    { month: 'Jun', score: 4.2 }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
            <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              Live Data
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32 bg-gray-800/50 border-gray-700/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-neon-blue hover:bg-neon-cyan">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Total Conversations</CardTitle>
                <MessageSquare className="w-4 h-4 text-neon-blue" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">1,247</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                <span className="text-green-400">+12.5%</span>
                <span className="text-gray-400 ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Avg Response Time</CardTitle>
                <Clock className="w-4 h-4 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">1.8s</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                <span className="text-green-400">-0.3s</span>
                <span className="text-gray-400 ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Resolution Rate</CardTitle>
                <Target className="w-4 h-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">94.2%</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                <span className="text-green-400">+2.1%</span>
                <span className="text-gray-400 ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">Satisfaction Score</CardTitle>
                <Heart className="w-4 h-4 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">4.3/5</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                <span className="text-green-400">+0.2</span>
                <span className="text-gray-400 ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="conversations" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800/50">
            <TabsTrigger value="conversations" className="data-[state=active]:bg-neon-blue/20">Conversations</TabsTrigger>
            <TabsTrigger value="topics" className="data-[state=active]:bg-neon-blue/20">Topics</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-neon-blue/20">Performance</TabsTrigger>
            <TabsTrigger value="satisfaction" className="data-[state=active]:bg-neon-blue/20">Satisfaction</TabsTrigger>
          </TabsList>

          <TabsContent value="conversations">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Daily Conversations</CardTitle>
                <CardDescription className="text-gray-400">
                  Track conversation volume and resolution rates over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="conversations" fill="#3B82F6" name="Total Conversations" />
                      <Bar dataKey="resolved" fill="#10B981" name="Resolved" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="topics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Conversation Topics</CardTitle>
                  <CardDescription className="text-gray-400">
                    Most common topics discussed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={topicsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {topicsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Topic Breakdown</CardTitle>
                  <CardDescription className="text-gray-400">
                    Detailed topic statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topicsData.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: topic.color }}
                          ></div>
                          <span className="text-white font-medium">{topic.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">{topic.value}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Response Time Analysis</CardTitle>
                <CardDescription className="text-gray-400">
                  Average response time throughout the day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={responseTimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="avgTime" 
                        stroke="#F59E0B" 
                        fill="#F59E0B" 
                        fillOpacity={0.3}
                        name="Avg Response Time (s)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="satisfaction">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Customer Satisfaction Trends</CardTitle>
                <CardDescription className="text-gray-400">
                  Monthly satisfaction score progression
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={satisfactionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis domain={[3.5, 5]} stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#EF4444" 
                        strokeWidth={3}
                        dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }}
                        name="Satisfaction Score"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
