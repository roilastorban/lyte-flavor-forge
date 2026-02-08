import { MapPin, Clock } from 'lucide-react';
import spaceSteRita from '@/assets/space-sterita.jpg';
import spaceAvotrou from '@/assets/space-avotrou.jpg';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const locations = [
  {
    name: 'Ste Rita',
    subtitle: 'Le Cœur Historique',
    image: spaceSteRita,
    hours: 'Lun–Dim · 07h00 – 23h30',
    desc: 'Cadre climatisé, cosy et boisé. Idéal pour petit-déjeuner, déjeuner ou pause café.',
  },
  {
    name: 'Avotrou',
    subtitle: 'La Terrasse by Lyte',
    image: spaceAvotrou,
    hours: 'Jeu–Dim · 15h00 – 01h00',
    desc: 'Grillades au feu de bois, ambiance décontractée sous les étoiles.',
  },
];

const LocationsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-script text-accent text-xl mb-3">Venez nous voir</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Où nous trouver</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {locations.map(loc => (
              <div key={loc.name} className="group overflow-hidden rounded">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="font-display text-xl font-semibold mb-1">{loc.name}</h3>
                  <p className="font-script text-accent text-sm mb-3">{loc.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{loc.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {loc.hours}</span>
                    <a href="#" className="flex items-center gap-1.5 text-accent hover:underline">
                      <MapPin size={13} /> Y aller
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationsSection;
