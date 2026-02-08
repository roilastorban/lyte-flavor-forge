import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '@/data/products';

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const goToCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-lg font-semibold">Votre sélection gourmande</h2>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">Votre panier est vide</p>
              <p className="font-script text-accent text-lg mt-2">Explorez notre carte !</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.id + (item.options || '')} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium truncate">{item.name}</h4>
                        {item.options && <p className="text-xs text-muted-foreground">{item.options}</p>}
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-cta transition-colors ml-2" aria-label="Supprimer">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 border border-border rounded-full px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-muted-foreground hover:text-foreground" aria-label="Moins">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-muted-foreground hover:text-foreground" aria-label="Plus">
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{totalItems} article{totalItems > 1 ? 's' : ''}</span>
              <span className="font-display text-lg font-semibold">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={closeCart}
                className="flex-1 py-3 border border-border rounded text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                Retour
              </button>
              <button
                onClick={goToCheckout}
                className="flex-1 py-3 bg-cta text-cta-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Payer
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
