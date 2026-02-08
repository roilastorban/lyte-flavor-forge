import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient">
      {/* Local Time */}
      <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-fade-in">
        heure locale à lyte: {time}
      </p>

      {/* Central Image with Logo Overlay */}
      <div className="relative w-[280px] md:w-[320px] lg:w-[360px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={heroImage} 
            alt="Lyte Food ambiance" 
            className="w-full h-full object-cover"
          />
          {/* Logo Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
              lyte food
            </h1>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p 
        className="mt-10 text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        coffee shop · restaurant · terrasse
      </p>

      {/* Scroll Line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-muted-foreground/30 to-muted-foreground/50 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
