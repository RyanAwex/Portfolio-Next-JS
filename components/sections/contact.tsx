"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Send, CheckCircle2, RefreshCw } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export const Contact = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const planeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // requestAnimationFrame loop to spawn trail particles following the plane's exact coordinates
  useEffect(() => {
    if (step !== 4) {
      setParticles([]);
      return;
    }

    let active = true;
    const update = () => {
      if (!active) return;

      if (planeRef.current && cardRef.current) {
        const planeRect = planeRef.current.getBoundingClientRect();
        const cardRect = cardRef.current.getBoundingClientRect();
        
        // Coordinates relative to the glass card container
        const x = planeRect.left - cardRect.left + planeRect.width / 2;
        const y = planeRect.top - cardRect.top + planeRect.height / 2;

        setParticles((prev) => {
          // Fade existing particles
          const decayed = prev
            .map((p) => ({ ...p, opacity: p.opacity - 0.016 }))
            .filter((p) => p.opacity > 0);

          // Spawn new particle
          return [
            ...decayed,
            {
              id: Math.random(),
              x,
              y,
              size: Math.random() * 5 + 3,
              opacity: 1.0,
            },
          ];
        });
      } else {
        setParticles((prev) =>
          prev
            .map((p) => ({ ...p, opacity: p.opacity - 0.016 }))
            .filter((p) => p.opacity > 0)
        );
      }

      requestAnimationFrame(update);
    };

    const animFrame = requestAnimationFrame(update);

    // Complete the mock sending after 4.2 seconds (flight animation completes)
    const timeout = setTimeout(() => {
      setStep(5);
    }, 4200);

    return () => {
      active = false;
      cancelAnimationFrame(animFrame);
      clearTimeout(timeout);
    };
  }, [step]);

  const handleNextStep = () => {
    setError("");
    if (step === 1) {
      if (!name.trim()) {
        setError("Please enter your name to proceed.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setError("");
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!message.trim()) {
      setError("Please write a message before sending.");
      return;
    }
    setStep(4);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setStep(1);
  };

  return (
    <section
      id="contact"
      className="w-full py-32 px-6 relative bg-zinc-950/20"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .step-animation {
              animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }

            /* Paper Plane Motion Path Flight Animation */
            @keyframes plane-fly {
              0% {
                offset-distance: 0%;
                opacity: 0;
              }
              4% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                offset-distance: 100%;
                opacity: 0;
              }
            }

            .animate-plane-motion {
              /* Motion path doing circles, curves, straight lines, and shooting off edge */
              offset-path: path('M 288 150 C 450 280, 500 50, 350 50 C 200 50, 150 250, 288 280 C 400 300, 520 120, 420 20 L 200 -80 C 50 -180, -150 -100, -120 100 C -100 250, 100 350, 250 250 C 400 150, 700 -200, 1800 -1200');
              offset-rotate: auto;
              animation: plane-fly 4.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            }
          `,
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection direction="up">
          <span className="text-zinc-500 font-mono text-sm mb-4 block">
            05. What's Next?
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Get In Touch</h2>
          
          <p className="text-zinc-400 text-sm mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
            Have a project in mind or just want to say hi? Fill out this quick conversational form, and let's start a handshake.
          </p>

          <div 
            ref={cardRef}
            className="glass-panel p-8 md:p-12 rounded-2xl max-w-xl mx-auto text-left relative border border-white/5 shadow-2xl min-h-[300px] flex flex-col justify-between"
          >
            
            {/* Real-time Glowing Trail Particles */}
            {step === 4 && particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full pointer-events-none bg-white"
                style={{
                  left: `${p.x}px`,
                  top: `${p.y}px`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  opacity: p.opacity,
                  boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.95), 0 0 20px 4px rgba(255, 255, 255, 0.5)",
                  transform: `translate(-50%, -50%) scale(${p.opacity})`,
                  zIndex: 40,
                }}
              />
            ))}

            {/* Flying Paper Plane Element */}
            {step === 4 && (
              <div 
                ref={planeRef}
                className="absolute w-10 h-10 z-50 pointer-events-none text-white animate-plane-motion flex items-center justify-center"
                style={{
                  left: 0,
                  top: 0,
                  transformOrigin: "center center",
                }}
              >
                {/* Paper plane SVG (pointing right along the X-axis for offset-rotate) */}
                <svg
                  className="w-10 h-10 fill-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.7)]"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            )}

            {/* Step 1: Name Input */}
            {step === 1 && (
              <div className="step-animation flex flex-col justify-between h-full flex-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Step 1 of 3: Introduction</span>
                    <span className="text-xs font-mono text-zinc-400">01/03</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Hello! First, what should I call you?</h3>
                  <div className="pt-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                      className="w-full bg-zinc-950/60 border border-zinc-900 rounded-lg px-4 py-3.5 text-sm text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 transition-all font-normal"
                      placeholder="Your name or company..."
                    />
                    {error && <p className="text-xs text-red-400 mt-2 font-mono">{error}</p>}
                  </div>
                </div>
                
                <div className="pt-8 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="py-2.5 px-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-200 flex items-center gap-1.5 text-xs cursor-pointer"
                  >
                    Continue <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Email Input */}
            {step === 2 && (
              <div className="step-animation flex flex-col justify-between h-full flex-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Step 2 of 3: Contact Details</span>
                    <span className="text-xs font-mono text-zinc-400">02/03</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Nice to meet you, {name}. Where can I reply to you?</h3>
                  <div className="pt-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                      autoFocus
                      className="w-full bg-zinc-950/60 border border-zinc-900 rounded-lg px-4 py-3.5 text-sm text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 transition-all font-normal"
                      placeholder="email@example.com..."
                    />
                    {error && <p className="text-xs text-red-400 mt-2 font-mono">{error}</p>}
                  </div>
                </div>
                
                <div className="pt-8 flex justify-between">
                  <button
                    onClick={handlePrevStep}
                    className="py-2.5 px-4 bg-transparent text-zinc-400 hover:text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-200 flex items-center gap-1.5 text-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="py-2.5 px-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-200 flex items-center gap-1.5 text-xs"
                  >
                    Continue <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Message Textarea */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="step-animation flex flex-col justify-between h-full flex-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Step 3 of 3: Message Payload</span>
                    <span className="text-xs font-mono text-zinc-400">03/03</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">What would you like to discuss, {name}?</h3>
                  <div className="pt-2">
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setError("");
                      }}
                      autoFocus
                      className="w-full bg-zinc-950/60 border border-zinc-900 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 transition-all resize-none font-normal"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                    {error && <p className="text-xs text-red-400 mt-2 font-mono">{error}</p>}
                  </div>
                </div>
                
                <div className="pt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="py-2.5 px-4 bg-transparent text-zinc-400 hover:text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-200 flex items-center gap-1.5 text-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 px-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-200 flex items-center gap-1.5 text-xs"
                  >
                    Send Handshake <Send className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Loading State (Spinner only) */}
            {step === 4 && (
              <div className="step-animation flex flex-col items-center justify-center py-10 text-center flex-1">
                {/* Spinner loading */}
                <div className="relative w-12 h-12 mb-4">
                  <div className="absolute inset-0 rounded-full border-[3px] border-zinc-900" />
                  <div className="absolute inset-0 rounded-full border-[3px] border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                </div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest animate-pulse">
                  Transmitting...
                </p>
              </div>
            )}

            {/* Step 5: Success State */}
            {step === 5 && (
              <div className="step-animation flex flex-col justify-between h-full flex-1 py-4">
                <div className="flex flex-col items-center text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-white mb-5 animate-pulse" />
                  <h3 className="text-xl font-semibold text-white mb-2">Handshake Complete</h3>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                    Transmission successful. Thanks for reaching out, {name}! I will reply to {email} as soon as possible.
                  </p>
                </div>
                
                <div className="pt-8 flex justify-center">
                  <button
                    onClick={resetForm}
                    className="py-2 px-4 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-full text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Send Another Message
                  </button>
                </div>
              </div>
            )}

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
