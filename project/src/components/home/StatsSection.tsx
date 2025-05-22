import React from 'react';
import { Leaf, Globe, Recycle } from 'lucide-react';
import { statistics } from '../../data/statistics';

const StatsSection: React.FC = () => {
  // Nouvelle fonction pour les icônes écologiques
  const getEcoIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf size={32} className="text-green-600" />;
      case 'Globe':
        return <Globe size={32} className="text-blue-500" />;
      case 'Recycle':
        return <Recycle size={32} className="text-emerald-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-700 via-green-600 to-green-400 text-white">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">CycleQuest pour la Planète</h2>
        <p className="text-green-100 max-w-2xl mx-auto">
        Ensemble, pédalons pour un avenir plus vert et contribuons à la préservation de notre environnement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {statistics.map((stat) => (
        <div 
          key={stat.id} 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105"
        >
          <div className="flex justify-center mb-4">
          {getEcoIconComponent(stat.icon)}
          </div>
          <p className="text-3xl font-bold mb-2">{stat.value}</p>
          <p className="text-green-100">{stat.title}</p>
        </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default StatsSection;