
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Download, Trash2, Shield, FileText, MessageSquare, Database } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PrivacyDashboard = () => {
  const { toast } = useToast();

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
    toast({
      title: "Account deletion initiated",
      description: "Your account and all associated data will be permanently deleted.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Privacy & Data</span>
            </div>
            <Badge className="bg-green-100 text-green-800">GDPR Compliant</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy & Data Management</h1>
          <p className="text-gray-600">Control your data, exercise your rights, and manage privacy settings</p>
        </div>

        {/* Data Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold">{dataStats.documents}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Chat Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <span className="text-2xl font-bold">{dataStats.chatLogs.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Embeddings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-purple-600" />
                <span className="text-2xl font-bold">{dataStats.embeddings.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Storage Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-orange-600" />
                <span className="text-2xl font-bold">{dataStats.totalStorage}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Export */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export Your Data</span>
            </CardTitle>
            <CardDescription>
              Download a complete copy of all your data including documents, chat logs, and settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              You have the right to receive a copy of your personal data in a structured, commonly used format. 
              The export will include all uploaded documents, chat history, and account settings.
            </p>
            <Button onClick={handleExportData} className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Request Data Export</span>
            </Button>
          </CardContent>
        </Card>

        {/* Selective Data Deletion */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trash2 className="w-5 h-5" />
              <span>Selective Data Deletion</span>
            </CardTitle>
            <CardDescription>
              Delete specific types of data while keeping your account active
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium">Delete All Documents</h3>
                <p className="text-sm text-gray-600">Remove all uploaded PDFs, FAQs, and knowledge base files</p>
              </div>
              <Button variant="destructive" onClick={handleDeleteDocuments}>
                Delete Documents
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium">Delete Chat History</h3>
                <p className="text-sm text-gray-600">Remove all chat logs and conversation history</p>
              </div>
              <Button variant="destructive" onClick={handleDeleteChatLogs}>
                Delete Chat Logs
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium">Delete Vector Embeddings</h3>
                <p className="text-sm text-gray-600">Remove all processed embeddings from your documents</p>
              </div>
              <Button variant="destructive">
                Delete Embeddings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Deletion */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              <span>Delete Account</span>
            </CardTitle>
            <CardDescription>
              Permanently delete your account and all associated data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
              <h3 className="font-medium text-red-800 mb-2">⚠️ This action cannot be undone</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• All documents and files will be permanently deleted</li>
                <li>• All chat history and logs will be removed</li>
                <li>• All vector embeddings will be destroyed</li>
                <li>• Your chatbot will stop working immediately</li>
                <li>• Your account cannot be recovered</li>
              </ul>
            </div>
            <Button variant="destructive" onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account Permanently
            </Button>
          </CardContent>
        </Card>

        {/* Privacy Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium mb-2">Data Protection</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• All data is encrypted at rest and in transit</li>
                  <li>• We never share your data with third parties</li>
                  <li>• You maintain full ownership of your content</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Your Rights</h3>
                <ul className="space-y-1 text-gray-600">
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
    </div>
  );
};

export default PrivacyDashboard;
