import { Star } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
  {
    text: "Le meilleur spot à Ste Rita pour bosser le matin avec un bon Cappuccino. Le cadre est juste apaisant.",
    author: 'Marc A.',
    stars: 5,
  },
  {
    text: "Leurs jus naturels sont une tuerie ! Mention spéciale pour le mélange Gingembre-Ananas, ultra frais.",
    author: 'Sophie T.',
    stars: 5,
  },
  {
    text: "Commandé via le site, livré en 25 min à Avotrou. Le burger était encore bien chaud.",
    author: 'Kevin L.',
    stars: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-script text-accent text-xl mb-3">Témoignages</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Ce que la communauté Lyte en dit ❤️</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-background p-8 rounded text-center">
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className={j < r.stars ? 'fill-accent text-accent' : 'text-border'} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic mb-6">"{r.text}"</p>
                <p className="text-sm font-medium">— {r.author}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
