import { useState } from 'react';
import { products, categories, formatPrice, type Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Plus, Check, X } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  { q: 'Où livrez-vous ?', a: 'Nous livrons partout à Cotonou et ses environs depuis nos sites de Ste Rita et Avotrou. Les frais varient selon la distance.' },
  { q: 'Quels sont les délais de préparation ?', a: 'Pour les boissons et burgers, comptez 15-20 min. Pour les grillades et plats de résistance, environ 30-40 min pour garantir la fraîcheur.' },
  { q: 'Proposez-vous des options végétariennes ?', a: "Absolument ! Nos bouillies, nos jus naturels et plusieurs de nos salades et plats de résistance (comme l'Atassi sans viande) sont 100% naturels." },
  { q: 'Comment réserver pour un groupe ?', a: "Vous pouvez réserver directement via notre bouton 'Réserver' ou nous appeler au +229 98748686." },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredProducts = products.filter(p => p.category === activeCategory);

  const handleQuickAdd = (product: Product) => {
    if (product.options && product.options.length > 0) {
      setSelectedProduct(product);
      setSelectedOptions({});
    } else {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
      setAddedId(product.id);
      setTimeout(() => setAddedId(null), 1200);
    }
  };

  const handleAddWithOptions = () => {
    if (!selectedProduct) return;
    const optionsStr = Object.values(selectedOptions).filter(Boolean).join(', ');
    addItem({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      options: optionsStr,
    });
    setSelectedProduct(null);
    setSelectedOptions({});
    setAddedId(selectedProduct.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <p className="font-script text-accent text-xl mb-3">Notre sélection</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold">La Carte</h1>
      </section>

      {/* Category Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <ScrollReveal>
          <p className="text-sm text-muted-foreground mb-8">
            {categories.find(c => c.id === activeCategory)?.label}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer" onClick={() => handleQuickAdd(product)}>
              <div className="aspect-square overflow-hidden rounded mb-3 relative bg-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {product.badge === 'signature' ? 'Signature' : 'Populaire'}
                  </span>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); handleQuickAdd(product); }}
                  className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  aria-label="Ajouter"
                >
                  {addedId === product.id ? <Check size={14} /> : <Plus size={14} />}
                </button>
              </div>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{product.description}</p>
              <p className="text-sm font-semibold mt-1">{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Dialog */}
      {selectedProduct && (
        <>
          <div className="fixed inset-0 bg-foreground/40 z-50" onClick={() => setSelectedProduct(null)} />
          <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-background z-50 rounded-lg shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in">
            <div className="relative">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full aspect-video object-cover" />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
              {selectedProduct.badge && (
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
                  {selectedProduct.badge === 'signature' ? 'Signature Lyte' : 'Populaire'}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold">{selectedProduct.name}</h3>
              <p className="text-muted-foreground text-sm mt-2">{selectedProduct.description}</p>
              <p className="text-lg font-semibold mt-3">{formatPrice(selectedProduct.price)}</p>

              {selectedProduct.options && selectedProduct.options.length > 0 && (
                <div className="mt-6 space-y-5">
                  {selectedProduct.options.map(opt => (
                    <div key={opt.label}>
                      <p className="text-sm font-medium mb-2">{opt.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {opt.choices.map(choice => (
                          <button
                            key={choice}
                            onClick={() => setSelectedOptions(prev => ({ ...prev, [opt.label]: choice }))}
                            className={`px-4 py-2 text-sm rounded-full border transition-all ${
                              selectedOptions[opt.label] === choice
                                ? 'border-accent bg-accent/10 text-foreground'
                                : 'border-border text-muted-foreground hover:border-accent'
                            }`}
                          >
                            {choice}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={handleAddWithOptions}
                className="w-full mt-8 py-3.5 bg-cta text-cta-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </>
      )}

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-10">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm font-medium text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default MenuPage;
