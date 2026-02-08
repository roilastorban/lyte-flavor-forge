import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const EditorialSection = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-foreground text-center">
            bouillies et café le matin.
            <br />
            burgers et salades au fil du jour.
            <br />
            grillades sous les étoiles.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex justify-center mt-12 md:mt-16">
            <Link 
              to="/espaces" 
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              réserver une table
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EditorialSection;
