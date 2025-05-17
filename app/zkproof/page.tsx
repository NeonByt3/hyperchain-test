"use client";

import { FaLock, FaProjectDiagram, FaCheckCircle } from "react-icons/fa";

export default function ZKProofCompatiblePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 pt-24 pb-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          ZK-Proof Compatible
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Fully integrated with zero-knowledge technology to deliver verifiable, secure, and privacy-preserving validation processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Privacy First */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaLock className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Validate identity and actions without revealing sensitive data. Your users stay anonymous, your dapp stays compliant.
            </p>
          </div>

          {/* Modular Verification */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaProjectDiagram className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modular Verification</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Compatible with any zk-SNARK/zk-STARK system. Plug it into your pipeline without friction.
            </p>
          </div>

          {/* Auditable & Secure */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition">
            <FaCheckCircle className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Auditable by Design</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              All proofs are verifiable on-chain or off-chain with open tooling for audits, transparency, and trust.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
