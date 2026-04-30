"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Download, Share2, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface RevealPageProps {
  student: {
    name: string;
    nis: string;
    isPassed: boolean;
  };
  onBack: () => void;
}

export default function RevealPage({ student, onBack }: RevealPageProps) {
  const [phase, setPhase] = useState<"scanning" | "decoding" | "reveal">("scanning");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("decoding"), 2500);
    const timer2 = setTimeout(() => setPhase("reveal"), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 glow-bg opacity-30" />
      {student.isPassed && phase === "reveal" && <Confetti />}
      
      <AnimatePresence mode="wait">
        {phase === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-8 relative"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              {/* Scanning UI */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-dashed border-accent/40 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-32 w-32 rounded-full bg-accent/10 blur-xl"
                />
              </div>
              
              {/* Scan Line */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_15px_var(--accent-glow)] z-10"
              />
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-accent font-mono tracking-[0.3em] animate-pulse uppercase">
                Memproses Data Identitas
              </h2>
              <p className="text-white/30 text-sm font-mono">NIS: {student.nis}</p>
            </div>
          </motion.div>
        )}

        {phase === "decoding" && (
          <motion.div
            key="decoding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-1 w-64 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-accent shadow-[0_0_10px_var(--accent-glow)]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs text-white/50"
            >
              MENGKONFIRMASI STATUS KELULUSAN...
            </motion.p>
          </motion.div>
        )}

        {phase === "reveal" && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl px-6 flex flex-col items-center text-center space-y-8"
          >
            {/* Header Reveal */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/40 text-sm tracking-widest uppercase"
              >
                Hasil Pengumuman Resmi
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
              >
                {student.name}
              </motion.h1>
            </div>

            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.8,
              }}
              className={cn(
                "glass w-full py-12 rounded-3xl border-2 flex flex-col items-center gap-6 relative overflow-hidden",
                student.isPassed 
                  ? "border-success/30 shadow-[0_0_50px_rgba(0,255,136,0.15)]" 
                  : "border-error/30 shadow-[0_0_50px_rgba(255,62,62,0.15)]"
              )}
            >
              {/* Status Icon */}
              <div className={cn(
                "h-24 w-24 rounded-full flex items-center justify-center",
                student.isPassed ? "bg-success/10 text-success" : "bg-error/10 text-error"
              )}>
                {student.isPassed 
                  ? <CheckCircle2 className="h-16 w-16 drop-shadow-[0_0_10px_currentColor]" /> 
                  : <XCircle className="h-16 w-16 drop-shadow-[0_0_10px_currentColor]" />
                }
              </div>

              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className={cn(
                    "text-6xl md:text-8xl font-black tracking-tighter",
                    student.isPassed ? "text-success neon-text-success" : "text-error"
                  )}
                >
                  {student.isPassed ? "LULUS" : "TIDAK LULUS"}
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="space-y-1"
                >
                  <p className={cn(
                    "text-lg md:text-xl font-bold tracking-wide uppercase",
                    student.isPassed ? "text-success/80" : "text-error/80"
                  )}>
                    {student.isPassed 
                      ? "Selamat! Kamu Lulus, Semangat Terus! 🎉" 
                      : "Jangan Berkecil Hati, Tetap Semangat! ❤️"
                    }
                  </p>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
                    Tahun Ajaran 2025/2026
                  </p>
                </motion.div>
              </div>

              {/* Background Glow */}
              <div className={cn(
                "absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-full blur-[100px] opacity-20",
                student.isPassed ? "bg-success" : "bg-error"
              )} />
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap justify-center gap-4 w-full"
            >
              {student.isPassed && (
                <button className="flex-1 min-w-[200px] bg-accent text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all active:scale-[0.98]">
                  <Download className="h-5 w-5" />
                  UNDUH SK KELULUSAN (PDF)
                </button>
              )}
              <button 
                onClick={onBack}
                className="flex-1 min-w-[200px] glass text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-[0.98]"
              >
                <LogOut className="h-5 w-5" />
                KELUAR PORTAL
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Confetti() {
  const particles = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: -20, 
            opacity: 1,
            rotate: 0 
          }}
          animate={{ 
            y: "110vh",
            opacity: 0,
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-2 h-2 rounded-sm"
          style={{ 
            backgroundColor: ["#00ff88", "#00f2ff", "#ffffff", "#ffff00"][Math.floor(Math.random() * 4)] 
          }}
        />
      ))}
    </div>
  );
}
