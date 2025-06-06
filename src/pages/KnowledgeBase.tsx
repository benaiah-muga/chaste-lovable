
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, FileText, Search, Plus, Edit3, Trash2, Eye, 
  ArrowLeft, Download, RefreshCw, Globe, Lock, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const documents = [
    {
      id: 1,
      name: 'Product FAQ.pdf',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      status: 'processed',
      chunks: 45,
      source: 'upload'
    },
    {
      id: 2,
      name: 'User Manual.docx',
      type: 'DOCX',
      size: '1.8 MB',
      uploadDate: '2024-01-14',
      status: 'processing',
      chunks: 32,
      source: 'upload'
    },
    {
      id: 3,
      name: 'Website Content',
      type: 'Web',
      size: '3.2 MB',
      uploadDate: '2024-01-13',
      status: 'processed',
      chunks: 67,
      source: 'website'
    },
    {
      id: 4,
      name: 'API Documentation',
      type: 'Markdown',
      size: '892 KB',
      uploadDate: '2024-01-12',
      status: 'failed',
      chunks: 0,
      source: 'upload'
    }
  ];

  const webSources = [
    {
      id: 1,
      url: 'https://example.com/help',
      title: 'Help Center',
      lastCrawled: '2024-01-15',
      status: 'active',
      pages: 24
    },
    {
      id: 2,
      url: 'https://example.com/faq',
      title: 'FAQ Section',
      lastCrawled: '2024-01-14',
      status: 'active',
      pages: 12
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processed':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Processed</Badge>;
      case 'processing':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Processing</Badge>;
      case 'failed':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Knowledge Base</h1>
            <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              {documents.length} Documents
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-neon-blue hover:bg-neon-cyan">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Source
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-800 text-white">
                <DialogHeader>
                  <DialogTitle>Add Knowledge Source</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Upload documents or add web sources to enhance your AI assistant's knowledge
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="upload" className="mt-4">
                  <TabsList className="bg-gray-800/50 border border-gray-700/50">
                    <TabsTrigger value="upload">Upload Files</TabsTrigger>
                    <TabsTrigger value="website">Website URL</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="space-y-4">
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-2">Drop files here or click to browse</p>
                      <p className="text-sm text-gray-500">Supports PDF, DOCX, TXT, MD files up to 10MB</p>
                      <Button className="mt-4" variant="outline">
                        Select Files
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="website" className="space-y-4">
                    <div>
                      <Label htmlFor="website-url">Website URL</Label>
                      <Input 
                        id="website-url" 
                        placeholder="https://example.com" 
                        className="bg-gray-800/50 border-gray-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="crawl-depth">Crawl Depth</Label>
                      <Input 
                        id="crawl-depth" 
                        type="number" 
                        defaultValue="2"
                        className="bg-gray-800/50 border-gray-700/50"
                      />
                    </div>
                    <Button className="w-full bg-neon-blue hover:bg-neon-cyan">
                      <Globe className="w-4 h-4 mr-2" />
                      Add Website
                    </Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Documents</p>
                  <p className="text-2xl font-bold text-white">{documents.length}</p>
                </div>
                <FileText className="w-8 h-8 text-neon-blue" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Knowledge Chunks</p>
                  <p className="text-2xl font-bold text-white">144</p>
                </div>
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Web Sources</p>
                  <p className="text-2xl font-bold text-white">{webSources.length}</p>
                </div>
                <Globe className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Storage Used</p>
                  <p className="text-2xl font-bold text-white">8.3MB</p>
                </div>
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Knowledge Sources */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800/50">
            <TabsTrigger value="documents" className="data-[state=active]:bg-neon-blue/20">Documents</TabsTrigger>
            <TabsTrigger value="websites" className="data-[state=active]:bg-neon-blue/20">Web Sources</TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Document Library</CardTitle>
                    <CardDescription className="text-gray-400">
                      Manage your uploaded documents and their processing status
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search documents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-gray-800/50 border-gray-700/50 text-white"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredDocuments.map((doc) => (
                    <div key={doc.id} className="border border-gray-800/50 rounded-lg p-4 bg-gray-800/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-neon-blue" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{doc.name}</h3>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                              <span>{doc.type}</span>
                              <span>{doc.size}</span>
                              <span>{doc.chunks} chunks</span>
                              <span>Uploaded {doc.uploadDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(doc.status)}
                          <div className="flex items-center space-x-1">
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="websites">
            <Card className="bg-gray-900/50 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Web Sources</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage websites that are automatically crawled for content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {webSources.map((source) => (
                    <div key={source.id} className="border border-gray-800/50 rounded-lg p-4 bg-gray-800/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Globe className="w-5 h-5 text-purple-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{source.title}</h3>
                            <p className="text-sm text-gray-400">{source.url}</p>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                              <span>{source.pages} pages</span>
                              <span>Last crawled {source.lastCrawled}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                          <div className="flex items-center space-x-1">
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <RefreshCw className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KnowledgeBase;
