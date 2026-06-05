"use client";
import { useMousePosition } from "@/hooks/use-mouse-position";

export const BackgroundVFX = () => {
  const mousePos = useMousePosition();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .bg-grid {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out 4s infinite;
        }
        @keyframes blob-drift-1 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob-drift-2 {
          0% { transform: translate(0px, 0px) scale(1.2); }
          50% { transform: translate(-50px, -60px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1.2); }
        }
        .animate-blob-1 {
          animation: blob-drift-1 20s ease-in-out infinite;
        }
        .animate-blob-2 {
          animation: blob-drift-2 25s ease-in-out infinite;
        }
      `,
        }}
      />
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 bg-grid pointer-events-none opacity-60" />

      {/* Ambient Mesh Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-zinc-900/10 blur-[120px] animate-blob-1" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-neutral-900/10 blur-[130px] animate-blob-2" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-zinc-800/5 blur-[100px]" />
      </div>

      {/* Mouse Spotlight */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.025), transparent 60%)`,
        }}
      />
    </>
  );
};

