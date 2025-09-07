import React from 'react';

const features = [
  {
    name: "Apple Predictor",
    desc: "Accurate, data-driven Apple predictions.",
    color: "bg-gradient-to-r from-primary to-secondary",
    icon: "🍏",
  },
  {
    name: "Aviator Predictor",
    desc: "Flight-themed, high-accuracy predictions.",
    color: "bg-blue-500",
    icon: "✈️",
  },
  {
    name: "Gems Predictor 💎",
    desc: "Luxury picks for premium users.",
    color: "bg-purple-500",
    icon: "💎",
  },
  {
    name: "Crash Predictor",
    desc: "Excitement and rapid predictions.",
    color: "bg-red-500",
    icon: "🚨",
  },
  {
    name: "Sure Odds",
    desc: "Success-focused, green-flagged odds.",
    color: "bg-green-500",
    icon: "✅",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">Our Predictors</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map(f => (
          <div
            key={f.name}
            className={`w-64 p-6 rounded-xl shadow-md hover:scale-105 transition-transform ${f.color} text-white flex flex-col items-center`}
          >
            <span className="text-4xl mb-3">{f.icon}</span>
            <h3 className="font-semibold text-xl mb-2">{f.name}</h3>
            <p className="text-sm opacity-90 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}