import React from 'react';
import { useGame } from '../context/GameContext';
import ItemsArea from './ItemsArea';
import BasketsArea from './BasketsArea';
import GameHeader from './GameHeader';

const GameBoard: React.FC = () => {
  const { level, categories } = useGame();

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background full page, fixed, sans scroll */}
      <img
        src="/image/BG_popubelle.png"
        alt="background poubelle"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ userSelect: 'none' }}
        draggable={false}
      />
      {/* Barre de score toujours visible au-dessus du background */}
      <div className="fixed top-0 left-0 w-full z-30">
        <GameHeader />
      </div>
      {/* Contenu du jeu au-dessus du background */}
      <div className="relative z-10 w-full pt-24">
        {/* Boîtes en haut */}
        <div className="mb-8 flex flex-col items-center justify-center w-full">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Level {level}: Sort the items into the correct baskets
          </h2>
          <p className="text-gray-600 mt-1 text-center">
            Drag each item to its corresponding basket
          </p>
          {/* BasketsArea centré sans background */}
          <div className="mt-24 flex justify-center w-full">
            <BasketsArea categories={categories} />
          </div>
        </div>

        {/* Objets à déplacer en bas */}
        <div className="w-full flex justify-center fixed left-0 bottom-0 pb-8 z-20">
          <ItemsArea />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;