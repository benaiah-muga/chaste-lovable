
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Settings,
  Volume2
} from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI customer service assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userMessage: string): string => {
    const responses = [
      "I understand your question about our services. Let me help you with that information.",
      "That's a great question! Based on our current offerings, I can provide you with the following details...",
      "I'd be happy to assist you with that. Here's what I found in our knowledge base...",
      "Thank you for reaching out! I can help you resolve this issue quickly.",
      "I can see you're interested in our pricing. Let me break down our plans for you..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue shadow-2xl hover:shadow-neon-blue/25 z-50 animate-glow"
        size="icon"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    }`}>
      {/* Header */}
      <CardHeader className="pb-3 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center animate-glow">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <CardTitle className="text-sm text-white">Chaste AI Assistant</CardTitle>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              ×
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto max-h-80">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-neon-cyan to-neon-blue text-white'
                        : 'bg-gray-800/70 text-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-6 h-6 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gray-800/70 p-3 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-gray-700/50">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-neon-blue/50 focus:ring-neon-blue/25"
              />
              <Button
                onClick={sendMessage}
                size="icon"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue"
                disabled={!message.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                  <Volume2 className="h-3 w-3 mr-1" />
                  Voice enabled
                </Badge>
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                  <Settings className="h-3 w-3 mr-1" />
                  RAG active
                </Badge>
              </div>
              <span className="text-xs text-gray-500">
                Powered by Chaste AI
              </span>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
