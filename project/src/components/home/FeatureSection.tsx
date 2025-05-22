import React from 'react';
import { Leaf, Sun, Droplet, Wind } from 'lucide-react';
import Card from '../ui/Card';

// Nouvelle liste de fonctionnalités axées sur l'écologie
const ecoFeatures = [
  {
    id: 1,
    icon: 'Leaf',
    title: 'Respect de la Nature',
    description: 'CycleQuest encourage des pratiques respectueuses de l’environnement et sensibilise à la préservation des espaces naturels.',
  },
  {
    id: 2,
    icon: 'Sun',
    title: 'Énergie Renouvelable',
    description: 'Le jeu met en avant l’utilisation d’énergies propres et renouvelables pour un avenir plus vert.',
  },
  {
    id: 3,
    icon: 'Droplet',
    title: 'Gestion de l’Eau',
    description: 'Découvrez l’importance de la gestion durable de l’eau à travers des défis et des parcours éducatifs.',
  },
  {
    id: 4,
    icon: 'Wind',
    title: 'Réduction de l’Empreinte Carbone',
    description: 'Participez à des missions visant à réduire les émissions de CO₂ et à adopter des modes de transport écologiques.',
  },
];

// Fonction pour obtenir l’icône écologique appropriée
const getEcoIcon = (iconName: string) => {
  switch (iconName) {
    case 'Leaf':
      return <Leaf size={40} className="text-green-600" />;
    case 'Sun':
      return <Sun size={40} className="text-yellow-500" />;
    case 'Droplet':
      return <Droplet size={40} className="text-blue-400" />;
    case 'Wind':
      return <Wind size={40} className="text-teal-500" />;
    default:
      return <Leaf size={40} className="text-green-600" />;
  }
};

const FeatureSection: React.FC = () => (
  <section className="py-16 bg-green-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Caractéristiques Écologiques</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez comment CycleQuest s’engage pour la planète et sensibilise à l’écologie à travers ses fonctionnalités innovantes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ecoFeatures.map((feature) => (
          <Card key={feature.id} hoverEffect className="p-6">
            <div className="mb-4">
              {getEcoIcon(feature.icon)}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;