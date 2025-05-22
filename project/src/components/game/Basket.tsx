import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Category } from '../../types';
import { iconMap } from '../../data/itemData';
import { ShoppingBasket } from 'lucide-react';

interface BasketProps {
  category: Category;
}

const Basket: React.FC<BasketProps> = ({ category }) => {
  const { handleDrop, items } = useGame();
  const [isOver, setIsOver] = useState(false);
  
  const placedItems = items.filter(item => item.placed && item.position === category.id);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };
  
  const handleDragLeave = () => {
    setIsOver(false);
  };
  
  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('itemId');
    handleDrop(itemId, category.id);
    setIsOver(false);
    
    // Play drop sound
    const audio = new Audio('/sounds/drop.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };
  
  const IconComponent = iconMap[category.icon] || ShoppingBasket;
  
  return (
    <div
      className={`
        flex flex-col items-center justify-between
        rounded-xl border-4 p-4 transition-all min-h-[200px]
        ${isOver ? 'border-blue-500 bg-blue-50 scale-105' : `${category.color.replace('bg-', 'border-')}`}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleOnDrop}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${category.color}`}>
        <IconComponent className="text-white" size={32} />
      </div>
      
      <h4 className="text-xl font-semibold text-gray-800 mb-3">{category.name}</h4>
      
      {placedItems.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 w-full">
          {placedItems.map((item) => {
            const ItemIcon = iconMap[item.image];
            return (
              <div 
                key={item.id}
                className={`
                  p-2 rounded-md flex flex-col items-center justify-center
                  ${item.correct ? 'bg-green-100' : 'bg-red-100'}
                  transition-all animate-bounce-once
                `}
              >
                {ItemIcon && <ItemIcon size={24} className={item.correct ? 'text-green-600' : 'text-red-600'} />}
                <span className="text-xs font-medium mt-1 text-center">{item.name}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 italic text-sm">Drop items here</p>
      )}
    </div>
  );
};

export default Basket;