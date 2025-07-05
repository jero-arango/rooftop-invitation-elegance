
import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import PhotoGallery from './PhotoGallery';
import VideoSection from './VideoSection';
import EmotionalMessage from './EmotionalMessage';
import HostSection from './HostSection';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface User {
  name: string;
  email: string;
}

const RooftopInvitation = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  if (!user) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Logout Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Salir
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Rooftop Dreams
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/80 mb-8 animate-fade-in">
            Una noche bajo las estrellas que jamás olvidarás
          </p>
          <div className="animate-pulse">
            <div className="w-2 h-16 bg-gradient-to-b from-amber-400 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-16 w-3 h-3 bg-orange-500 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-50 delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <PhotoGallery />
        <VideoSection />
        <EmotionalMessage userName={user.name} />
        <HostSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 text-center text-white/60 border-t border-white/10">
        <p className="text-sm">
          Una invitación exclusiva • Creada con ❤️ para una noche especial
        </p>
      </footer>
    </div>
  );
};

export default RooftopInvitation;
