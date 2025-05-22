import React, { useEffect } from 'react';

interface GameStartProps {
  onStart: () => void;
}

const GameStart: React.FC<GameStartProps> = ({ onStart }) => {
  useEffect(() => {
    onStart();
  }, [onStart]);

  return null;
};

export default GameStart;