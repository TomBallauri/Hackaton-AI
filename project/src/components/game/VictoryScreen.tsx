import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface VictoryScreenProps {
  score: number;
  maxLevel: number;
  onRestart: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ score, maxLevel }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-yellow-400">
            <Trophy size={40} className="text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Congratulations!</h2>
        <p className="text-xl text-gray-700 mb-6">You completed all {maxLevel} levels!</p>
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <p className="text-gray-500">Final Score</p>
          <p className="text-2xl font-bold text-blue-600">{score}</p>
        </div>
        <button
          onClick={() => navigate('/end')}
          className="
            bg-blue-600 hover:bg-blue-700 text-white font-bold
            py-3 px-6 rounded-full transition-all transform
            hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
            flex items-center justify-center gap-2 mx-auto
          "
        >
          <RefreshCw size={20} />
          Découvrir notre engagement
        </button>
      </div>
    </div>
  );
};

export default VictoryScreen;