import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-hero-gradient text-white py-20 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4 font-inter">
        PredictPro — Next-Gen Prediction Platform
      </h1>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        Unlock premium, accurate predictors for Apple, Aviator, Gems, Crash, and Sure Odds. Fast, reliable, and powered by advanced data analytics.
      </p>
      <a
        href="#features"
        className="inline-block bg-white text-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-gray-100 transition"
      >
        Explore Features
      </a>
    </section>
  );
}