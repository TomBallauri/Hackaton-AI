import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <StatsSection />
    </main>
  );
};

export default HomePage;