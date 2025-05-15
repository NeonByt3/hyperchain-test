"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    const newState = !isOpen;
    setIsOpen(newState);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  function renderLinks() {
    const links = [
      { label: "Home", href: "#home" },
      { label: "Docs", href: "#docs" },
      { label: "Verify", href: "#verify" },
      { label: "Team", href: "#team" }
    ];

    return links.map((link, index) => {
      return (
        <a
          key={index}
          href={link.href}
          onClick={closeMenu}
          className="px-4 py-2 text-sm hover:text-green-400 transition"
        >
          {link.label}
        </a>
      );
    });
  }

  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold tracking-wider text-green-400">
          WorldID Validator
        </span>

        {/* Desktop links */}
        <div className="flex gap-6">
          {renderLinks()}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-2">
          {renderLinks()}
        </div>
      )}
    </nav>
  );
}
