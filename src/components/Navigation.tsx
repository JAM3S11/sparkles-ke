import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Menu, X, Info, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/services') return 'services';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const currentPage = getCurrentPage();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'services', label: 'Services', icon: Package, path: '/services' },
    { id: 'about', label: 'About', icon: Info, path: '/about' },
    { id: 'contact', label: 'Contact', icon: Phone, path: '/contact' }
  ];

  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-emerald-700">
                Sparkles
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      currentPage === item.id
                        ? 'bg-emerald-700 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md'
                    }`}
                  >
                    <span className="flex items-center">
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-emerald-700 text-white'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;