import React from 'react';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const features = [
  {
    title: 'Défis Immersifs',
    description:
      'Relevez des défis quotidiens et saisonniers dans des environnements variés, du bitume aux sentiers de montagne.',
    image:
      'https://i.pinimg.com/736x/43/29/dd/4329ddae4a43cbdc4709791d39daedc1.jpg',
  },
  {
    title: 'Communauté Active',
    description:
      'Partagez vos créations, échangez des astuces et participez à des événements communautaires passionnants.',
    image:
      'https://i.pinimg.com/736x/01/46/f3/0146f3f051844a34dc1e39b44d3a4ceb.jpg',
  },
];

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-green-900 mb-4 drop-shadow-md">🚴‍♀️ À Propos de CycleQuest</h2>
          <p className="text-xl text-green-800">
            Une expérience de cyclisme virtuel immersive, où personnalisation, compétition et communauté sont à l’honneur.
          </p>
        </div>

        {/* Bloc à 2 cartes - Notre Histoire / Comment Jouer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden bg-white rounded-2xl border border-green-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cyclisme de montagne"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Notre Histoire</h3>
                <p className="text-green-700">
                Fondé en 2025 par une équipe de 5 passionnés, CycleQuest est né de la volonté d’offrir une expérience unique, centrée sur la créativité et la compétition.
                </p>
            </div>
          </Card>

          <Card className="overflow-hidden bg-white rounded-2xl border border-green-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Compétition cycliste"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Comment Jouer</h3>
              <ol className="list-decimal pl-5 space-y-1 text-green-700">
                <li>Personnalisez votre vélo avec des composants uniques.</li>
                <li>Testez-le dans des environnements variés.</li>
                <li>Relevez des défis et gagnez des points.</li>
                <li>Débloquez de nouveaux éléments et grimpez dans les classements.</li>
              </ol>
            </div>
          </Card>
        </div>

        {/* Grid des points forts */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-green-900 mb-10">✨ Les Points Forts de CycleQuest</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature) => (
              <Card
          key={feature.title}
          className="bg-white border border-green-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-80"
              >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h4>
            <p className="text-green-700 text-sm">{feature.description}</p>
          </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action final */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 rounded-xl bg-green-100 border border-green-200 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-4">🌍 Rejoignez la Communauté CycleQuest !</h3>
            <p className="text-green-800 mb-6">
              Découvrez une nouvelle façon de vivre le cyclisme, partagez vos créations et affrontez des joueurs du monde entier.
            </p>
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="
                  inline-block px-8 py-3
                  bg-gradient-to-r from-green-600 to-green-400
                  text-white font-bold text-lg
                  rounded-full shadow-lg
                  hover:from-green-700 hover:to-green-500
                  hover:scale-105 hover:shadow-2xl
                  transition-all duration-200
                  focus:outline-none focus:ring-4 focus:ring-green-300
                  active:scale-95
                "
              >
                Notre engagement
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
