import { ScrollReveal } from '@/hooks/useScrollReveal';

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">Ils nous font confiance</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30">
            <span className="text-2xl font-display">Gozem</span>
            <span className="text-2xl font-display">UberEats</span>
            <span className="text-lg font-body">🍎 5 fruits/jour</span>
            <span className="text-2xl font-display">Café Local</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;
