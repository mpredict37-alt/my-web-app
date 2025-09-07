import React from 'react';
import { FaLock, FaUserCheck, FaWhatsapp } from 'react-icons/fa';

export default function TrustSignals() {
  return (
    <section className="py-10 bg-white flex flex-wrap justify-center gap-8">
      <div className="flex flex-col items-center">
        <FaLock className="text-primary text-3xl mb-2" />
        <span className="font-bold">Secure Payments</span>
      </div>
      <div className="flex flex-col items-center">
        <FaUserCheck className="text-green text-3xl mb-2" />
        <span className="font-bold">Verified Professionals</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-amber text-3xl mb-2">🔍</span>
        <span className="font-bold">Transparent Bookings</span>
      </div>
      <div className="flex flex-col items-center">
        <FaWhatsapp className="text-green text-3xl mb-2" />
        <span className="font-bold">WhatsApp Support</span>
      </div>
    </section>
  );
}