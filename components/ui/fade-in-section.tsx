"use client";
import React from "react";
import { useOnScreen } from "@/hooks/use-on-screen";

export const FadeInSection = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const getTransform = () => {
    if (isVisible) return "translate(0, 0) scale(1)";
    switch (direction) {
      case "up":
        return "translate(0, 50px) scale(0.95)";
      case "down":
        return "translate(0, -50px) scale(0.95)";
      case "left":
        return "translate(-50px, 0) scale(0.95)";
      case "right":
        return "translate(50px, 0) scale(0.95)";
      default:
        return "translate(0, 50px) scale(0.95)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
