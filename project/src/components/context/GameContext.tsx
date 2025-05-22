import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
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
  const timerRef = useRef<number | null>(null);
  // Ajoute ce state pour éviter plusieurs triggers
  const [levelFinished, setLevelFinished] = useState(false);

  const setupLevel = (levelNumber: number) => {
    const gameLevel = gameLevels[levelNumber - 1];
    if (!gameLevel) return; // <-- Ajoute cette ligne pour éviter l'erreur
    setCategories(gameLevel.categories);
    setItems(generateGameItems(gameLevel.itemCount, gameLevel.categories));
    setTimeLeft(gameLevel.time);
  };

  useEffect(() => {
    setupLevel(level);
  }, [level]);

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      timerRef.current = window.setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else if (timeLeft === 0 && gameStarted && !gameOver) {
      setGameOver(true);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [timeLeft, gameStarted, gameOver]);

  // Vérifie la fin de niveau dès que les items changent
  useEffect(() => {
    if (!gameStarted || gameOver || levelFinished) return;
    const allPlaced = items.length > 0 && items.every((item) => item.placed);
    if (allPlaced) {
      setLevelFinished(true);
      const correctCount = items.filter((item) => item.correct).length;
      const totalItems = items.length;
      if (correctCount / totalItems >= 0.7) {
        nextLevel();
      } else {
        setGameOver(true);
      }
      // Remet à false pour le prochain niveau
      setTimeout(() => setLevelFinished(false), 100);
    }
  }, [items, gameStarted, gameOver, levelFinished]);

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
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const nextLevel = () => {
    if (level < maxLevel) {
      setLevel((prev) => prev + 1);
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      // Passe au niveau suivant pour déclencher l'écran de victoire
      setLevel((prev) => prev + 1);
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
            const audio = new Audio('/sounds/correct.mp3');
            audio.volume = 0.5;
            audio.play().catch(() => {});
            return {
              ...item,
              placed: true,
              position: categoryId,
              correct: true,
              showError: false,
            };
          } else {
            const audio = new Audio('/sounds/wrong.mp3');
            audio.volume = 0.5;
            audio.play().catch(() => {});
            // Affiche l'erreur temporairement
            return {
              ...item,
              placed: true,
              position: categoryId,
              correct: false,
              showError: true,
            };
          }
        }
        return item;
      });
    });

    // Si erreur, remet l'objet à sa place initiale après 2s
    const droppedItem = items.find((item) => item.id === itemId);
    if (droppedItem && droppedItem.category !== categoryId) {
      setTimeout(() => {
              setItems((prevItems) =>
                prevItems.map((item) =>
                  item.id === itemId
                    ? {
                        ...item,
                        placed: false,
                        position: null,
                        correct: false,
                        showError: false,
                      }
                    : item
                )
              );
            }, 2000);
    }
  };

  const gameLevels: GameLevel[] = [
    {
      level: 1,
      categories: ['organique', 'plastique'],
      itemCount: 8,
      time: 60,
    },
    {
      level: 2,
      categories: ['organique', 'plastique', 'verre'],
      itemCount: 12,
      time: 90,
    },
    {
      level: 3,
      categories: ['organique', 'plastique', 'verre', 'papier'],
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