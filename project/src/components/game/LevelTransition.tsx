import React from 'react';

interface LevelTransitionProps {
  level: number;
}

const LevelTransition: React.FC<LevelTransitionProps> = ({ level }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div className="bg-white rounded-xl shadow-2xl px-12 py-8 text-center animate-pop">
      <h2 className="text-4xl font-bold text-blue-600 mb-2">Level {level}</h2>
      <p className="text-lg text-gray-700">Get ready!</p>
    </div>
    <style>
      {`
        .animate-pop {
          animation: pop-scale 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes pop-scale {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}
    </style>
  </div>
);

export default LevelTransition;
