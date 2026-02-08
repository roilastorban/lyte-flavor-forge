import { Link } from 'react-router-dom';
import coffeeShop from '@/assets/coffee-shop.jpg';
import restaurantScene from '@/assets/restaurant-scene.jpg';
import terrasseScene from '@/assets/terrasse-scene.jpg';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const sections = [
  {
    time: 'morning',
    label: 'Le matin',
    script: 'Commencez bien votre journée',
    title: 'Le Coffee Shop',
    desc: 'Cappuccino onctueux, bouillies traditionnelles et viennoiseries fraîches. Le cadre idéal pour vos matinées studieuses ou vos petits-déjeuners gourmands.',
    image: coffeeShop,
    hours: '07h00 — 12h00',
  },
  {
    time: 'afternoon',
    label: "L'après-midi",
    script: 'Un déjeuner qui fait du bien',
    title: 'Le Restaurant',
    desc: "Burgers juteux, salades fraîches, riz gras savoureux et l'incontournable Atassi. Une cuisine généreuse qui nourrit le corps et l'âme.",
    image: restaurantScene,
    hours: '12h00 — 18h00',
  },
  {
    time: 'evening',
    label: 'Le soir',
    script: 'Vos soirées détente & jeux',
    title: 'La Terrasse',
    desc: 'Grillades au feu de bois, brochettes parfumées et jus frais sous les étoiles. Ambiance décontractée, jeux de société et bonne humeur.',
    image: terrasseScene,
    hours: '18h00 — 23h30',
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="font-script text-accent text-xl mb-3">Du lever au coucher</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold">Trois expériences, un seul lieu</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {sections.map((s, i) => (
            <ScrollReveal key={s.time}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Image */}
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''} space-y-4`}>
                  <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">{s.label} · {s.hours}</p>
                  <p className="font-script text-accent text-lg">{s.script}</p>
                  <h3 className="font-display text-2xl md:text-4xl font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/carte" className="inline-block text-sm font-medium tracking-wide uppercase text-foreground relative group mt-4">
                    Voir le menu
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
