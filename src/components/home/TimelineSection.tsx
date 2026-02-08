import { Link } from 'react-router-dom';
import { Sun, Moon, Sunset } from 'lucide-react';
import coffeeShop from '@/assets/coffee-shop.jpg';
import restaurantScene from '@/assets/restaurant-scene.jpg';
import terrasseScene from '@/assets/terrasse-scene.jpg';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const sections = [
  {
    id: 'morning',
    label: 'morning',
    icon: Sun,
    title: 'coffee',
    time: 'dès 07h00',
    desc: 'Commencez la journée avec nos cafés de spécialité et bouillies traditionnelles. Douceur et saveur, préparés avec soin.',
    image: coffeeShop,
    link: 'voir le menu café',
  },
  {
    id: 'afternoon',
    label: 'afternoon',
    icon: Sunset,
    title: 'restaurant',
    time: 'dès 12h00',
    desc: "Burgers juteux, salades fraîches et l'incontournable Atassi. Une cuisine généreuse qui nourrit le corps et l'âme.",
    image: restaurantScene,
    link: 'voir le menu',
  },
  {
    id: 'evening',
    label: 'evening',
    icon: Moon,
    title: 'terrasse',
    time: 'dès 18h00',
    desc: 'Quand le soir s\'installe, les grillades prennent le relais. Brochettes parfumées, jus frais et ambiance décontractée.',
    image: terrasseScene,
    link: 'voir la carte grillades',
  },
];

const TimelineSection = () => {
  return (
    <section className="relative py-20 md:py-32">
      {/* Timeline Bar - Desktop Only */}
      <div className="hidden lg:block fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col items-center gap-4">
          {sections.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center">
              <a 
                href={`#${s.id}`}
                className="flex flex-col items-center gap-2 group"
              >
                <s.icon 
                  size={16} 
                  strokeWidth={1} 
                  className="text-muted-foreground group-hover:text-accent transition-colors" 
                />
                <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors vertical-text">
                  {s.label}
                </span>
              </a>
              {i < sections.length - 1 && (
                <div className="w-[1px] h-16 bg-border my-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:pr-24">
        <div className="space-y-32 md:space-y-48">
          {sections.map((s, i) => (
            <ScrollReveal key={s.id}>
              <div 
                id={s.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? '' : ''}`}
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''} space-y-6`}>
                  {/* Mobile icon */}
                  <div className={`lg:hidden flex items-center gap-3 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                    <s.icon size={16} strokeWidth={1} className="text-muted-foreground" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      {s.label}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal lowercase text-foreground">
                    {s.title}
                  </h3>
                  
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {s.time}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
                    {s.desc}
                  </p>
                  
                  <Link 
                    to="/carte" 
                    className={`inline-block text-xs tracking-[0.2em] uppercase text-foreground relative group ${i % 2 === 1 ? '' : ''}`}
                  >
                    {s.link}
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
