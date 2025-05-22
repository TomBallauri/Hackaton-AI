import React from 'react';
import Card from '../ui/Card';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">À Propos de CycleQuest</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              CycleQuest est une expérience de cyclisme virtuel immersive qui vous permet de personnaliser votre vélo
              et de participer à des défis passionnants. Notre objectif est de vous offrir une simulation réaliste
              et divertissante du cyclisme, que vous soyez un cycliste occasionnel ou un passionné de vélo.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Notre Histoire</h3>
            <p>
              CycleQuest a été fondé en 2023 par une équipe de développeurs passionnés de cyclisme. Frustrés par
              le manque d'options de personnalisation dans les jeux de cyclisme existants, ils ont décidé de créer
              leur propre expérience de cyclisme virtuel, où la personnalisation et la créativité seraient au cœur du jeu.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Comment Jouer</h3>
            <p>
              Jouer à CycleQuest est simple et intuitif :
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Personnalisez votre vélo en faisant glisser les composants sur le canevas.</li>
              <li>Ajustez la position des composants pour créer un vélo unique.</li>
              <li>Testez votre création dans différents environnements et défis.</li>
              <li>Collectez des points pour débloquer de nouveaux composants et améliorations.</li>
              <li>Participez à des compétitions mondiales et mesurez-vous aux meilleurs cyclistes virtuels.</li>
            </ol>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Avantages de CycleQuest</h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-900">
                <li>Une expérience de cyclisme virtuel immersive et réaliste</li>
                <li>Des options de personnalisation infinies pour votre vélo</li>
                <li>Des défis quotidiens et des compétitions mondiales</li>
                <li>Une physique réaliste qui simule les conditions de cyclisme réelles</li>
                <li>Une communauté active et passionnée de cyclistes virtuels</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cyclisme de montagne" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Terrain Varié</h3>
                <p className="text-gray-600">
                  Explorez des paysages magnifiques et relevez des défis sur différents types de terrain,
                  des routes pavées aux sentiers de montagne.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Compétition cycliste" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Compétitions</h3>
                <p className="text-gray-600">
                  Participez à des compétitions mondiales et mesurez-vous aux meilleurs cyclistes du monde.
                  Grimpez dans le classement et gagnez des récompenses exclusives.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;