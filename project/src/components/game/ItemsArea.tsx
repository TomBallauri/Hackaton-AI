import React from 'react';
import { useGame } from '../context/GameContext';
import DraggableItem from './DraggableItem';

const ItemsArea: React.FC = () => {
  const { items } = useGame();
  const unplacedItems = items.filter(item => !item.placed);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">Items to Sort</h3>
      
      {unplacedItems.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500 italic">All items have been sorted!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center">
          {unplacedItems.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsArea;