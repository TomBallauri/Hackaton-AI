import React, { createContext, useState, useContext, useEffect } from 'react';
import { CategoryType, GameItem, GameLevel } from '../../types';
import { generateGameItems } from '../../data/itemData';

interface GameContextType {
  items: GameItem[];
  score: number;
  level: number;
  maxLevel: number;
  timeLeft: number;
  gameStarted: boolean;
  gameOver: boolean;
  categories: CategoryType[];
  handleDrop: (itemId: string, categoryId: string) => void;
  resetGame: () => void;
  startGame: () => void;
  nextLevel: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<GameItem[]>([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [maxLevel] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [timer, setTimer] = useState<number | null>(null);

  const setupLevel = (levelNumber: number) => {
    const gameLevel = gameLevels[levelNumber - 1];
    setCategories(gameLevel.categories);
    setItems(generateGameItems(gameLevel.itemCount, gameLevel.categories));
    setTimeLeft(gameLevel.time);
  };

  useEffect(() => {
    setupLevel(level);
  }, [level]);

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timerId = window.setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      
      setTimer(timerId as unknown as number);
      
      return () => {
        if (timer) clearTimeout(timer);
      };
    } else if (timeLeft === 0 && gameStarted) {
      setGameOver(true);
      if (timer) clearTimeout(timer);
    }
  }, [timeLeft, gameStarted, gameOver, timer]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setupLevel(1);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setupLevel(1);
    if (timer) clearTimeout(timer);
  };

  const nextLevel = () => {
    if (level < maxLevel) {
      setLevel((prev) => prev + 1);
      if (timer) clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  };

  const handleDrop = (itemId: string, categoryId: string) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          const correct = item.category === categoryId;
          if (correct) {
            setScore((prev) => prev + 10);
            // Play success sound
            const audio = new Audio('/sounds/correct.mp3');
            audio.volume = 0.5;
            audio.play().catch(() => {});
          } else {
            // Play error sound
            const audio = new Audio('/sounds/wrong.mp3');
            audio.volume = 0.5;
            audio.play().catch(() => {});
          }
          
          return {
            ...item,
            placed: true,
            position: categoryId,
            correct,
          };
        }
        return item;
      });
    });

    // Check if all items are placed
    setTimeout(() => {
      const allPlaced = items.every((item) => item.placed);
      if (allPlaced) {
        const correctCount = items.filter((item) => item.correct).length;
        const totalItems = items.length;
        
        // If more than 70% correct, advance to next level
        if (correctCount / totalItems >= 0.7) {
          nextLevel();
        } else {
          setGameOver(true);
        }
      }
    }, 500);
  };

  const gameLevels: GameLevel[] = [
    {
      level: 1,
      categories: ['fruit', 'vegetable'],
      itemCount: 8,
      time: 60,
    },
    {
      level: 2,
      categories: ['fruit', 'vegetable', 'dairy'],
      itemCount: 12,
      time: 90,
    },
    {
      level: 3,
      categories: ['fruit', 'vegetable', 'dairy', 'grain'],
      itemCount: 16,
      time: 120,
    },
  ];

  return (
    <GameContext.Provider
      value={{
        items,
        score,
        level,
        maxLevel,
        timeLeft,
        gameStarted,
        gameOver,
        categories,
        handleDrop,
        resetGame,
        startGame,
        nextLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};