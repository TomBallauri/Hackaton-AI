import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import GameBoard from './GameBoard';
import GameStart from './GameStart';
import GameOver from './GameOver';
import GameHeader from './GameHeader';
import LevelTransition from './LevelTransition';
import VictoryScreen from './VictoryScreen';

const Game: React.FC = () => {
  const { gameStarted, gameOver, score, level, maxLevel, resetGame, startGame } = useGame();
  const [showIntro, setShowIntro] = useState(true);
  const [showLevelTransition, setShowLevelTransition] = useState(false);
  const [lastLevel, setLastLevel] = useState(level);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameStarted && !gameOver && level !== lastLevel) {
      setShowLevelTransition(true);
      setTimeout(() => setShowLevelTransition(false), 1200);
      setLastLevel(level);
    }
  }, [level, gameStarted, gameOver, lastLevel]);

  if (showIntro) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
        <video
          src="/public/vidéo/Boy.mp4" // Mets ici le chemin de ta vidéo
          autoPlay
          className="rounded-xl shadow-lg max-w-full"
          onEnded={() => {
            setShowVideo(false);
            startGame();
          }}
          controls={false}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      <GameHeader />
      {showLevelTransition && <LevelTransition level={level} />}
      {!gameStarted && !gameOver && <GameStart onStart={startGame} />}
      {gameStarted && !gameOver && <GameBoard />}
      {gameOver && level > maxLevel && (
        <VictoryScreen
          score={score}
          maxLevel={maxLevel}
          onRestart={resetGame}
        />
      )}
      {gameOver && level <= maxLevel && (
        <GameOver 
          score={score} 
          level={level} 
          maxLevel={maxLevel} 
          onRestart={resetGame} 
        />
      )}
    </div>
  );
};

export default Game;