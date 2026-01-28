import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Package, Menu, X, Info, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsHeaderVisible(currentScrollY <= scrollY || currentScrollY < 10);
    setIsScrolled(currentScrollY > 20);
  }, [scrollY]);

  React.useEffect(() => {
    const debouncedHandleScroll = (() => {
      let timeout: number;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 100);
      };
    })();

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    if (isMobileMenuOpen && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
      setActiveIndex(0);
    } else {
      setActiveIndex(-1);
    }
  }, [isMobileMenuOpen]);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (!isMobileMenuOpen) return;
    
    const items = [
      { id: 'home', label: 'Home', icon: Home, path: '/' },
      { id: 'services', label: 'Services', icon: Package, path: '/services' },
      { id: 'about', label: 'About', icon: Info, path: '/about' },
      { id: 'contact', label: 'Contact', icon: Phone, path: '/contact' }
    ];
    
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case 'Escape':
        setIsMobileMenuOpen(false);
        setActiveIndex(-1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0) {
          navigate(items[activeIndex].path);
          setIsMobileMenuOpen(false);
        }
        break;
    }
  }, [isMobileMenuOpen, activeIndex, navigate]);

  const currentPage = React.useMemo(() => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/services') return 'services';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  }, [location.pathname]);

  const navItems = React.useMemo(() => [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'services', label: 'Services', icon: Package, path: '/services' },
    { id: 'about', label: 'About', icon: Info, path: '/about' },
    { id: 'contact', label: 'Contact', icon: Phone, path: '/contact' }
  ], []);

  const desktopNavItems = React.useMemo(() => 
    navItems.filter((item) => item.path !== "/"), [navItems]
  );

  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? 'backdrop-blur-lg bg-white/90 shadow-xl' : 'bg-white shadow-lg'
      } ${!isHeaderVisible ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="text-xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Sparkles - Home"
              >
                Sparkles
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {desktopNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    role="menuitem"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                      currentPage === item.id
                        ? 'bg-emerald-700 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md before:absolute before:inset-0 before:bg-emerald-50 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-600'
                    }`}
                  >
                    <span className="flex items-center relative z-10">
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
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200"
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

      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-700 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        role="menu"
        aria-hidden={!isMobileMenuOpen}
        aria-labelledby="mobile-menu-title"
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        ref={drawerRef}
        onKeyDown={handleKeyDown}
      >
        <div className="p-4 border-b bg-emerald-50">
          <h2 id="mobile-menu-title" className="text-lg font-semibold text-emerald-700">Navigation Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-md text-gray-700 hover:text-emerald-700 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <Link
                key={item.id}
                to={item.path}
                role="menuitem"
                tabIndex={activeIndex === index ? 0 : -1}
                ref={el => {
                  if (activeIndex === index && el) {
                    el.focus();
                  }
                }}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 min-h-[44px] flex items-center active:scale-95 ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{item.label}</span>
                {isActive && (
                  <span className="ml-auto">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;