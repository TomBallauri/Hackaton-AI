import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Category } from '../../types';

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

  return (
    <div
      className={`relative flex flex-col items-center justify-end transition-all min-h-[220px] ${isOver ? 'scale-105' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleOnDrop}
      style={{ width: '120px', height: '160px' }}
    >
      {/* L'image de la poubelle prend toute la div et sert de zone de drop */}
      <img
        src={
          category.id === 'organique' ? '/src/img/poubelle/poubelle_organic.png' :
          category.id === 'plastique' ? '/src/img/poubelle/poubelle_plastic.png' :
          category.id === 'verre' ? '/src/img/poubelle/poubelle_glass.png' :
          category.id === 'papier' ? '/src/img/poubelle/poubelle_paper.png' : ''
        }
        alt={category.name}
        className={`w-full h-full object-contain drop-shadow-lg ${isOver ? 'ring-4 ring-blue-300' : ''}`}
        draggable={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Affiche les items placés dans la poubelle, superposés en bas */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-1 z-10">
        {placedItems.filter(item => !item.correct).map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            className={`w-10 h-10 rounded-full border-2 border-red-400 bg-red-50 transition-all animate-bounce-once`}
            draggable={false}
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Basket;