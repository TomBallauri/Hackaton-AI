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
    { name: 'Pomme', image: '/image/item/Apple.png' },
    { name: 'Banane', image: '/image/item/Banana peel.png' },
    { name: 'Carotte', image: '/image/item/Carrot.png' },
    { name: 'Tomate', image: '/image/item/Tomato.png' },
    { name: 'Avocat', image: '/image/item/Avocado.png' },
  ],
  plastique: [
    { name: 'Bouteille en plastique', image: '/image/item/Plastic Bottle.png'},
    { name: 'Sac plastique', image: '/image/item/Chips bag.png' },
    { name: 'Pot de yaourt', image: '/image/item/Yogurt.png' },
    { name: 'Emballage chips', image: '/image/item/Chips bag.png' },
  ],
  papier: [
    { name: 'Journal', image: '/image/item/Journal.png' },
    { name: 'Cahier', image: '/image/item/Paper bag.png' },
    { name: 'Carton', image: '/image/item/Cardboard.png' },
    { name: 'Papier brouillon', image: '/image/item/Paper bag.png' },
  ],
  verre: [
    { name: 'Bouteille en verre', image: '/image/item/Glass Bottle.png' },
    { name: 'Pot de confiture', image: '/image/item/Jelly.png' },
    { name: 'Bocal', image: '/image/item/Jar.png' },
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
