import React from 'react';
import { ShoppingBasket, Play } from 'lucide-react';

interface GameStartProps {
  onStart: () => void;
}

const GameStart: React.FC<GameStartProps> = ({ onStart }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
            <ShoppingBasket size={40} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Sort It Out!</h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-gray-700">
            Test your sorting skills by dragging items into their correct baskets.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">How to Play:</h3>
            <ul className="text-left text-gray-700 space-y-1">
              <li>• Drag items from the right side</li>
              <li>• Drop them into the correct basket on the left</li>
              <li>• Complete levels by sorting at least 70% of items correctly</li>
              <li>• Beat the timer to move to the next level</li>
            </ul>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="
            bg-blue-600 hover:bg-blue-700 text-white font-bold
            py-3 px-6 rounded-full transition-all transform
            hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
            flex items-center justify-center gap-2 mx-auto
          "
        >
          <Play size={20} />
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameStart;