import productJuice from '@/assets/product-juice.jpg';
import productBreakfast from '@/assets/product-breakfast.jpg';
import productBurger from '@/assets/product-burger.jpg';
import productBouillie from '@/assets/product-bouillie.jpg';
import coffeeShop from '@/assets/coffee-shop.jpg';
import restaurantScene from '@/assets/restaurant-scene.jpg';
import terrasseScene from '@/assets/terrasse-scene.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  badge?: 'signature' | 'populaire';
  options?: ProductOption[];
}

export interface ProductOption {
  label: string;
  choices: string[];
}

export const categories = [
  { id: 'coffee', label: '☕ Coffee Shop', icon: '☕' },
  { id: 'bouillies', label: '🥣 Bouillies', icon: '🥣' },
  { id: 'fastfood', label: '🍔 Fast-Food', icon: '🍔' },
  { id: 'plats', label: '🍱 Plats', icon: '🍱' },
  { id: 'grillades', label: '🍗 Grillades', icon: '🍗' },
  { id: 'boissons', label: '🍹 Jus & Thés', icon: '🍹' },
];

export const products: Product[] = [
  // Coffee Shop
  { id: 'espresso', name: 'Espresso', price: 500, category: 'coffee', image: coffeeShop, description: 'Un espresso intense et corsé.' },
  { id: 'cappuccino', name: 'Cappuccino', price: 800, category: 'coffee', image: coffeeShop, description: 'Mousse onctueuse et café velouté.', badge: 'populaire' },
  { id: 'cafe-lait', name: 'Café au Lait', price: 600, category: 'coffee', image: coffeeShop, description: 'Doux et réconfortant.' },
  { id: 'chocolat-chaud', name: 'Chocolat Chaud', price: 700, category: 'coffee', image: coffeeShop, description: 'Riche et crémeux.' },

  // Bouillies
  { id: 'bouillie-akluie', name: "Bouillie d'Akluie", price: 1000, category: 'bouillies', image: productBouillie, description: 'Bouillie traditionnelle onctueuse.', badge: 'signature', options: [{ label: 'Accompagnement', choices: ['Biscottes', 'Miel', 'Lait concentré'] }] },
  { id: 'bouillie-soja', name: 'Bouillie de Soja', price: 500, category: 'bouillies', image: productBouillie, description: 'Protéinée et nourrissante.' },
  { id: 'bouillie-sorgho', name: 'Bouillie de Sorgho', price: 500, category: 'bouillies', image: productBouillie, description: 'Céréale ancestrale, goût unique.' },
  { id: 'bouillie-tapioca', name: 'Bouillie de Tapioca', price: 500, category: 'bouillies', image: productBouillie, description: 'Légère et délicate.' },

  // Fast-Food
  { id: 'burger-simple', name: 'Burger Simple', price: 1000, category: 'fastfood', image: productBurger, description: 'Bœuf juteux, salade, tomate.' },
  { id: 'burger-cheese', name: 'Burger Cheese', price: 1500, category: 'fastfood', image: productBurger, description: 'Fromage fondant, bœuf grillé.', badge: 'populaire' },
  { id: 'burger-chicken', name: 'Burger Chicken', price: 2000, category: 'fastfood', image: productBurger, description: 'Filet de poulet croustillant.' },
  { id: 'burger-double', name: 'Burger Double', price: 2500, category: 'fastfood', image: productBurger, description: 'Double steak, double plaisir.', badge: 'signature', options: [{ label: 'Accompagnement', choices: ['Frites', 'Alloco', 'Salade'] }] },
  { id: 'shawarma-poulet', name: 'Shawarma Poulet', price: 1500, category: 'fastfood', image: productBurger, description: 'Poulet mariné, sauce maison.' },
  { id: 'salade-lyte', name: 'Salade Lyte', price: 1500, category: 'fastfood', image: restaurantScene, description: 'Notre salade signature.', badge: 'signature' },

  // Plats
  { id: 'riz-gras', name: 'Riz Gras', price: 2000, category: 'plats', image: restaurantScene, description: 'Riz savoureux, viande tendre.', options: [{ label: 'Viande', choices: ['Poulet', 'Bœuf', 'Poisson'] }, { label: 'Sauce', choices: ['Gombo', 'Légumes', 'Arachide', 'Tomate'] }] },
  { id: 'atassi', name: 'Atassi', price: 2000, category: 'plats', image: restaurantScene, description: 'Haricot & riz, saveur béninoise.', badge: 'signature', options: [{ label: 'Viande', choices: ['Poisson', 'Bœuf', 'Poulet'] }, { label: 'Piment', choices: ['Doux', 'Fort', 'À part'] }] },
  { id: 'spaghettis', name: 'Spaghettis', price: 1500, category: 'plats', image: restaurantScene, description: 'Pâtes al dente, sauce savoureuse.' },
  { id: 'couscous', name: 'Couscous', price: 2000, category: 'plats', image: restaurantScene, description: 'Semoule fine, légumes et viande.' },

  // Grillades
  { id: 'poulet-grille', name: 'Poulet Grillé', price: 3500, category: 'grillades', image: terrasseScene, description: 'Poulet entier grillé au feu de bois.', badge: 'populaire', options: [{ label: 'Portion', choices: ['Entier', 'Demi'] }, { label: 'Accompagnement', choices: ['Alloco', 'Frites', 'Riz'] }] },
  { id: 'poisson-braise', name: 'Poisson Braisé', price: 3000, category: 'grillades', image: terrasseScene, description: 'Poisson frais braisé à la perfection.' },
  { id: 'brochettes-boeuf', name: 'Brochettes de Bœuf', price: 2500, category: 'grillades', image: terrasseScene, description: 'Viande tendre, épices parfumées.' },
  { id: 'yakitori', name: 'Yakitori', price: 2000, category: 'grillades', image: terrasseScene, description: 'Brochettes de poulet grillées.' },

  // Jus & Thés
  { id: 'jus-ananas', name: 'Jus Lyte (Ananas)', price: 700, category: 'boissons', image: productJuice, description: 'Ananas frais pressé.', badge: 'signature', options: [{ label: 'Taille', choices: ['250ml', '350ml', '1L'] }] },
  { id: 'jus-bissap', name: 'Jus de Bissap', price: 700, category: 'boissons', image: productJuice, description: 'Hibiscus rafraîchissant.' },
  { id: 'jus-baobab', name: 'Jus de Baobab', price: 700, category: 'boissons', image: productJuice, description: 'Fruit de baobab, doux et nutritif.' },
  { id: 'jus-gingembre', name: 'Jus de Gingembre', price: 700, category: 'boissons', image: productJuice, description: 'Épicé et revitalisant.', badge: 'populaire' },
  { id: 'the-citronnelle', name: 'Thé Citronnelle', price: 500, category: 'boissons', image: productJuice, description: 'Infusion apaisante.' },
  { id: 'the-vert', name: 'Thé Vert Detox', price: 600, category: 'boissons', image: productJuice, description: 'Antioxydant et léger.' },
];

export const bestSellers = [
  products.find(p => p.id === 'jus-ananas')!,
  products.find(p => p.id === 'bouillie-akluie')!,
  products.find(p => p.id === 'burger-double')!,
  products.find(p => p.id === 'poulet-grille')!,
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
};
