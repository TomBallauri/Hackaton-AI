import { CategoryType, GameItem, Category } from '../types';
import { Apple, Banana, Carrot, UserCheck as Cheese, Popcorn as Corn, Egg, Grape, Milk, Heading as Bread, Rotate3D as Potato, Cherry as Strawberry, Atom as Tomato, ScrollIcon as Broccoli, Locate as Avocado, GlassWaterIcon as Watermelon, Dice1 as Rice } from 'lucide-react';

// Category definitions with colors and icons
export const categories: Record<CategoryType, Category> = {
  fruit: {
    id: 'fruit',
    name: 'Fruits',
    color: 'bg-red-500',
    icon: 'Apple',
  },
  vegetable: {
    id: 'vegetable',
    name: 'Vegetables',
    color: 'bg-green-500',
    icon: 'Carrot',
  },
  dairy: {
    id: 'dairy',
    name: 'Dairy',
    color: 'bg-blue-500',
    icon: 'Milk',
  },
  grain: {
    id: 'grain',
    name: 'Grains',
    color: 'bg-yellow-500',
    icon: 'Wheat',
  },
};

// Item data by category
export const itemsData: Record<CategoryType, Array<{ name: string, image: string }>> = {
  fruit: [
    { name: 'Apple', image: 'Apple' },
    { name: 'Banana', image: 'Banana' },
    { name: 'Grape', image: 'Grape' },
    { name: 'Strawberry', image: 'Strawberry' },
    { name: 'Watermelon', image: 'Watermelon' },
    { name: 'Avocado', image: 'Avocado' },
  ],
  vegetable: [
    { name: 'Carrot', image: 'Carrot' },
    { name: 'Tomato', image: 'Tomato' },
    { name: 'Potato', image: 'Potato' },
    { name: 'Broccoli', image: 'Broccoli' },
    { name: 'Corn', image: 'Corn' },
  ],
  dairy: [
    { name: 'Milk', image: 'Milk' },
    { name: 'Cheese', image: 'Cheese' },
    { name: 'Egg', image: 'Egg' },
  ],
  grain: [
    { name: 'Bread', image: 'Bread' },
    { name: 'Rice', image: 'Rice' },
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

// Map of icon components by name
export const iconMap: Record<string, React.ComponentType<any>> = {
  Apple,
  Banana,
  Carrot,
  Cheese,
  Corn,
  Egg,
  Grape,
  Milk,
  Bread,
  Potato,
  Strawberry,
  Tomato,
  Broccoli,
  Avocado,
  Watermelon,
  Rice,
};