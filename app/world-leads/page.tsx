// app/world-leads/page.tsx
import React, { Suspense } from "react";

// Tipado simple del lead
interface Lead {
  id: string;
  name: string;
  title: string;
  company: string;
  region: string;
}

async function fetchWorldLeads(): Promise<Lead[]> {
  const res = await fetch("https://api.example.com/world-leads", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch world leads");
  }

  const data = await res.json();
  return data.leads;
}

async function LeadsList() {
  const leads = await fetchWorldLeads();

  return (
    <ul className="space-y-6">
      {leads.map((lead) => (
        <li
          key={lead.id}
          className="bg-gray-900 p-4 rounded-xl border border-green-800"
        >
          <p className="text-lg font-semibold">{lead.name}</p>
          <p className="text-gray-400">
            {lead.title} at {lead.company}
          </p>
          <p className="text-sm text-gray-600 italic">{lead.region}</p>
        </li>
      ))}
    </ul>
  );
}

export default function WorldLeadsPage() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-10">
          World Leads
        </h1>
        <Suspense fallback={<p className="text-gray-500">Loading leads...</p>}>
          {/* RSC con streaming */}
          <LeadsList />
        </Suspense>
      </div>
    </main>
  );
}
