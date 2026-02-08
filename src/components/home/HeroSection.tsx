import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Lyte Food ambiance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-script text-accent text-xl md:text-2xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          coffee shop · restaurant · terrasse
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Savourez l'instant
        </h1>
        <p className="text-primary-foreground/80 text-base md:text-lg mt-6 font-body leading-relaxed animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: '0.6s' }}>
          Une cuisine saine, naturelle et conviviale servie avec amour à Ste Rita et Avotrou.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link
            to="/carte"
            className="px-8 py-3.5 bg-cta text-cta-foreground text-sm font-medium tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
          >
            Commander en ligne
          </Link>
          <Link
            to="/espaces"
            className="px-8 py-3.5 border border-accent text-accent text-sm font-medium tracking-wide uppercase rounded hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Réserver une table
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-primary-foreground/30" />
      </div>
    </section>
  );
};

export default HeroSection;
