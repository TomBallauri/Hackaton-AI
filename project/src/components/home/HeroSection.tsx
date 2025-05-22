import React from 'react';
import { Leaf, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1600)', // forêt verte
          opacity: 0.18,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-green-900 animate-fadeIn">
              Pédalez pour <span className="text-green-600">la Planète</span> <Leaf className="inline ml-2 text-green-500" size={36} />
              <br />
              Agissez pour l'Écologie
            </h1>

            <p className="text-lg md:text-xl text-green-800 max-w-lg">
              CycleQuest vous invite à explorer le monde à vélo tout en adoptant des gestes écoresponsables. Relevez des défis écologiques, personnalisez votre vélo vert et contribuez à la préservation de notre environnement.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/game">
                <Button variant="primary" size="lg" className="bg-green-600 hover:bg-green-700 border-green-700">
                  Commencer l’aventure <ChevronRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
                  Notre engagement
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.pexels.com/photos/2887792/pexels-photo-2887792.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Vélo écologique"
              className="rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-green-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;