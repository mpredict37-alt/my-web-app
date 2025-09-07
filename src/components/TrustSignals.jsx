import React from 'react';

const signals = [
  {
    icon: '⭐',
    label: 'Top-rated by 10,000+ users',
  },
  {
    icon: '🔒',
    label: 'Secure & Private',
  },
  {
    icon: '🚀',
    label: 'Lightning-fast AI predictions',
  },
  {
    icon: '💬',
    label: '24/7 Support',
  },
];

export default function TrustSignals() {
  return (
    <section className="py-10 bg-white">
      <div className="flex flex-wrap justify-center gap-8">
        {signals.map((s, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-3xl">{s.icon}</span>
            <span className="font-semibold text-gray-600">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}