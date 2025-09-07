import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCard';
import TrustSignals from '../components/TrustSignals';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <TrustSignals />
    </main>
  );
}