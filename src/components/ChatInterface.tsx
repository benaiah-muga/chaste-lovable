
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, MessageSquare, X, Send, PhoneCall, Zap } from 'lucide-react';
import { RatingDialog } from './RatingDialog';

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // This would come from user customization settings
  const chatBubbleImage = '/lovable-uploads/66785ad5-7976-4832-b6ab-07e914385877.png';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your message! I'm here to help you with any questions about our products and services.",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setShowRating(true);
  };

  if (!isOpen) {
    return (
      <>
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue shadow-lg transition-all duration-300 relative overflow-hidden p-0 border-2 border-white/20"
            size="lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/50 to-neon-purple/50 rounded-2xl blur-md animate-pulse"></div>
            {chatBubbleImage ? (
              <img 
                src={chatBubbleImage} 
                alt="Chat Assistant" 
                className="w-10 h-10 object-contain z-10 relative"
              />
            ) : (
              <MessageSquare className="w-6 h-6 text-white z-10 relative" />
            )}
          </Button>
        </div>
        <RatingDialog 
          isOpen={showRating} 
          onClose={() => setShowRating(false)} 
        />
      </>
    );
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800/50 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              {chatBubbleImage ? (
                <img 
                  src={chatBubbleImage} 
                  alt="AI Assistant" 
                  className="w-8 h-8 object-contain rounded-lg"
                />
              ) : (
                <Bot className="w-5 h-5 text-neon-blue" />
              )}
              <div>
                <span className="font-medium text-white block">AI Assistant</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseChat}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-xl ${
                    msg.isBot
                      ? 'bg-gray-800/70 text-gray-300 border-l-2 border-neon-blue'
                      : 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-800/50 rounded-b-2xl">
            <div className="flex space-x-2 mb-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-xl"
              />
              <Button
                onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                variant="outline"
                size="sm"
                className={`border-gray-700 rounded-xl ${
                  isVoiceEnabled 
                    ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/50' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <PhoneCall className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue rounded-xl"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Status indicators and branding */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
                  Voice enabled
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-1 rounded-lg">
                  <Zap className="w-3 h-3 mr-1" />
                  RAG active
                </Badge>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="text-gray-500 text-xs">
                Powered by Chaste AI
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatingDialog 
        isOpen={showRating} 
        onClose={() => setShowRating(false)} 
      />
    </>
  );
};

export { ChatInterface };
