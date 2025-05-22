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
    // On récupère l'item pour savoir si c'est correct ou non
    const item = items.find(i => i.id === itemId);
    const isCorrect = item && item.category === category.id;
    handleDrop(itemId, category.id);
    setIsOver(false);

    if (isCorrect) {
      // Play one of the two trashcan sounds randomly
      const sounds = ['/sfx/Trashcan sound.mp3', '/sfx/trash2.mp3'];
      const sound = sounds[Math.floor(Math.random() * sounds.length)];
      const audio = new Audio(sound);
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } else {
      // Play error sound
      const audio = new Audio('/sfx/Error Sound.m4a');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-end transition-all min-h-[220px]" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleOnDrop} style={{ width: '120px', height: '160px' }}>
      {/* L'image de la poubelle prend toute la div et sert de zone de drop */}
      <img
        src={
          category.id === 'organique' ? '/image/poubelle/poubelle_organic.png' :
          category.id === 'plastique' ? '/image/poubelle/poubelle_plastic.png' :
          category.id === 'verre' ? '/image/poubelle/poubelle_glass.png' :
          category.id === 'papier' ? '/image/poubelle/poubelle_paper.png' : ''
        }
        alt={category.name}
        className={`relative w-full h-full object-contain drop-shadow-lg z-10 ${isOver ? 'ring-4 ring-blue-300' : ''}`}
        draggable={false}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Affiche les items placés dans la poubelle, superposés en bas */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-1 z-20">
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