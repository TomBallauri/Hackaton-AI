import React, { useState, useEffect } from 'react';
import { Leaf, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
interface TextState {
  title: string;
  subtitle: string;
}

interface HeroSectionProps {
  textStates: TextState[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  textStates = [
    {
      title: "Bienvenue !",
      subtitle: "Je suis EcoBoy"
    },
    {
      title: "Le saviez-vous ?",
      subtitle: "Chaque année, un Français produit en "
    },
    {
      title: "",
      subtitle: "moyenne 530 kg de déchets ménagers"
    },
    {
      title: "",
      subtitle: "30 % des déchets qu’on jette dans les "
    },
    {
      title: "",
      subtitle: "ordures ménagères pourraient en réalité être recyclés."
    },
        {
      title: "",
      subtitle: "Parce que oui, incinérer une tonne de déchets"
    },
        {
      title: "",
      subtitle: "c’est 271 kg de CO₂ dans l’atmosphère…"
    },
    {
      title: "",
      subtitle: "Alors que recycler une tonne de papier"
    },
    {
      title: "",
      subtitle: "c’est 17 arbres sauvés et 2 500 litres d’eau économisés."
    },
    {
      title: "",
      subtitle: "Alors, prêt à devenir un pro du tri ?"
    },
    {
      title: "",
      subtitle: "C’est parti pour le jeu ! "
    },

  ]
}) => {
  const [currentState, setCurrentState] = useState(0);
  const [showClickIndicator, setShowClickIndicator] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowClickIndicator(false);
    const timer = setTimeout(() => {
      setShowClickIndicator(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const handleClick = () => {
    if (currentState < textStates.length - 1) {
      setCurrentState(prev => prev + 1);
    } else {
      navigate('/about');
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:"url(/image/Leonardo_Phoenix_10_Create_a_2D_pixel_art_background_inspired_0.jpg)",
          opacity: 0.96,
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-green-900 opacity-50">
      </div>
      <div className="absolute top-8 left-24 w-1/3 h-1/3 z-20" style={{
          backgroundImage:
            'url(../src/img/Leonardo_Phoenix_10_Create_a_2D_pixel_art_speech_bubble_in_the_3.png',
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
      <div className='absolute h-screen w-screen flex items-end justify-end z-10 animate-float' style={{
          backgroundImage:
            'url(../src/img/ChatGPT_Image_22_mai_2025__11_50_29-removebg-preview.png)', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}></div>
    </section>
  );
};

// Ajout des styles d'animation personnalisés
const styles = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes typing {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) rotate(90deg);
  }
}

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(20, end);
  margin: 0 auto;
}

.typing-text-delayed {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(30, end) 2s;
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
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HeroSection;