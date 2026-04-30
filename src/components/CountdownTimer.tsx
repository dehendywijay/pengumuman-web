"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
  onComplete: () => void;
}

export default function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        setIsExpired(true);
        onComplete();
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (isExpired) return null;

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center font-mono">
      <TimeUnit value={timeLeft.days} label="HARI" />
      <TimeUnit value={timeLeft.hours} label="JAM" />
      <TimeUnit value={timeLeft.minutes} label="MENIT" />
      <TimeUnit value={timeLeft.seconds} label="DETIK" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative glass h-16 w-16 md:h-24 md:w-24 rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-2xl md:text-5xl font-bold neon-text text-accent"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <span className="mt-2 text-[10px] md:text-xs tracking-[0.2em] text-white/40 font-sans font-medium">
        {label}
      </span>
    </div>
  );
}
