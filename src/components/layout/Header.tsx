import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Left */}
          <Link to="/" className="group">
            <span className="font-script text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
              lyte food
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Language */}
            <button className="hidden md:block text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              FR / EN
            </button>

            {/* Réserver Link */}
            <Link 
              to="/espaces" 
              className="hidden md:block text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
            >
              réserver
            </Link>

            {/* Cart (subtle) */}
            <button 
              onClick={openCart}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              panier
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile/Desktop Nav Overlay */}
      <div className={`fixed inset-0 bg-background z-40 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link 
            to="/carte" 
            onClick={() => setMobileOpen(false)}
            className="font-display text-3xl md:text-4xl text-foreground hover:text-accent transition-colors"
          >
            la carte
          </Link>
          <Link 
            to="/espaces" 
            onClick={() => setMobileOpen(false)}
            className="font-display text-3xl md:text-4xl text-foreground hover:text-accent transition-colors"
          >
            nos espaces
          </Link>
          <Link 
            to="/espaces" 
            onClick={() => setMobileOpen(false)}
            className="font-display text-3xl md:text-4xl text-foreground hover:text-accent transition-colors"
          >
            réserver
          </Link>
          <button 
            onClick={() => { openCart(); setMobileOpen(false); }}
            className="font-display text-3xl md:text-4xl text-foreground hover:text-accent transition-colors"
          >
            panier
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
