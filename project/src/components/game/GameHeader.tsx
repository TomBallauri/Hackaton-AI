import React from 'react';
import { useGame } from '../context/GameContext';
import { ShoppingBasket, Timer, Trophy } from 'lucide-react';

const GameHeader: React.FC = () => {
  const { score, level, timeLeft, gameStarted, gameOver } = useGame();
  
  if (!gameStarted && !gameOver) return null;
  
  return (
    <header className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-wrap justify-between items-center">
      <div className="flex items-center mb-2 md:mb-0">
        <ShoppingBasket className="mr-2 text-blue-600" size={24} />
        <h1 className="text-2xl font-bold text-blue-600">Sort It Out!</h1>
      </div>
      
      <div className="flex gap-6">
        <div className="flex items-center">
          <Trophy className="mr-2 text-yellow-500" size={20} />
          <span className="text-lg font-semibold">
            Score: <span className="text-blue-600">{score}</span>
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-lg font-semibold">
            Level: <span className="text-purple-600">{level}</span>
          </span>
        </div>
        
        <div className="flex items-center">
          <Timer className={`mr-2 ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-green-500'}`} size={20} />
          <span className={`text-lg font-semibold ${timeLeft <= 10 ? 'text-red-500' : ''}`}>
            {timeLeft}s
          </span>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;