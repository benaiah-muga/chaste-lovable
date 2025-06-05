
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Bot, ArrowLeft, Search, MessageSquare, FileText, Video, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const faqs = [
    {
      question: "How quickly can I set up my AI assistant?",
      answer: "You can have your AI assistant up and running in under 10 minutes. Simply upload your documents, customize the appearance, and embed the code on your website."
    },
    {
      question: "What types of documents can I upload?",
      answer: "We support PDFs, Word documents, text files, CSV files, and direct text input. Our system automatically processes and creates embeddings from your content."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use bank-level encryption for all data at rest and in transit. Your data is never shared with third parties and you maintain complete ownership."
    },
    {
      question: "Can I customize the assistant's appearance?",
      answer: "Absolutely! You can customize colors, fonts, position, welcome message, and even the assistant's personality to match your brand."
    },
    {
      question: "Do you offer API access?",
      answer: "Yes, we provide REST APIs for integration with your existing systems, allowing you to embed the AI assistant functionality directly into your applications."
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
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            How can we <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">help you?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Find answers, get support, or contact our team for personalized assistance
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, or ask a question..."
              className="pl-12 py-4 bg-gray-900/50 border-gray-800/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25 text-lg"
            />
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple p-3 mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white group-hover:text-neon-blue transition-colors">Live Chat Support</CardTitle>
              <CardDescription className="text-gray-400">
                Get instant help from our support team through live chat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 p-3 mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white group-hover:text-neon-blue transition-colors">Documentation</CardTitle>
              <CardDescription className="text-gray-400">
                Comprehensive guides and API documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50">
                View Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-neon-blue/30 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 p-3 mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white group-hover:text-neon-blue transition-colors">Video Tutorials</CardTitle>
              <CardDescription className="text-gray-400">
                Step-by-step video guides to get you started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50">
                Watch Videos
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Support Status */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>System Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">API Services</span>
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Chat Widget</span>
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Document Processing</span>
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">Operational</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Clock className="w-5 h-5 text-neon-blue" />
                <span>Support Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Live Chat</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Email Support</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Phone Support</span>
                  <span className="text-white">9 AM - 6 PM PST</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-white text-center">Still need help?</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Send us a message and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
              />
              <Input
                placeholder="Subject"
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
              />
              <Textarea
                placeholder="Describe your issue or question..."
                rows={5}
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
              />
              <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
