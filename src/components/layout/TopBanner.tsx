import { useState, useEffect } from 'react';
import { X, Truck } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && isVisible) {
        setIsVisible(false);
        setHasScrolled(true);
      } else if (window.scrollY === 0 && hasScrolled) {
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
      className={`top-banner fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ height: '2.5rem' }}
    >
      {/* Conteneur qui garantit une seule ligne */}
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-3 overflow-hidden flex-1">
          <Truck size={16} className="text-foreground animate-pulse flex-shrink-0" />
          <span className="text-sm font-medium tracking-wide text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
            🚚 Livraison gratuite à partir de 25€ • Commandez avant 14h pour une livraison le jour même
          </span>
        </div>
        
        <button 
          onClick={handleClose}
          className="text-foreground/80 hover:text-foreground transition-colors flex-shrink-0 ml-4"
          aria-label="Fermer la bannière"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
