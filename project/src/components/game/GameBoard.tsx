import React from 'react';
import { useGame } from '../context/GameContext';
import ItemsArea from './ItemsArea';
import BasketsArea from './BasketsArea';

const GameBoard: React.FC = () => {
  const { level, categories } = useGame();
  
  return (
    <div className="flex-1 flex flex-col gap-8">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Level {level}: Sort the items into the correct baskets
        </h2>
        <p className="text-gray-600 mt-1">
          Drag each item to its corresponding basket
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <BasketsArea categories={categories} />
        <ItemsArea />
      </div>
    </div>
  );
};

export default GameBoard;