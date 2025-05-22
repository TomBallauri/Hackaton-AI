import React, { useEffect } from 'react';
import { ShoppingBasket, Play } from 'lucide-react';

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