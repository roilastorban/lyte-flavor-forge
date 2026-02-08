import { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { bestSellers, formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const BestSellers = () => {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (product: typeof bestSellers[0]) => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-script text-accent text-xl mb-3">Les favoris</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Nos Coups de Cœur</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {bestSellers.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded mb-4 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
                      {product.badge === 'signature' ? 'Signature Lyte' : 'Populaire'}
                    </span>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleAdd(product); }}
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Ajouter au panier"
                  >
                    {addedId === product.id ? <Check size={16} /> : <Plus size={16} />}
                  </button>
                </div>
                <h3 className="font-display text-sm md:text-base font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{formatPrice(product.price)}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BestSellers;
