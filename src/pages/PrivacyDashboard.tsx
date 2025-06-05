
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertTriangle, Download, Trash2, Shield, FileText, MessageSquare, Database, Bot, ArrowLeft, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const PrivacyDashboard = () => {
  const { toast } = useToast();
  const [deleteAccountInput, setDeleteAccountInput] = useState('');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const dataStats = {
    documents: 12,
    chatLogs: 1247,
    embeddings: 8453,
    totalStorage: '45.2 MB'
  };

  const handleExportData = () => {
    toast({
      title: "Data export started",
      description: "We'll email you a download link when your data is ready.",
    });
  };

  const handleDeleteDocuments = () => {
    toast({
      title: "Documents deleted",
      description: "All uploaded documents have been permanently removed.",
      variant: "destructive"
    });
  };

  const handleDeleteChatLogs = () => {
    toast({
      title: "Chat logs deleted", 
      description: "All chat history has been permanently removed.",
      variant: "destructive"
    });
  };

  const handleDeleteAccount = () => {
    if (deleteAccountInput.toLowerCase() === 'delete') {
      toast({
        title: "Account deletion initiated",
        description: "Your account and all associated data will be permanently deleted.",
        variant: "destructive"
      });
      setIsDeleteDialogOpen(false);
      setDeleteAccountInput('');
    } else {
      toast({
        title: "Confirmation failed",
        description: "Please type 'delete' to confirm account deletion.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 dark">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-neon-blue animate-glow" />
              <span className="text-2xl font-bold text-white font-display">Chaste AI</span>
            </div>
            <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">GDPR Compliant</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="inline-flex items-center text-neon-blue hover:text-neon-cyan text-sm transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to dashboard
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
            <Link to="/dashboard" className="flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300">
              <Shield className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/dashboard/privacy" className="flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue rounded-lg border border-neon-blue/30">
              <Shield className="w-5 h-5" />
              <span>Privacy & Data</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2 font-display">Privacy & Data Management</h1>
              <p className="text-gray-400">Control your data, exercise your rights, and manage privacy settings</p>
            </div>

            {/* Data Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-400">Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-neon-blue" />
                    <span className="text-2xl font-bold text-white">{dataStats.documents}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-400">Chat Logs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-green-500" />
                    <span className="text-2xl font-bold text-white">{dataStats.chatLogs.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-400">Embeddings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-purple-500" />
                    <span className="text-2xl font-bold text-white">{dataStats.embeddings.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-400">Storage Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span className="text-2xl font-bold text-white">{dataStats.totalStorage}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Data Export */}
            <Card className="mb-6 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Download className="w-5 h-5" />
                  <span>Export Your Data</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Download a complete copy of all your data including documents, chat logs, and settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-4">
                  You have the right to receive a copy of your personal data in a structured, commonly used format. 
                  The export will include all uploaded documents, chat history, and account settings.
                </p>
                <Button onClick={handleExportData} className="flex items-center space-x-2 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue">
                  <Download className="w-4 h-4" />
                  <span>Request Data Export</span>
                </Button>
              </CardContent>
            </Card>

            {/* Selective Data Deletion */}
            <Card className="mb-6 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Trash2 className="w-5 h-5" />
                  <span>Selective Data Deletion</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Delete specific types of data while keeping your account active
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-700/50 rounded-lg bg-gray-800/30">
                  <div>
                    <h3 className="font-medium text-white">Delete All Documents</h3>
                    <p className="text-sm text-gray-400">Remove all uploaded PDFs, FAQs, and knowledge base files</p>
                  </div>
                  <Button variant="destructive" onClick={handleDeleteDocuments}>
                    Delete Documents
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-700/50 rounded-lg bg-gray-800/30">
                  <div>
                    <h3 className="font-medium text-white">Delete Chat History</h3>
                    <p className="text-sm text-gray-400">Remove all chat logs and conversation history</p>
                  </div>
                  <Button variant="destructive" onClick={handleDeleteChatLogs}>
                    Delete Chat Logs
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-700/50 rounded-lg bg-gray-800/30">
                  <div>
                    <h3 className="font-medium text-white">Delete Vector Embeddings</h3>
                    <p className="text-sm text-gray-400">Remove all processed embeddings from your documents</p>
                  </div>
                  <Button variant="destructive">
                    Delete Embeddings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Deletion */}
            <Card className="border-red-500/50 bg-red-950/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Delete Account</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Permanently delete your account and all associated data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-red-950/50 p-4 rounded-lg border border-red-500/30 mb-4">
                  <h3 className="font-medium text-red-300 mb-2">⚠️ This action cannot be undone</h3>
                  <ul className="text-sm text-red-200 space-y-1">
                    <li>• All documents and files will be permanently deleted</li>
                    <li>• All chat history and logs will be removed</li>
                    <li>• All vector embeddings will be destroyed</li>
                    <li>• Your chatbot will stop working immediately</li>
                    <li>• Your account cannot be recovered</li>
                  </ul>
                </div>
                <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account Permanently
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-red-500/50">
                    <DialogHeader>
                      <DialogTitle className="text-red-400">Confirm Account Deletion</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        This action is irreversible. To confirm deletion, please type "delete" in the field below.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        value={deleteAccountInput}
                        onChange={(e) => setDeleteAccountInput(e.target.value)}
                        placeholder="Type 'delete' to confirm"
                        className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-red-500/50"
                      />
                      <div className="flex space-x-2">
                        <Button 
                          variant="destructive" 
                          onClick={handleDeleteAccount}
                          disabled={deleteAccountInput.toLowerCase() !== 'delete'}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete My Account
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setIsDeleteDialogOpen(false);
                            setDeleteAccountInput('');
                          }}
                          className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Privacy Information */}
            <Card className="mt-6 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="font-medium mb-2 text-white">Data Protection</h3>
                    <ul className="space-y-1 text-gray-400">
                      <li>• All data is encrypted at rest and in transit</li>
                      <li>• We never share your data with third parties</li>
                      <li>• You maintain full ownership of your content</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-white">Your Rights</h3>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Right to access your data</li>
                      <li>• Right to correct inaccurate data</li>
                      <li>• Right to delete your data</li>
                      <li>• Right to data portability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyDashboard;
