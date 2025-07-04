import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TextState {
  title: string;
  subtitle: string;
}

interface AnimationSectionProps {
  textStates: TextState[];
  gifUrl: string;
}

const AnimationSection: React.FC<AnimationSectionProps> = ({
  textStates = [
    {
      title: "Comment jouer ?",
      subtitle: "Regardez attentivement"
    },
    {
      title: "",
      subtitle: "c'est très simple"
    }
    ,
    {
      title: "",
      subtitle: "Il faut juste placer les déchets dans le panier "
    },
    {
      title: "",
      subtitle: "fait bien attention à bien placer les déchets"
    },
    {
        title: "",
        subtitle: "en fonction de leur type"
      },
    {
      title: "",
      subtitle: "comme le montre la vidéo sur la droite"
    },
    {
      title: "",
      subtitle: "Tu es prêt pour l'aventure ?"
    },
    {
      title: "Alors c'est parti !",
      subtitle: ""
    }
  ],
}) => {
  const [currentState, setCurrentState] = useState(0);
  const [showClickIndicator, setShowClickIndicator] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowClickIndicator(false);
    const timer = setTimeout(() => {
      setShowClickIndicator(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentState]);

  const handleClick = () => {
    if (currentState < textStates.length - 1) {
      setCurrentState(prev => prev + 1);
    } else {
      navigate('/game');
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/image/bg.webp)',
          opacity: 0.96,
        }}
      />

      {/* GIF Animation Container */}
      <div 
  className="absolute top-1/2 right-64 transform -translate-y-1/2 w-[800px] h-[600px] z-20 rounded-lg overflow-hidden"
  
      >
        <img 
          src={'/image/05221-ezgif.com-video-to-gif-converter.gif'}
          alt="Animation"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-green-900 opacity-50" />

      {/* Bulle de dialogue */}
      <div 
        className="absolute bottom-1/2 left-8 w-2/3 h-1/3 z-20" 
        style={{
          backgroundImage: 'url(/image/Leonardo_Phoenix_10_Create_a_2D_pixel_art_speech_bubble_in_the_3.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer" onClick={handleClick}>
          <div className="text-center h-[350px] w-[500px] flex items-center justify-center">
            <div className="animate-fade-in w-full" key={currentState}>
              <p className="text-xl font-bold text-black typing-text">{textStates[currentState].title}</p>
              <p className="text-sm text-black mt-2 typing-text-delayed">{textStates[currentState].subtitle}</p>
              {showClickIndicator && (
                <div className="mt-4 animate-bounce">
                  <ChevronRight className="w-6 h-6 text-black mx-auto transform rotate-90" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles d'animation
const styles = `
@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft.ttf') format('truetype');
}

@keyframes typing {
  from {
    width: 0;
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    width: 100%;
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(90deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.typing-text {
  overflow: hidden;
  white-space: normal;
  animation: typing 1s ease-out;
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 500px;
  font-family: 'Minecraft', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  word-wrap: break-word;
  text-align: center;
  padding: 0 1rem;
  box-sizing: border-box;
}

.typing-text-delayed {
  overflow: hidden;
  white-space: normal;
  animation: typing 1s ease-out 0.5s;
  margin: 0 auto;
  opacity: 0;
  animation-fill-mode: forwards;
  display: block;
  width: 100%;
  max-width: 500px;
  font-family: 'Minecraft', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  word-wrap: break-word;
  text-align: center;
  padding: 0 1rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
  width: 100%;
}

.animate-bounce {
  animation: bounce 0.8s ease-in-out infinite;
}
`;

// Ajout du style dans le head du document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default AnimationSection; 