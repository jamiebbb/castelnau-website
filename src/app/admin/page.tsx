'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentAdminPanel from '@/components/admin/DocumentAdminPanel';
import MediaAdminPanel from '@/components/admin/MediaAdminPanel';
import DocumentUploadDialog from '@/components/admin/DocumentUploadDialog';
import { Shield, Lock, Upload, FileText, Settings, Users, Database, Video } from 'lucide-react';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export default function AdminPage() {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
    error: null
  });
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  useEffect(() => {
    // Check if already authenticated (session storage)
    const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
    if (isAuth) {
      setAuth(prev => ({ ...prev, isAuthenticated: true }));
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuth(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // In production, this would be a proper API call
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        setAuth(prev => ({ ...prev, isAuthenticated: true, isLoading: false }));
        sessionStorage.setItem('admin_authenticated', 'true');
      } else {
        // For demo purposes, use basic auth
        if (credentials.username === 'admin' && credentials.password === 'castelnau2025') {
          setAuth(prev => ({ ...prev, isAuthenticated: true, isLoading: false }));
          sessionStorage.setItem('admin_authenticated', 'true');
        } else {
          setAuth(prev => ({ 
            ...prev, 
            isLoading: false, 
            error: 'Invalid credentials' 
          }));
        }
      }
    } catch (error) {
      // Fallback authentication for demo
      if (credentials.username === 'admin' && credentials.password === 'castelnau2025') {
        setAuth(prev => ({ ...prev, isAuthenticated: true, isLoading: false }));
        sessionStorage.setItem('admin_authenticated', 'true');
      } else {
        setAuth(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: 'Authentication failed' 
        }));
      }
    }
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, isLoading: false, error: null });
    sessionStorage.removeItem('admin_authenticated');
    setCredentials({ username: '', password: '' });
  };

  const handleUploadSuccess = () => {
    setIsUploadDialogOpen(false);
    // Optionally refresh any document lists or show success message
  };

  if (!auth.isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-castelnau-green mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
            <p className="text-gray-600 mt-2">Castelnau Group Document Management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                required
                disabled={auth.isLoading}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                required
                disabled={auth.isLoading}
                className="w-full"
              />
            </div>

            {auth.error && (
              <Alert variant="destructive">
                <AlertDescription>{auth.error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full bg-castelnau-green text-black hover:bg-castelnau-green/80"
              disabled={auth.isLoading}
            >
              {auth.isLoading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              Demo credentials:<br />
              Username: admin<br />
              Password: castelnau2025
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-castelnau-green mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="text-gray-600 border-gray-300 hover:bg-gray-50"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="documents" className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:inline-grid">
              <TabsTrigger value="documents" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </TabsTrigger>
              <TabsTrigger value="rns" className="flex items-center space-x-2">
                <Database className="h-4 w-4" />
                <span>RNS Feed</span>
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Media Library</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="documents" className="space-y-6">
            <div className="grid gap-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Document Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Annual Reports', count: 5, category: 'annual-reports' },
                    { name: 'Interim Reports', count: 3, category: 'interim-reports' },
                    { name: 'RNS Announcements', count: 12, category: 'rns' },
                    { name: 'Factsheets', count: 8, category: 'factsheets' },
                    { name: 'Presentations', count: 6, category: 'presentations' },
                    { name: 'Other Documents', count: 4, category: 'other' },
                  ].map((category) => (
                    <div key={category.category} className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count} documents</p>
                      <Button size="sm" className="mt-2" variant="outline">
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
              
              <DocumentAdminPanel />
            </div>
          </TabsContent>

          <TabsContent value="rns" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">RNS Feed Management</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-blue-900">Manual RNS Document Upload</h3>
                    <p className="text-sm text-blue-700">For static sites: Upload PDF files directly to the GitHub repository in /public/rns_feed/, then commit and push changes</p>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => setIsUploadDialogOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Try Upload (Demo)
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-yellow-900">Investegate Integration</h3>
                    <p className="text-sm text-yellow-700">Automatic RNS feed from Investegate (Currently disabled - manual uploads only)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      Disabled
                    </span>
                    <Button size="sm" variant="outline" disabled>Configure</Button>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">GitHub Pages File Upload Instructions</h3>
                  <p className="text-sm text-gray-600 mb-3">Since this is a static site, files must be uploaded directly to the GitHub repository.</p>
                  <div className="text-xs text-gray-500">
                    <p>1. Upload PDF files to the appropriate folder in <code>/public/</code>:</p>
                    <p>&nbsp;&nbsp;&nbsp;• RNS documents → <code>/public/rns_feed/</code></p>
                    <p>&nbsp;&nbsp;&nbsp;• Reports/Factsheets → <code>/public/reports_factsheets/</code></p>
                    <p>&nbsp;&nbsp;&nbsp;• Regulatory docs → <code>/public/regulatory_documents/</code></p>
                    <p>2. Commit and push changes to GitHub</p>
                    <p>3. Documents will appear on the site after deployment</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <MediaAdminPanel />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">System Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">API Configurations</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alpha Vantage API Key
                        </label>
                        <Input type="password" placeholder="API Key" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Investegate Configuration
                        </label>
                        <Input placeholder="Company Code (CGL)" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Cache Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stock Data Cache (hours)
                      </label>
                      <Input type="number" defaultValue="4" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        RNS Feed Cache (minutes)
                      </label>
                      <Input type="number" defaultValue="5" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Daily Data Cache (hours)
                      </label>
                      <Input type="number" defaultValue="24" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-castelnau-green text-black hover:bg-castelnau-green/80">
                    Save Settings
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <DocumentUploadDialog
        open={isUploadDialogOpen}
        onOpenChange={setIsUploadDialogOpen}
        onUploadSuccess={handleUploadSuccess}
      />
    </div>
  );
} 