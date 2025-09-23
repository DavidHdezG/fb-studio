"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface ITypewriterEffectProps {
  text: string;
  className?: string;
}

export default function TypewriterEffect({ text, className }: ITypewriterEffectProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * 0.05,
      ease: "linear",
    });
    return controls.stop;
  }, [text.length, count]);

  return (
    <motion.p className={className}>
      {displayText}
    </motion.p>
  );
}
