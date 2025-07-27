import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  MessageCircle, 
  Image, 
  Mic, 
  FileText, 
  Mail, 
  ShoppingBag,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Brain },
    { path: '/chat', label: 'AI Chat', icon: MessageCircle },
    { path: '/image-generator', label: 'Image Gen', icon: Image },
    { path: '/voice-chat', label: 'Voice', icon: Mic },
    { path: '/file-summary', label: 'Summarize', icon: FileText },
    { path: '/email-assistant', label: 'Email AI', icon: Mail },
    { path: '/shop-assistant', label: 'Shop AI', icon: ShoppingBag },
  ];

  return (
    <nav className="glass-card border-b border-ai-purple/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-ai-purple" />
            <span className="text-xl font-bold gradient-text">Mwendwa's AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(1).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button 
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`ai-glow ${isActive ? 'bg-ai-purple text-white' : 'hover:bg-ai-purple/20'}`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.slice(1).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button 
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ai-glow ${isActive ? 'bg-ai-purple text-white' : 'hover:bg-ai-purple/20'}`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;