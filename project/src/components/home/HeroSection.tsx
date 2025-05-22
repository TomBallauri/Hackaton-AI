import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/5836198/pexels-photo-5836198.jpeg?auto=compress&cs=tinysrgb&w=1600)', 
          opacity: 0.15
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-fadeIn">
              Personnalisez <span className="text-blue-600">Votre Vélo</span>, <br />
              Défiez le Monde
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              CycleQuest vous offre une expérience de cyclisme virtuel immersive avec des défis passionnants et 
              une personnalisation complète de votre vélo.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/game">
                <Button variant="primary" size="lg">
                  Commencer à jouer <ChevronRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.pexels.com/photos/5465151/pexels-photo-5465151.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Vélo de course" 
              className="rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;