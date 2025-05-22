export interface BikeComponent {
  id: string;
  name: string;
  image: string;
  description: string;
  position?: {
    x: number;
    y: number;
  };
}

export interface GameState {
  selectedComponents: BikeComponent[];
  availableComponents: BikeComponent[];
  isDragging: boolean;
  currentDrag: BikeComponent | null;
}

export interface Statistic {
  id: string;
  title: string;
  value: string;
  icon: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}