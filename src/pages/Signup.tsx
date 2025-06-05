
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bot, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Chaste! 🎉",
        description: "Your account has been created. Let's set up your AI assistant.",
      });
      navigate('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 dark flex items-center justify-center p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <Bot className="w-8 h-8 text-neon-blue animate-glow" />
              <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md"></div>
            </div>
            <span className="text-2xl font-bold text-white font-display bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Chaste
            </span>
          </div>
          <Link to="/" className="inline-flex items-center text-neon-blue hover:text-neon-cyan text-sm transition-colors duration-300">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to home
          </Link>
        </div>

        {/* Signup Form */}
        <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white font-display">Create Your Account</CardTitle>
            <CardDescription className="text-gray-400">
              Start your free trial - deploy AI support in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="businessName" className="text-gray-300">Business Name</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your Company Inc."
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                  required
                />
              </div>

              <div>
                <Label htmlFor="website" className="text-gray-300">Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com"
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-neon-blue/50 focus:ring-neon-blue/25"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue text-white shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account & Start Trial'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-neon-blue hover:text-neon-cyan transition-colors duration-300">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
