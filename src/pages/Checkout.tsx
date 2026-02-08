import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { MessageCircle } from 'lucide-react';

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    mode: 'livraison' as 'livraison' | 'retrait',
    lieu: 'Ste Rita',
    adresse: '',
    note: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.nom.trim()) errs.nom = 'Oups, nous avons besoin de votre nom';
    if (!form.telephone.trim()) errs.telephone = 'Oups, nous avons besoin de votre téléphone';
    if (form.mode === 'livraison' && !form.adresse.trim()) errs.adresse = 'Oups, nous avons besoin de votre adresse';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();
      navigate('/success', { state: { nom: form.nom.split(' ')[0] } });
    }, 2000);
  };

  if (items.length === 0 && !isSubmitting) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Votre panier est vide</p>
          <button onClick={() => navigate('/carte')} className="mt-4 text-sm text-accent underline">Voir la carte</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-script text-accent text-xl mb-2">Plus que quelques clics</p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold">Finalisez votre commande</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left - Form */}
            <div className="space-y-6">
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">Vos coordonnées</h2>

              <div>
                <label className="text-sm font-medium block mb-1.5">Nom complet</label>
                <input
                  type="text"
                  value={form.nom}
                  onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                  placeholder="Comment vous appelez-vous ?"
                  className={`w-full px-4 py-3 bg-card border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent ${errors.nom ? 'border-primary' : 'border-border'}`}
                />
                {errors.nom && <p className="text-xs text-primary mt-1">{errors.nom}</p>}
              </div>

              <div>
                <label className="text-sm font-medium block mb-1.5 flex items-center gap-2">
                  Téléphone <MessageCircle size={14} className="text-green-500" />
                </label>
                <input
                  type="tel"
                  value={form.telephone}
                  onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
                  placeholder="+229 XX XX XX XX"
                  className={`w-full px-4 py-3 bg-card border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent ${errors.telephone ? 'border-primary' : 'border-border'}`}
                />
                {errors.telephone && <p className="text-xs text-primary mt-1">{errors.telephone}</p>}
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Mode de réception</label>
                <div className="flex gap-2">
                  {['livraison', 'retrait'].map(mode => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, mode: mode as any }))}
                      className={`flex-1 py-2.5 text-sm rounded-full border transition-all ${
                        form.mode === mode ? 'border-accent bg-accent/10 font-medium' : 'border-border text-muted-foreground'
                      }`}
                    >
                      {mode === 'livraison' ? 'Livraison' : 'Retrait sur place'}
                    </button>
                  ))}
                </div>
              </div>

              {form.mode === 'retrait' && (
                <div>
                  <label className="text-sm font-medium block mb-1.5">Lieu de retrait</label>
                  <select value={form.lieu} onChange={e => setForm(f => ({ ...f, lieu: e.target.value }))} className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent">
                    <option>Ste Rita</option>
                    <option>Avotrou</option>
                  </select>
                </div>
              )}

              {form.mode === 'livraison' && (
                <div>
                  <label className="text-sm font-medium block mb-1.5">Adresse de livraison</label>
                  <input
                    type="text"
                    value={form.adresse}
                    onChange={e => setForm(f => ({ ...f, adresse: e.target.value }))}
                    placeholder="Votre adresse complète"
                    className={`w-full px-4 py-3 bg-card border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent ${errors.adresse ? 'border-primary' : 'border-border'}`}
                  />
                  {errors.adresse && <p className="text-xs text-primary mt-1">{errors.adresse}</p>}
                </div>
              )}

              <div>
                <label className="text-sm font-medium block mb-1.5">Une préférence particulière ?</label>
                <textarea
                  value={form.note}
                  onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                  placeholder="Ex: Sans piment, sauce à part, couvert en plus..."
                  rows={3}
                  className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                />
              </div>
            </div>

            {/* Right - Summary */}
            <div>
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">Récapitulatif</h2>
              <div className="bg-card rounded p-6 space-y-4">
                {items.map(item => (
                  <div key={item.id + (item.options || '')} className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground"> ×{item.quantity}</span>
                      {item.options && <p className="text-xs text-muted-foreground">{item.options}</p>}
                    </div>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-display text-lg font-semibold">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-4 bg-cta text-cta-foreground text-sm font-medium rounded hover:opacity-90 transition-all disabled:opacity-70"
              >
                {isSubmitting ? 'Envoi en cuisine...' : 'Valider ma commande — From Lyte with Love ❤️'}
              </button>

              <p className="text-[10px] text-center text-muted-foreground mt-3 italic">
                Ceci est un prototype. En conditions réelles, votre commande serait envoyée directement à nos chefs.
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;
