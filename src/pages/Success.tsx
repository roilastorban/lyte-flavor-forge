import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const confettiColors = ['#C28E40', '#3D2317', '#A6442E', '#F9F4F0', '#8B6914'];

const Confetti = () => {
  const pieces = Array.from({ length: 40 });
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: confettiColors[i % confettiColors.length] }}
          />
        </div>
      ))}
    </div>
  );
};

const SuccessPage = () => {
  const location = useLocation();
  const prenom = (location.state as any)?.nom || 'Cher client';
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center py-20">
      {showConfetti && <Confetti />}
      <div className="text-center px-4 max-w-md mx-auto">
        <div className="text-6xl mb-6">👨‍🍳</div>
        <p className="font-script text-accent text-2xl mb-2">C'est en préparation !</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          Merci {prenom} !
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Votre commande est bien reçue. On s'en occupe tout de suite.
          <br />
          <span className="font-script text-accent">From Lyte with love ❤️</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/22998748686"
            target="_blank"
            rel="noopener"
            className="px-6 py-3 border border-green-500 text-green-600 text-sm font-medium rounded hover:bg-green-50 transition-colors"
          >
            Suivre sur WhatsApp
          </a>
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
