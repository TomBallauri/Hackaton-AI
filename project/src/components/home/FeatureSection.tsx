import React from 'react';
import { Settings, Calendar, Globe, Activity } from 'lucide-react';
import Card from '../ui/Card';
import { features } from '../../data/features';

const FeatureSection: React.FC = () => {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Settings':
        return <Settings size={40} className="text-blue-600" />;
      case 'Calendar':
        return <Calendar size={40} className="text-orange-500" />;
      case 'Globe':
        return <Globe size={40} className="text-green-500" />;
      case 'Activity':
        return <Activity size={40} className="text-purple-500" />;
      default:
        return <Settings size={40} className="text-blue-600" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Caractéristiques du Jeu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les fonctionnalités qui font de CycleQuest l'expérience de cyclisme virtuel la plus immersive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} hoverEffect className="p-6">
              <div className="mb-4">
                {getIconComponent(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;