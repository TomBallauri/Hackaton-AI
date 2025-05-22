import React from 'react';
import { Users, Trophy, Activity } from 'lucide-react';
import { statistics } from '../../data/statistics';

const StatsSection: React.FC = () => {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users size={32} className="text-blue-600" />;
      case 'Trophy':
        return <Trophy size={32} className="text-orange-500" />;
      case 'Activity':
        return <Activity size={32} className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">CycleQuest en Chiffres</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Rejoignez notre communauté mondiale de cyclistes virtuels et relevez des défis passionnants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {getIconComponent(stat.icon)}
              </div>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-blue-100">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;