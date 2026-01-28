import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Package, Menu, X, Info, Phone } from 'lucide-react';

// 1. Move static data outside to prevent re-creation on every render
const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'services', label: 'Services', icon: Package, path: '/services' },
  { id: 'about', label: 'About', icon: Info, path: '/about' },
  { id: 'contact', label: 'Contact', icon: Phone, path: '/contact' }
];

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  // Initialize item refs array
  React.useEffect(() => {
    itemRefs.current = NAV_ITEMS.map(() => null);
  }, []);

  // Determine current page ID
  const currentPageId = React.useMemo(() => 
    NAV_ITEMS.find(item => item.path === pathname)?.id || 'home', 
    [pathname]);

  // Handle scroll with better cleanup
  React.useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation logic
  const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (!isMobileMenuOpen) return;
    
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % NAV_ITEMS.length);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + NAV_ITEMS.length) % NAV_ITEMS.length);
        break;
      case 'Escape':
        setIsMobileMenuOpen(false);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0) {
          navigate(NAV_ITEMS[activeIndex].path);
          setIsMobileMenuOpen(false);
        }
        break;
    }
  }, [isMobileMenuOpen, activeIndex, navigate]);

  // Focus management for navigation items
  React.useEffect(() => {
    if (isMobileMenuOpen && activeIndex >= 0) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isMobileMenuOpen]);

  // Focus trap for mobile menu
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      setActiveIndex(0);
      // Optional: Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      setActiveIndex(-1);
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-lg bg-white/90 shadow-lg' : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="text-xl font-bold text-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-md px-2"
            >
              Sparkles
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.filter(i => i.path !== '/').map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPageId === item.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            >
              {isMobileMenuOpen 
                ? <X className="h-6 w-6" /> 
                : <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Accessibility: Skip Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-4 left-4 bg-emerald-700 text-white px-4 py-2 rounded-md z-[100]">
          Skip to content
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        onKeyDown={handleKeyDown}
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-emerald-700">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-md"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-4">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.id}
              to={item.path}
              ref={(el) => { itemRefs.current[index] = el; }}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-3 my-1 rounded-lg text-base font-medium transition-colors duration-150 ${
                currentPageId === item.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
              {currentPageId === item.id && (
                <span className="ml-auto w-2 h-2 bg-white rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;