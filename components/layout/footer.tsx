"use client";

import React, { Suspense } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const links = {
  github: "https://github.com/RyanAwex",
  linkedin: "https://www.linkedin.com/in/rayane-sefiani-13271b332/",
  email: "mailto:rayanesefiani.dev@gmail.com",
};

const CopyrightYear = () => {
  return <>{new Date().getFullYear()}</>;
};

export const Footer = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-slate-800/50 mt-10">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={links.email}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
      <p className="text-slate-500 font-mono text-sm">
        &copy;{" "}
        <Suspense fallback={2026}>
          <CopyrightYear />
        </Suspense>{" "}
        Rayane Sefiani. All rights reserved.
      </p>
    </footer>
  );
};
