
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import Landing from '@/pages/Landing';
import Pricing from '@/pages/Pricing';
import Features from '@/pages/Features';
import Documentation from '@/pages/Documentation';
import Support from '@/pages/Support';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Dashboard from '@/pages/Dashboard';
import KnowledgeBase from '@/pages/KnowledgeBase';
import AnimatedChat from '@/components/AnimatedChat';
import ApiDocs from '@/pages/ApiDocs';
import Integrations from '@/pages/Integrations';
import CustomizeDashboard from '@/pages/CustomizeDashboard';
import Analytics from '@/pages/Analytics';
import PrivacyDashboard from '@/pages/PrivacyDashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/customize" element={<CustomizeDashboard />} />
            <Route path="/dashboard/documents" element={<KnowledgeBase />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/privacy" element={<PrivacyDashboard />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/animated-chat" element={<AnimatedChat />} />
            <Route path="/api-docs" element={<ApiDocs />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
