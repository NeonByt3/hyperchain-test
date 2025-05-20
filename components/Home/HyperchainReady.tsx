"use client";

import Link from "next/link";
import { FaRocket, FaCogs, FaBolt, FaLock, FaCodeBranch, FaTools } from "react-icons/fa";

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
            <Link href="/blazing" className="text-green-400 hover:underline mt-2 block">
              Explore Blazing Fast
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaCogs className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Modular by Design</h3>
            <p className="text-sm text-gray-400">
              Easily integrated into any L2/L3 stack thanks to modular architecture.
            </p>
            <Link href="/modular" className="text-green-400 hover:underline mt-2 block">
              Explore Modular Hyperchains
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaBolt className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">ZK-Proof Compatible</h3>
            <p className="text-sm text-gray-400">
              Built with futureproof zero-knowledge tech to ensure verifiability at scale.
            </p>
            <Link href="/zkproof" className="text-green-400 hover:underline mt-2 block">
              Explore ZK-Proof Compatibility
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaLock className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
            <p className="text-sm text-gray-400">
              All operations adhere to strict security principles to protect identity and data.
            </p>
            <Link href="/secure" className="text-green-400 hover:underline mt-2 block">
              Explore Security Features
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaCodeBranch className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Interoperable</h3>
            <p className="text-sm text-gray-400">
              Works seamlessly across chains and layers with robust signal propagation.
            </p>
            <Link href="/interoperable" className="text-green-400 hover:underline mt-2 block">
              Explore Interoperability
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-green-400 transition">
            <FaTools className="text-green-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
            <p className="text-sm text-gray-400">
              Clear docs, tooling, and support for quick integration in your stack.
            </p>
            <Link href="/developer" className="text-green-400 hover:underline mt-2 block">
              Explore Dev Tooling
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
