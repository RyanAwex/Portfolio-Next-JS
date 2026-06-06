"use client";

import React, { Suspense } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const links = {
  github: "https://github.com/RyanAwex",
  linkedin: "https://www.linkedin.com/in/Ryan-sefiani-13271b332/",
  email: "mailto:ryanawex@gmail.com",
};

const CopyrightYear = () => {
  return <>{new Date().getFullYear()}</>;
};

export const Footer = () => {
  return (
    <footer className="w-full py-12 text-center border-t border-zinc-900 mt-20">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={links.email}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
      <p className="text-zinc-650 font-mono text-[10px] tracking-wider uppercase">
        &copy;{" "}
        <Suspense fallback={2026}>
          <CopyrightYear />
        </Suspense>{" "}
        Ryan Awex. All rights reserved.
      </p>
    </footer>
  );
};
