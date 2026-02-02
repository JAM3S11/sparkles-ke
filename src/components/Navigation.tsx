import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Package, Menu, X, Info, Phone, ChevronRight } from 'lucide-react';

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
  
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  const currentPageId = React.useMemo(() => 
    NAV_ITEMS.find(item => item.path === pathname)?.id || 'home', 
  [pathname]);

  // Optimized Scroll Handler
  React.useEffect(() => {
    let frameId: number;
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => setIsScrolled(window.scrollY > 20));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Keyboard Accessibility
  const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (!isMobileMenuOpen) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % NAV_ITEMS.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + NAV_ITEMS.length) % NAV_ITEMS.length);
        break;
      case 'Escape':
        setIsMobileMenuOpen(false);
        break;
      case 'Enter':
      case ' ':
        if (activeIndex >= 0) {
          e.preventDefault();
          navigate(NAV_ITEMS[activeIndex].path);
          setIsMobileMenuOpen(false);
        }
        break;
    }
  }, [isMobileMenuOpen, activeIndex, navigate]);

  // Sync Focus and Scroll Lock
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Slight delay to allow transition to start before focusing
      const timer = setTimeout(() => setActiveIndex(0), 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setActiveIndex(-1);
    }
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    if (activeIndex >= 0 && isMobileMenuOpen) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isMobileMenuOpen]);

  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="group flex items-center space-x-2 outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-white font-bold text-xl italic">S</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-emerald-900 group-hover:text-emerald-700 transition-colors">
              Sparkles
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.filter(i => i.id !== 'home').map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  currentPageId === item.id
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[70] p-2 rounded-xl bg-emerald-50 text-emerald-700 active:scale-90 transition-transform focus:ring-2 focus:ring-emerald-500 outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-emerald-950/20 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div 
        id="mobile-menu"
        onKeyDown={handleKeyDown}
        className={`fixed top-0 left-0 w-full h-3/4 bg-white shadow-2xl z-50 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 pt-20 pb-10 space-y-3">
          {NAV_ITEMS.map((item, index) => {
            const isActive = currentPageId === item.id;
            return (
              <Link
                key={item.id}
                to={item.path}
                // ref={el => (itemRefs.current[index] = el)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={() => setIsMobileMenuOpen(false)}
                // this is a staggered entry animation
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 outline-none ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-lg ring-4 ring-emerald-700/10'
                    : 'bg-gray-50 text-gray-700 hover:bg-emerald-50 focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className={`w-5 h-5 mr-4 ${isActive ? 'text-emerald-200' : 'text-emerald-600'}`} />
                  <span className="text-lg font-bold">{item.label}</span>
                </div>
                {isActive ? (
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                ) : (
                  <ChevronRight size={18} className="text-gray-300" />
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