import React, { useState, useEffect } from 'react';
import { Leaf, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';

interface TextState {
  title: string;
  subtitle: string;
}

interface InstructionProps {
  textStates: TextState[];
}

const Instruction: React.FC<InstructionProps> = ({
  textStates = [
    {
      title: "Bienvenue !",
      subtitle: "Je suis EcoBoy"
    },
    {
      title: "Cliquez pour continuer",
      subtitle: "Je suis là pour vous aider"
    },
    {
      title: "Découvrez nos services",
      subtitle: "Nous avons beaucoup à vous offrir"
    }
  ]
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
      navigate('/game');
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(../src/img/Leonardo_Phoenix_10_Create_a_2D_pixel_art_background_inspired_0.jpg)',
          opacity: 0.96,
        }}
      />

      <div 
        className="absolute top-8 left-72 w-[500px] h-[500px] z-20 bg-white rounded-lg" 
        style={{
          backgroundImage: 'url(../src/img/pj8KDG2jRz4AAAAASUVORK5CYII.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-green-900 opacity-50" />

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

      <div 
        className='absolute h-screen w-screen flex items-end justify-end z-10 animate-float' 
        style={{
          backgroundImage: 'url(../src/img/ChatGPT_Image_22_mai_2025__11_50_29-removebg-preview.png)',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          transform: 'translateX(-5%) translateY(-5%)'
        }}
      />
    </section>
  );
};

// Styles d'animation
const styles = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

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

.animate-float {
  animation: float 2s ease-in-out infinite;
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

export default Instruction;