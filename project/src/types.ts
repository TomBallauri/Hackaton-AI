export type CategoryType = 'fruit' | 'vegetable' | 'dairy' | 'grain';

export interface GameItem {
  id: string;
  name: string;
  category: CategoryType;
  image: string;
  placed: boolean;
  position: string | null;
  correct: boolean;
}

export interface GameLevel {
  level: number;
  categories: CategoryType[];
  itemCount: number;
  time: number;
}

export interface Category {
  id: CategoryType;
  name: string;
  color: string;
  icon: string;
}