import React from 'react';
import { useGame } from '../context/GameContext';
import DraggableItem from './DraggableItem';

const ItemsArea: React.FC = () => {
  const { items } = useGame();

  return (
    <div className="flex flex-row gap-4 relative">
      <div className="absolute left-0 right-0 bottom-0 h-4  rounded-full blur-sm opacity-40" />
      {items.filter(item => !item.placed).map(item => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsArea;