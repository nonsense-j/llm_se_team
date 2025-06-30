import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BookOpen, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Seminars', href: '/seminars', icon: Calendar },
    { name: 'Papers', href: '/papers', icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L&S</span>
            </div>
            {/* <div className="w-6 h-6 flex items-center justify-center">
              <img src="/logo/rocket.svg" alt="LLM&SE Logo" className="w-full h-full" />
            </div> */}
            <span className="text-white font-semibold text-lg">LLM&SE @ SQuARE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
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