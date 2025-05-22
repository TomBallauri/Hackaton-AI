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
      title: "Animation en cours",
      subtitle: "Regardez attentivement"
    },
    {
      title: "Cliquez pour continuer",
      subtitle: "Une fois l'animation terminée"
    }
  ],
  gifUrl = "../src/img/animation.gif"
}) => {
  const [currentState, setCurrentState] = useState(0);
  const [showClickIndicator, setShowClickIndicator] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowClickIndicator(false);
    const timer = setTimeout(() => {
      setShowClickIndicator(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const handleClick = () => {
    if (currentState < textStates.length - 1) {
      setCurrentState(prev => prev + 1);
    } else {
      navigate('/next-page');
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(../src/img/Leonardo_Phoenix_10_Create_a_2D_pixel_art_background_inspired_0.jpg)',
          opacity: 0.96,
        }}
      />

      {/* GIF Animation Container */}
      <div 
  className="absolute top-1/2 right-64 transform -translate-y-1/2 w-[800px] h-[600px] z-20 rounded-lg overflow-hidden"
  
      >
        <img 
          src={'../src/img/05221-ezgif.com-video-to-gif-converter.gif'}
          alt="Animation"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-green-900 opacity-50" />

      {/* Bulle de dialogue */}
      <div 
        className="absolute bottom-8 left-24 w-1/2 h-1/2 z-20" 
        style={{
          backgroundImage: 'url(../src/img/Leonardo_Phoenix_10_Create_a_2D_pixel_art_speech_bubble_in_the_3.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer" onClick={handleClick}>
          <div className="text-center">
            <div className="animate-fade-in" key={currentState}>
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
@keyframes typing {
  from { width: 0; opacity: 0; }
  to { width: 100%; opacity: 1; }
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
  white-space: nowrap;
  animation: typing 1s steps(20, end);
  margin: 0 auto;
}

.typing-text-delayed {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 1s steps(30, end) 1s;
  margin: 0 auto;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}
`;

// Ajout du style dans le head du document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default AnimationSection; 