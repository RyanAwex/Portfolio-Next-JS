"use client";
import { useMousePosition } from "@/hooks/use-mouse-position";

export const BackgroundVFX = () => {
  const mousePos = useMousePosition();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .glass-panel {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          /* border removed to eliminate outline */
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }
        .bg-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scanline {
          position: fixed;
          top: 0; left: 0; right: 0; height: 10vh;
          background: linear-gradient(to bottom, transparent, rgba(34,211,238,0.05), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 50;
        }
      `,
        }}
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.07), transparent 40%)`,
        }}
      />
      <div className="scanline" />
    </>
  );
};
