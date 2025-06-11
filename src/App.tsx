import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import LandingPage from '@/pages/LandingPage';
import Pricing from '@/pages/Pricing';
import Features from '@/pages/Features';
import Documentation from '@/pages/Documentation';
import Support from '@/pages/Support';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import KnowledgeBase from '@/pages/KnowledgeBase';
import AnimatedChat from '@/components/AnimatedChat';
import ApiDocs from '@/pages/ApiDocs';
import Integrations from '@/pages/Integrations';

function App() {
  return (
    <QueryClient>
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/animated-chat" element={<AnimatedChat />} />
            <Route path="/api-docs" element={<ApiDocs />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </QueryClient>
  );
}

export default App;
