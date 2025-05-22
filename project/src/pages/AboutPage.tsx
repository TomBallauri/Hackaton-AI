import React from 'react';
import InfoSection from '../components/about/InfoSection';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24">
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">À Propos de CycleQuest</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez tout ce qu'il y a à savoir sur notre expérience de cyclisme virtuel immersive.
          </p>
        </div>
      </div>
      
      <InfoSection />
    </main>
  );
};

export default AboutPage;