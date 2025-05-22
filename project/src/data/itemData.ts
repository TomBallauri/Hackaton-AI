import { CategoryType, GameItem, Category } from '../types';

// Category definitions with colors and icons
export const categories: Record<CategoryType, Category> = {
  organique: {
    id: 'organique',
    name: 'Organique',
    color: 'bg-green-600',
    icon: 'Apple',
  },
  plastique: {
    id: 'plastique',
    name: 'Plastique',
    color: 'bg-blue-400',
    icon: 'Watermelon',
  },
  papier: {
    id: 'papier',
    name: 'Papier',
    color: 'bg-yellow-300',
    icon: 'ScrollIcon',
  },
  verre: {
    id: 'verre',
    name: 'Verre',
    color: 'bg-teal-400',
    icon: 'GlassWaterIcon',
  },
};

// Item data by category
export const itemsData: Record<CategoryType, Array<{ name: string, image: string }>> = {
  organique: [
    { name: 'Pomme', image: '/src/img/item/pomme.png' },
    { name: 'Banane', image: '/src/img/item/banane.png' },
    { name: 'Carotte', image: '/src/img/item/carotte.png' },
    { name: 'Tomate', image: '/src/img/item/tomate.png' },
    { name: 'Avocat', image: '/src/img/item/avocat.png' },
  ],
  plastique: [
    { name: 'Bouteille en plastique', image: '/src/img/item/bouteille_plastique.png'},
    { name: 'Sac plastique', image: '/src/img/item/sac_plastique.png' },
    { name: 'Pot de yaourt', image: '/src/img/item/pot_yaourt.png' },
    { name: 'Emballage chips', image: '/src/img/item/emballage_chips.png' },
  ],
  papier: [
    { name: 'Journal', image: '/src/img/item/journal.png' },
    { name: 'Cahier', image: '/src/img/item/cahier.png' },
    { name: 'Carton', image: '/src/img/item/carton.png' },
    { name: 'Papier brouillon', image: '/src/img/item/papier_brouillon.png' },
  ],
  verre: [
    { name: 'Bouteille en verre', image: '/src/img/item/bouteille_verre.png' },
    { name: 'Pot de confiture', image: '/src/img/item/pot_confiture.png' },
    { name: 'Bocal', image: '/src/img/item/bocal.png' },
  ],
};

// Get random items for a game
export function generateGameItems(count: number, categoryTypes: CategoryType[]): GameItem[] {
  const items: GameItem[] = [];
  
  // Ensure at least one item from each category
  for (const category of categoryTypes) {
    const categoryItems = itemsData[category];
    const randomIndex = Math.floor(Math.random() * categoryItems.length);
    const { name, image } = categoryItems[randomIndex];
    
    items.push({
      id: `${category}-${name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      category,
      image,
      placed: false,
      position: null,
      correct: false,
    });
  }
  
  // Fill remaining slots randomly
  while (items.length < count) {
    const randomCategoryIndex = Math.floor(Math.random() * categoryTypes.length);
    const category = categoryTypes[randomCategoryIndex];
    const categoryItems = itemsData[category];
    const randomIndex = Math.floor(Math.random() * categoryItems.length);
    const { name, image } = categoryItems[randomIndex];
    
    // Check for duplicates
    if (!items.some(item => item.name === name && item.category === category)) {
      items.push({
        id: `${category}-${name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name,
        category,
        image,
        placed: false,
        position: null,
        correct: false,
      });
    }
  }
  
  // Shuffle the array
  return items.sort(() => Math.random() - 0.5);
}
