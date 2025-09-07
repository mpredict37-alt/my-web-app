import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-hero-gradient min-h-[60vh] flex flex-col justify-center items-center text-white py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Professional Prediction Platform.
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl text-center opacity-90">
        Get accurate predictions for Apple, Aviator, Gems, Crash, and Sure Odds.
      </p>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-primary border-2 border-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-secondary transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}