"use client";

import { FaRocket, FaCogs, FaBolt } from "react-icons/fa";

export default function HyperchainReady() {
  return (
    <section id="hyperchain" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          Hyperchain Ready
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12">
          Optimized to scale with next-gen ZK rollups and modular architectures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaRocket className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
            <p className="text-sm text-gray-400">
              Designed for low-latency execution in high-throughput environments.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaCogs className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Modular by Design</h3>
            <p className="text-sm text-gray-400">
              Easily integrated into any L2/L3 stack thanks to modular architecture.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaBolt className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">ZK-Proof Compatible</h3>
            <p className="text-sm text-gray-400">
              Built with futureproof zero-knowledge tech to ensure verifiability at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
