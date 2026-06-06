"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
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
    { name: "ABOUT", href: "#about", icon: User },
    { name: "SKILLS", href: "#skills", icon: Code },
    { name: "PROJECTS", href: "#projects", icon: Briefcase },
    { name: "CONTACT", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 ${scrolled ? "pt-4 md:pt-6" : "pt-6"}`}
    >
      <div
        className={`w-full flex justify-between items-center px-6 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-900/70 backdrop-blur-md border border-white/15 shadow-2xl py-3 rounded-full"
            : "py-4 bg-transparent border border-transparent"
        }`}
        style={{ maxWidth: scrolled ? "896px" : "100%" }}
      >
        <Link
          href="#hero"
          className="text-lg font-bold tracking-tight flex items-center gap-2 z-50 relative"
        >
          <div
            className={`rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              scrolled
                ? "w-8 h-8 bg-zinc-900 border border-zinc-800"
                : "w-8 h-8 bg-transparent border border-transparent"
            }`}
          >
            <img
              src="/logo.png"
              alt="Ryan.Awex Logo"
              className={`object-contain opacity-90 transition-all duration-300 ${
                scrolled ? "w-4 h-4" : "w-8 h-8"
              }`}
            />
          </div>
          <span className="text-white tracking-wide font-medium">
            Ryan.Awex
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-wider text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden relative z-50 text-zinc-400 hover:text-white transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-0 scale-75 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[300px] z-50 bg-zinc-950/90 backdrop-blur-2xl border-l border-white/10 flex flex-col justify-between p-6 shadow-[-10px_0_50px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Ryan.Awex Logo"
                  className="w-4 h-4 object-contain opacity-90"
                />
              </div>
              <span className="text-white tracking-wide font-medium text-sm">
                Ryan.Awex
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold tracking-wide">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer info & Socials */}
        <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
          {/* Status Indicator */}
          <div className="flex items-center gap-2.5 px-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
              Available for Freelance & Roles
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/RyanAwex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ryan-awex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white text-xs font-semibold transition-all duration-200"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
