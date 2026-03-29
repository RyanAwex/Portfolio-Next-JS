"use client";
import React, { useState, useEffect } from "react";
import { Cpu, Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-panel py-3" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="#hero"
          className="text-xl font-bold tracking-tighter flex items-center gap-2 z-50 relative"
        >
          <Cpu className="text-cyan-400 w-6 h-6 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            RS.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wider text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden relative z-50 text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed min-h-screen inset-0 top-0 left-0 right-0 bottom-0 z-40 ${scrolled ? "bg-slate-950/98 backdrop-blur-2xl" : "backdrop-blur-2xl"}`}
        >
          <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
