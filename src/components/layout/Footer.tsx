import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Filigrane background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="text-[200px] font-display text-center mt-20">☕</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Identity */}
          <div className="md:col-span-1">
            <h3 className="font-display text-lg font-semibold mb-3">Lyte Food</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Coffee Shop, Restaurant & Terrasse.<br />
              <span className="font-script text-accent text-base">From Lyte with love ❤️</span>
            </p>
            <p className="text-xs opacity-60 mt-3 italic">On priorise le naturel.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-60">Liens rapides</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/carte" className="hover:text-accent transition-colors">La Carte</Link></li>
              <li><Link to="/espaces" className="hover:text-accent transition-colors">Nos Espaces</Link></li>
              <li><Link to="/carte" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-60">Contact</h4>
            <div className="text-sm opacity-80 space-y-3">
              <div>
                <p className="font-medium">Ste Rita</p>
                <p className="text-xs opacity-70">Lun–Dim · 07h00 – 23h30</p>
              </div>
              <div>
                <p className="font-medium">Avotrou</p>
                <p className="text-xs opacity-70">Jeu–Dim · 15h00 – 01h00</p>
              </div>
              <p className="text-xs opacity-70 mt-2">
                +229 98748686 / 66644403
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-60">Communauté</h4>
            <p className="text-sm opacity-80 mb-4">Rejoignez la communauté Lyte pour nos offres exclusives.</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="opacity-70 hover:opacity-100 hover:text-accent transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/Lytefood" target="_blank" rel="noopener" className="opacity-70 hover:opacity-100 hover:text-accent transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40">© 2026 Lyte Food. Tous droits réservés.</p>
     
        </div>
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
