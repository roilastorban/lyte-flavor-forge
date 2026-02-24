import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(40);
  
  const { openCart, itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.querySelector('.top-banner');
      if (banner) {
        const height = banner.clientHeight;
        setBannerHeight(height > 0 ? height : 0);
      }
    };

    updateBannerHeight();
    
    const observer = new MutationObserver(updateBannerHeight);
    const bannerElement = document.querySelector('.top-banner');
    if (bannerElement) {
      observer.observe(bannerElement, { 
        attributes: true, 
        attributeFilter: ['class', 'style'] 
      });
    }

    const interval = setInterval(updateBannerHeight, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const headerStyle = {
    top: `${bannerHeight}px`,
    transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <>
      {/* Header complètement transparent */}
      <header 
        className="fixed left-0 right-0 z-30 transition-all duration-300 bg-transparent"
        style={headerStyle}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo en couleur marron */}
            <Link 
              to="/" 
              className="group flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-script text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                lyte food
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground hidden md:block">
                • Paris
              </span>
            </Link>

            {/* Navigation desktop - en couleur marron */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/carte" 
                className="text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors relative group"
              >
                la carte
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
              
              <Link 
                to="/espaces" 
                className="text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors relative group"
              >
                nos espaces
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
              
              <Link 
                to="/espaces#reservation" 
                className="text-sm tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors relative group"
              >
                réserver
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            {/* Actions droite - en couleur marron */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Langue */}
              <button className="hidden md:flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                <Globe size={16} />
                FR
              </button>

              {/* Panier avec badge */}
              <button 
                onClick={openCart}
                className="relative flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="relative">
                  <ShoppingBag size={20} />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="hidden md:inline">panier</span>
              </button>

              {/* Bouton menu mobile */}
              <button 
                onClick={() => setMobileOpen(!mobileOpen)} 
                className="md:hidden text-foreground hover:text-accent transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div 
          className={`fixed inset-0 z-20 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: `calc(${bannerHeight}px + 4rem)` }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
            <Link 
              to="/carte" 
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl text-foreground hover:text-accent transition-colors py-2"
            >
              la carte
            </Link>
            
            <Link 
              to="/espaces" 
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl text-foreground hover:text-accent transition-colors py-2"
            >
              nos espaces
            </Link>
            
            <Link 
              to="/espaces#reservation" 
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl text-foreground hover:text-accent transition-colors py-2"
            >
              réserver
            </Link>
            
            <div className="pt-8 border-t border-border w-48 text-center">
              <button className="flex items-center justify-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors">
                <Globe size={20} />
                Français / English
              </button>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
