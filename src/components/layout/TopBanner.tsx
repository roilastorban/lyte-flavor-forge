import { useState, useEffect } from 'react';
import { X, Truck } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quand on scroll un peu, on cache la bannière
      if (window.scrollY > 50 && isVisible) {
        setIsVisible(false);
        setHasScrolled(true);
      }
      // Si on remonte tout en haut, on réaffiche la bannière
      else if (window.scrollY === 0 && hasScrolled) {
        setIsVisible(true);
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, hasScrolled]);

  const handleClose = () => {
    setIsVisible(false);
    setHasScrolled(true);
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ height: '2.5rem' }}
    >
      <div className="bg-gradient-to-r from-accent/90 to-accent text-white w-full h-full">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Truck size={16} className="animate-pulse" />
            <span className="text-sm font-medium tracking-wide">
              🚚 Livraison gratuite à partir de 25€ • Commandez avant 14h pour une livraison le jour même
            </span>
          </div>
          
          <button 
            onClick={handleClose}
            className="absolute right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Fermer la bannière"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
