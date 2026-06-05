"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, ArrowUp, Sparkles, Cpu, User } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "system";
  text: string;
}

const SUGGESTIONS = [
  { label: "Are you available for freelance?", key: "freelance", desc: "Check current workload & availability" },
  { label: "What is your tech stack?", key: "stack", desc: "View technical stack details" },
  { label: "Can you build a SaaS product?", key: "saas", desc: "Inquire about software capabilities" },
  { label: "How can we book a call?", key: "call", desc: "Schedule a virtual handshake meet" },
];

const PRE_ANSWERS: Record<string, string> = {
  freelance: "Yes! Rayane is currently open to freelance projects, consulting, and full-time contract roles. You can discuss details by dropping an email at rayanesefiani.dev@gmail.com or by filling out the Contact form below.",
  stack: "Rayane is a Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express, MongoDB, and PostgreSQL. He builds clean, modern, and highly responsive user interfaces.",
  saas: "Absolutely! Rayane has experience building scalable SaaS products with user authentication, database design, API integrations, and secure payment layers. He specializes in Vercel/Next.js stacks.",
  call: "The best way to hop on a call is to drop your email in the Contact form at the bottom of the page or email rayanesefiani.dev@gmail.com. He will get back to you within 24 hours to schedule a Google Meet or Zoom call.",
};

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string, key?: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery("");
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "";
      if (key && PRE_ANSWERS[key]) {
        replyText = PRE_ANSWERS[key];
      } else {
        const lower = text.toLowerCase();
        if (lower.includes("freelance") || lower.includes("hire") || lower.includes("job") || lower.includes("work")) {
          replyText = PRE_ANSWERS.freelance;
        } else if (lower.includes("stack") || lower.includes("tech") || lower.includes("use") || lower.includes("language")) {
          replyText = PRE_ANSWERS.stack;
        } else if (lower.includes("saas") || lower.includes("app") || lower.includes("build") || lower.includes("product")) {
          replyText = PRE_ANSWERS.saas;
        } else if (lower.includes("call") || lower.includes("meet") || lower.includes("schedule") || lower.includes("book")) {
          replyText = PRE_ANSWERS.call;
        } else {
          replyText = "Thanks for asking! I'm running in copilot mockup mode right now. For detailed questions or customized proposals, please fill out the Contact form below, and Rayane will email you directly!";
        }
      }

      const systemMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "system",
        text: replyText,
      };

      setMessages((prev) => [...prev, systemMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes chatBubble {
              from { opacity: 0; transform: scale(0.95) translateY(10px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-chat-bubble {
              animation: chatBubble 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_12px_40px_rgba(0,0,0,0.6)] cursor-pointer group"
          title="Ask Rayane's Assistant"
        >
          {isOpen ? (
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[420px] max-w-[calc(100vw-3rem)] z-50 animate-chat-bubble">
          <div className="rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col h-[520px] bg-zinc-950/80 backdrop-blur-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-zinc-950/60 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center border border-white/10 shrink-0">
                  <Cpu className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Rayane's Copilot</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-zinc-400 font-medium">Assistant Online</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Log / Centered Welcome Grid */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-zinc-950/15 flex flex-col">
              
              {messages.length === 0 ? (
                /* Centered Welcome Page & 2x2 Grid when nothing is sent */
                <div className="flex-1 flex flex-col justify-center items-center text-center px-2 py-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                    <Sparkles className="w-5 h-5 text-white/90" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">How can I help you today?</h3>
                  <p className="text-[11px] text-zinc-400 max-w-[280px] leading-relaxed mb-6 font-normal">
                    I'm Rayane's automated copilot. Ask me questions, or select a shortcut below to get started.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 w-full">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => handleSend(s.label, s.key)}
                        className="text-left p-3 bg-zinc-950/40 border border-white/5 hover:border-white/15 rounded-xl hover:bg-white/5 text-zinc-300 transition-all duration-200 h-24 flex flex-col justify-between group cursor-pointer"
                      >
                        <span className="text-[10px] font-medium leading-relaxed group-hover:text-white transition-colors duration-200">
                          {s.label}
                        </span>
                        <span className="text-[8px] font-mono tracking-wider text-zinc-500 uppercase group-hover:text-zinc-350 transition-colors duration-200">
                          {s.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Standard Message Bubbles */
                <div className="space-y-4 w-full flex-1">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 items-start ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                    >
                      {/* Avatar */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold border ${
                        msg.sender === "user" ? "bg-zinc-800 border-zinc-700 text-zinc-300" : "bg-white text-black border-white"
                      }`}>
                        {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                      </div>
                      
                      {/* Text Container */}
                      <div className={`max-w-[75%] rounded-xl p-3 text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-zinc-900 border border-zinc-800 text-white rounded-tr-none"
                          : "bg-zinc-950/60 border border-white/5 text-zinc-200 rounded-tl-none"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 items-start animate-pulse">
                      <div className="w-6 h-6 rounded-full bg-white text-black border border-white flex items-center justify-center shrink-0">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div className="bg-zinc-950/60 border border-white/5 rounded-xl rounded-tl-none p-3 flex gap-1 items-center shrink-0">
                        <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Custom Input Box */}
            <div className="p-3.5 border-t border-white/5 bg-zinc-950/40 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(query);
                }}
                onClick={() => inputRef.current?.focus()}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-4 pr-2 flex items-center gap-2 focus-within:border-zinc-700 transition-colors cursor-text"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none py-3.5 h-full w-full"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isTyping}
                  className={`w-6.5 h-6.5 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                    query.trim() && !isTyping
                      ? "bg-white text-black hover:opacity-90"
                      : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                  }`}
                >
                  <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
