
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const Header = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-2">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ShopeeHub</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3">
            {session ? (
              // Logged in state
              <>
                <span className="text-gray-700">{session.user.email}</span>
                <Button 
                  variant="outline" 
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </>
            ) : (
              // Logged out state
              <>
                <Button 
                  variant="outline" 
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => navigate('/cadastro')}
                >
                  Cadastre-se
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
