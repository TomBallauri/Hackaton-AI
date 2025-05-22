import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

interface GameOverProps {
  score: number;
  level: number;
  maxLevel: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, level, maxLevel, onRestart }) => {
  const isWinner = level > maxLevel;
  
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        <div className="mb-6">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${isWinner ? 'bg-yellow-400' : 'bg-blue-500'}`}>
            <Trophy size={40} className="text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {isWinner ? 'Congratulations!' : 'Game Over!'}
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-700">
            {isWinner 
              ? 'You completed all levels!' 
              : 'Better luck next time!'}
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Final Score</p>
                <p className="text-2xl font-bold text-blue-600">{score}</p>
              </div>
              <div>
                <p className="text-gray-500">Level Reached</p>
                <p className="text-2xl font-bold text-purple-600">{level}</p>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="
            bg-blue-600 hover:bg-blue-700 text-white font-bold
            py-3 px-6 rounded-full transition-all transform
            hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
            flex items-center justify-center gap-2 mx-auto
          "
        >
          <RefreshCw size={20} />
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;