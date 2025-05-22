import { useEffect } from 'react';

// Liste des médias à précharger (ajoutez ici tous les chemins nécessaires)
const images = [
  '/image/BG_popubelle.png',
  '/image/bg.webp',
  '/image/challenge.jpg',
  '/image/communaute.jpg',
  '/image/keyboard.jpg',
  '/image/Leonardo_Phoenix_10_Create_a_2D_pixel_art_speech_bubble_in_the_3.png',
  '/image/pj8KDG2jRz4AAAAASUVORK5CYII.png',
  '/image/yaks.jpeg',
  // Items
  '/image/item/Apple.png',
  '/image/item/Avocado.png',
  '/image/item/Banana%20peel.png',
  '/image/item/Battery.png',
  '/image/item/Can.png',
  '/image/item/Cardboard.png',
  '/image/item/Carrot.png',
  '/image/item/Chips%20bag.png',
  '/image/item/Glass%20Bottle.png',
  '/image/item/Jar.png',
  '/image/item/Jelly.png',
  '/image/item/Journal.png',
  '/image/item/Paper%20bag.png',
  '/image/item/Phone.png',
  '/image/item/Plastic%20Bottle.png',
  '/image/item/Tomato.png',
  '/image/item/Yogurt.png',
  // Poubelles
  '/image/poubelle/poubelle_glass.png',
  '/image/poubelle/poubelle_organic.png',
  '/image/poubelle/poubelle_paper.png',
  '/image/poubelle/poubelle_plastic.png',
];

const videos = [
  '/vidéo/transition.webm',
];

const sounds = [
  '/sfx/Apple%20Sound.mp3',
  '/sfx/Battery%20Sound.mp3',
  '/sfx/Can%20Sound.mp3',
  '/sfx/Cardboard%20Sound.mp3',
  '/sfx/Error%20Sound.m4a',
  '/sfx/Glass%20Sound.mp3',
  '/sfx/Paper%20Sound.mp3',
  '/sfx/Plastic%20Sound.mp3',
  '/sfx/Ring%20Ring%20Sound.mp3',
  '/sfx/Trashcan%20sound.mp3',
  '/sfx/Validate_sound.mp3',
];

const MediaPreloader = () => {
  useEffect(() => {
    // Préchargement des images
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
    // Préchargement des vidéos
    videos.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    });
    // Préchargement des sons
    sounds.forEach((src) => {
      const audio = new window.Audio();
      audio.src = src;
      audio.preload = 'auto';
    });
  }, []);
  return null;
};

export default MediaPreloader;
