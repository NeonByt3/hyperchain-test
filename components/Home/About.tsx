"use client";

import { FaFingerprint, FaUserCheck, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          Identity Uniqueness
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Ensure that every participant is a real, unique human being — without storing personal data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaFingerprint className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Biometric Proof</h3>
            <p className="text-sm text-gray-400">
              Zero-knowledge biometrics confirm your uniqueness without revealing your identity.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaUserCheck className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">One Human = One ID</h3>
            <p className="text-sm text-gray-400">
              World ID guarantees each wallet is tied to a single real person, not a bot.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaShieldAlt className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
            <p className="text-sm text-gray-400">
              Built with privacy at the core — no tracking, no identity leakage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
