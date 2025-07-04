import React, { useState } from 'react';
import { GameItem } from '../../types';

interface DraggableItemProps {
  item: GameItem;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [isDragging, setIsDragging] = useState(false);

  // Pour que l'image suive le curseur lors du drag, on utilise un effet visuel custom
  // On affiche l'image "suiveuse" en position absolue si isDragging est true
  const [mouse, setMouse] = useState<{x: number, y: number} | null>(null);

  const playGrabSound = () => {
    // Associe chaque item à un son spécifique
    const soundMap: Record<string, string> = {
      'Pomme': '/sfx/Apple Sound.mp3',
      'Banane': '/sfx/Apple Sound.mp3', // à remplacer si tu as un son spécifique
      'Carotte': '/sfx/Apple Sound.mp3', // à remplacer si tu as un son spécifique
      'Tomate': '/sfx/Apple Sound.mp3', // à remplacer si tu as un son spécifique
      'Avocat': '/sfx/Apple Sound.mp3', // à remplacer si tu as un son spécifique
      'Bouteille en plastique': '/sfx/Plastic Sound.mp3',
      'Sac plastique': '/sfx/Plastic Sound.mp3',
      'Pot de yaourt': '/sfx/Plastic Sound.mp3',
      'Emballage chips': '/sfx/Plastic Sound.mp3',
      'Journal': '/sfx/Paper Sound.mp3',
      'Cahier': '/sfx/Paper Sound.mp3',
      'Carton': '/sfx/Cardboard Sound.mp3',
      'Papier brouillon': '/sfx/Paper Sound.mp3',
      'Bouteille en verre': '/sfx/Glass Sound.mp3',
      'Pot de confiture': '/sfx/Glass Sound.mp3',
      'Bocal': '/sfx/Glass Sound.mp3',
      'Battery': '/sfx/Battery Sound.mp3',
      'Can': '/sfx/Can Sound.mp3',
      'Phone': '/sfx/Ring Ring Sound.mp3',
    };
    const sound = soundMap[item.name] || '/sfx/Trashcan sound.mp3';
    const audio = new Audio(sound);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('itemId', item.id);
    setIsDragging(true);
    playGrabSound();

    // Play drag sound
    const audio = new Audio('/sounds/drag.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {});

    // Utilise une image transparente comme drag image pour cacher le drag natif
    const transparent = document.createElement('img');
    transparent.src =
      'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>');
    e.dataTransfer.setDragImage(transparent, 0, 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setMouse(null);
  };

  // Met à jour la position de la souris pendant le drag
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (isDragging && e.clientX !== 0 && e.clientY !== 0) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
  };

  // Corrige le bug d'image fantôme : retire l'image suiveuse si le drag est annulé (ex: drop en dehors)
  React.useEffect(() => {
    if (!isDragging) {
      setMouse(null);
    }
  }, [isDragging]);

  return (
    <>
      <div
        className={"active:cursor-grabbing"}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        style={{ zIndex: isDragging ? 50 : undefined }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 transition-transform duration-200 hover:scale-110 select-none"
          style={{ opacity: isDragging ? 0 : 1 }}
        />
      </div>
      {isDragging && mouse && (
        <img
          src={item.image}
          alt="drag-preview"
          className="w-20 h-20 pointer-events-none fixed"
          style={{
            left: mouse.x - 32,
            top: mouse.y - 32,
            position: 'fixed',
            zIndex: 1000,
            borderRadius: '9999px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            background: 'white',
            opacity: 1,
            pointerEvents: 'none',
          }}
        />
      )}
    </>
  );
};

export default DraggableItem;