import React, { useState } from 'react';
import { GameItem } from '../../types';
import { iconMap } from '../../data/itemData';

interface DraggableItemProps {
  item: GameItem;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const Icon = iconMap[item.image];
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('itemId', item.id);
    setIsDragging(true);
    
    // Play drag sound
    const audio = new Audio('/sounds/drag.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {});
    
    // Create a custom drag image
    const dragImage = document.createElement('div');
    dragImage.className = 'bg-white rounded-lg shadow-lg p-2';
    dragImage.innerHTML = `<div class="text-center">${item.name}</div>`;
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 50, 50);
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  return (
    <div
      className={`
        bg-white border-2 p-4 rounded-lg shadow-md cursor-grab transition-all
        ${isDragging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}
        hover:shadow-lg hover:scale-105 active:cursor-grabbing
        ${item.category === 'fruit' ? 'border-red-300' : 
          item.category === 'vegetable' ? 'border-green-300' : 
          item.category === 'dairy' ? 'border-blue-300' : 'border-yellow-300'}
      `}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        {Icon && <Icon className="text-gray-700" size={36} />}
        <span className="text-sm font-medium text-center">{item.name}</span>
      </div>
    </div>
  );
};

export default DraggableItem;