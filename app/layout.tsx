import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AIChat } from "@/components/layout/ai-chat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Awex | Full-Stack Developer & Software Engineer",
  description: "Explore the portfolio of Ryan Awex, a Full-Stack Developer and Software Engineer specializing in building modern web applications, high-performance user interfaces, and interactive experiences with Next.js, React, and TypeScript.",
  keywords: ["Ryan Awex", "Software Engineer", "Full-Stack Developer", "Next.js Developer", "React Portfolio"],
  authors: [{ name: "Ryan Awex" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AIChat />
      </body>
    </html>
  );
}
