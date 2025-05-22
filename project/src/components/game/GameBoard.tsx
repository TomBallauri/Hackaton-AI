import React from 'react';
import { useGame } from '../context/GameContext';
import ItemsArea from './ItemsArea';
import BasketsArea from './BasketsArea';

const GameBoard: React.FC = () => {
  const { level, categories } = useGame();

  return (
    <div className="flex-1 flex flex-col justify-between min-h-[70vh]">
      {/* Boîtes en haut */}
      <div className="mb-8 flex flex-col items-center justify-center w-full">
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Level {level}: Sort the items into the correct baskets
        </h2>
        <p className="text-gray-600 mt-1 text-center">
          Drag each item to its corresponding basket
        </p>
        {/* BasketsArea centré sans background */}
        <div className="mt-8 flex justify-center w-full">
          <BasketsArea categories={categories} />
        </div>
      </div>

      {/* Objets à déplacer en bas */}
      <div className="w-full flex justify-center fixed left-0 bottom-0 pb-8 bg-gradient-to-t from-white via-white/80 to-transparent z-20">
        <ItemsArea />
      </div>
    </div>
  );
};

export default GameBoard;