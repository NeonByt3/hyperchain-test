// app/world-leads/page.tsx
import React from "react";

type Lead = {
  id: string;
  name: string;
  title: string;
  company: string;
  region: string;
};

async function fetchWorldLeads(): Promise<Lead[]> {
  const res = await fetch("https://worlid.f00ds200", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch world leads");
  }

  const data = await res.json();
  return data.leads; 
}

export default async function WorldLeadsPage() {
  const leads = await fetchWorldLeads();

  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-10">
          World Leads
        </h1>
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
      </div>
    </main>
  );
}
