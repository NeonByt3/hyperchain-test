"use client";

import { FaShieldAlt, FaFingerprint, FaNetworkWired } from "react-icons/fa";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center px-6 pt-24 pb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-green-400 text-center mb-4">
        Secure Your Identity with WorldID
      </h1>
      <p className="text-md md:text-lg text-gray-300 text-center max-w-2xl mb-10">
        Verifying proof validation, identity uniqueness, and World ID signals in
        local or testnet Hyperchains just got easier.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-4">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-400 transition">
          <FaShieldAlt className="text-green-400 text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-1">Proof Validation</h3>
          <p className="text-sm text-gray-400">
            Ensure zk proofs are properly handled and validated in your Hyperchain.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-400 transition">
          <FaFingerprint className="text-green-400 text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-1">Identity Uniqueness</h3>
          <p className="text-sm text-gray-400">
            Detect and prevent duplicate identities during verification.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-400 transition">
          <FaNetworkWired className="text-green-400 text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-1">Hyperchain Ready</h3>
          <p className="text-sm text-gray-400">
            Fully compatible with testnet or local Hyperchain environments.
          </p>
        </div>
      </div>
    </section>
  );
}
