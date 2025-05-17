"use client";

import { FaTachometerAlt, FaClock, FaServer } from "react-icons/fa";

export default function BlazingFastPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 pt-24 pb-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Blazing Fast Performance
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Engineered for ultra-low latency and high throughput in ZK-enabled modular chains.
          Every interaction is instant, verifiable, and scalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Instant Verification */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaTachometerAlt className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Verification</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Zero-knowledge proof validation completes in milliseconds, enabling seamless user experience across modules.
            </p>
          </div>

          {/* Low Latency */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaClock className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Low-Latency Stack</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tuned for sub-second response times across execution and verification layers. Say goodbye to sluggish UX.
            </p>
          </div>

          {/* Scalable Infra */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaServer className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalable Infra</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Designed to scale with your app—from testnet experiments to mainnet mass adoption without performance loss.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
