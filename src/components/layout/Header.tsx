import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-xs md:text-sm text-center py-2 px-4 font-body">
        📍 Ouvert à Ste Rita & Avotrou — Commandez en ligne dès maintenant
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/carte" className="text-sm font-medium tracking-wide uppercase text-foreground hover:text-accent transition-colors relative group">
                La Carte
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link to="/espaces" className="text-sm font-medium tracking-wide uppercase text-foreground hover:text-accent transition-colors relative group">
                Réserver
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground" aria-label="Menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-display font-bold tracking-wider text-foreground">
                  LYTE FOOD
                </h1>
                <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
                  coffee shop · restaurant · terrasse
                </p>
              </div>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-foreground hover:text-accent transition-colors" aria-label="Rechercher">
                <Search size={20} />
              </button>
              <button onClick={openCart} className="relative text-foreground hover:text-accent transition-colors" aria-label="Panier">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cta text-cta-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-subtle">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4 px-6 gap-4">
              <Link to="/carte" className="text-sm font-medium tracking-wide uppercase text-foreground py-2">La Carte</Link>
              <Link to="/espaces" className="text-sm font-medium tracking-wide uppercase text-foreground py-2">Nos Espaces</Link>
              <Link to="/espaces" className="text-sm font-medium tracking-wide uppercase text-foreground py-2">Réserver</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
