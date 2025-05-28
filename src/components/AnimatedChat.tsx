
import React, { useState, useEffect } from 'react';
import { Bot, User } from 'lucide-react';

const AnimatedChat = () => {
  const [step, setStep] = useState(0);
  const [userText, setUserText] = useState('');
  const [aiText, setAiText] = useState('');
  
  const userMessage = "How do I reset my password?";
  const aiMessage = "I can help you reset your password! Simply click on 'Forgot Password' on the login page, enter your email address, and you'll receive a reset link within minutes. The link will be valid for 24 hours.";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        // Start typing user message
        setStep(1);
      } else if (step === 1 && userText.length < userMessage.length) {
        // Continue typing user message
        setUserText(userMessage.slice(0, userText.length + 1));
      } else if (step === 1 && userText.length === userMessage.length) {
        // Start AI response after delay
        setTimeout(() => setStep(2), 1000);
      } else if (step === 2 && aiText.length < aiMessage.length) {
        // Type AI response
        setAiText(aiMessage.slice(0, aiText.length + 1));
      } else if (step === 2 && aiText.length === aiMessage.length) {
        // Reset after delay
        setTimeout(() => {
          setStep(0);
          setUserText('');
          setAiText('');
        }, 3000);
      }
    }, step === 1 ? 100 : step === 2 ? 50 : 2000);

    return () => clearTimeout(timer);
  }, [step, userText, aiText, userMessage, aiMessage]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-gray-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm font-mono text-gray-400">Support Chat</div>
          <div className="w-6"></div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4 h-80 overflow-hidden">
          {/* Welcome Message */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gray-800/70 rounded-lg px-3 py-2 max-w-xs">
              <p className="text-sm text-gray-200">Hi! I'm your AI support assistant. How can I help you today?</p>
            </div>
          </div>

          {/* User Message */}
          {step >= 1 && (
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-gradient-to-br from-neon-cyan to-neon-blue rounded-lg px-3 py-2 max-w-xs">
                <p className="text-sm text-white">
                  {userText}
                  {step === 1 && userText.length < userMessage.length && (
                    <span className="animate-blink">|</span>
                  )}
                </p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {step === 1 && userText.length === userMessage.length && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-800/70 rounded-lg px-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* AI Response */}
          {step >= 2 && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center animate-glow">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-800/70 rounded-lg px-3 py-2 max-w-xs">
                <p className="text-sm text-gray-200">
                  {aiText}
                  {step === 2 && aiText.length < aiMessage.length && (
                    <span className="animate-blink">|</span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="px-4 py-3 bg-gray-800/30 border-t border-gray-700/50">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-700/50 rounded-lg px-3 py-2">
              <div className="text-sm text-gray-400">Type your message...</div>
            </div>
            <button className="bg-gradient-to-r from-neon-blue to-neon-purple p-2 rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedChat;
