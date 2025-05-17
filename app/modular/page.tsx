"use client";

import { FaRocket, FaCogs, FaBolt } from "react-icons/fa";

export default function ModularHyperchainPage() {
  return (
    <main className="bg-gradient-to-b from-black to-gray-950 text-white min-h-screen px-6 pt-24 pb-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Built for Modular Hyperchains
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Our integration is designed to run seamlessly in modular blockchain environments,
          ensuring optimal performance, scalability, and compatibility with emerging ZK infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fast Execution */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaRocket className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Optimized Throughput</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Built for low-latency environments with high TPS requirements. Perfect for apps running in optimistic or ZK rollup setups.
            </p>
          </div>

          {/* Modular Architecture */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaCogs className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Modular Interoperability</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Plug into any execution layer, data availability layer, or settlement layer—no tight coupling, full composability.
            </p>
          </div>

          {/* ZK Proof Compatibility */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaBolt className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">ZK-Ready Framework</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Compatible with zkSNARKs and zk-STARKs for secure, trustless verification of identity and actions across chains.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
