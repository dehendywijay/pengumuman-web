"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FileText, Download, ShieldCheck, GraduationCap } from "lucide-react";
import RevealPage from "../components/RevealPage";
import CountdownTimer from "../components/CountdownTimer";
import LoginForm from "../components/LoginForm";

// Target date for the announcement
// src/app/page.tsx
const TARGET_DATE = "2025-05-04T17:00:00";

export default function Home() {
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [studentData, setStudentData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Initial check
    setIsTimeUp(new Date() >= new Date(TARGET_DATE));
  }, []);

  if (!mounted) return null;

  if (studentData) {
    return (
      <RevealPage student={studentData} onBack={() => setStudentData(null)} />
    );
  }

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-bg opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center gap-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/10 mb-2">
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/70 uppercase">
              SMAN 1 BANGUNREJO
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
            PENGUMUMAN <br />
            <span className="text-accent neon-text">KELULUSAN 2026</span>
          </h1>
          <p className="text-white/40 max-w-lg mx-auto text-sm md:text-base">
            Portal resmi pengumuman kelulusan SMA Negeri 1 Bangunrejo. Gunakan
            NIPD Anda untuk mengakses informasi hasil akhir.
          </p>
        </motion.div>

        {/* Timer Section */}
        {!isTimeUp ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase">
              Waktu Menuju Pengumuman
            </p>
            <CountdownTimer
              targetDate={TARGET_DATE}
              onComplete={() => setIsTimeUp(true)}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4 px-8 glass rounded-2xl border-success/30 flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
            <span className="text-success font-bold tracking-widest uppercase text-sm">
              SISTEM PENGUMUMAN TELAH DIBUKA
            </span>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          {/* Left: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-3xl space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <GraduationCap className="h-8 w-8 text-white/70" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Informasi Penting</h3>
                <p className="text-white/40 text-sm">SMA Negeri 1 Bangunrejo (SMANSABARE)</p>
              </div>
            </div>

            <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
              <p>
                PENGAMBILAN SKL (Surat Keterangan Lulus) dapat dilakukan mulai
                Kamis 7 Mei 2026. Dengan catatan sudah dinyatakan Lulus
              </p>
              <div className="p-4 bg-white/5 rounded-xl border-l-4 border-accent">
                <p className="italic text-white/60 text-xs md:text-sm">
                  "Kelulusan adalah awal dari perjalanan baru. Tetaplah rendah
                  hati dan teruslah bermimpi."
                  <br />- Kepala Sekolah SMAN 1 Bangunrejo
                </p>
              </div>
            </div>

            <button
              className="w-full glass hover:bg-white/5 border border-white/10 text-white font-bold 
              py-3 sm:py-4 px-4 
              rounded-xl flex items-center justify-center gap-2 sm:gap-3 
              text-sm sm:text-base 
              transition-all"
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />

              <span className="text-center leading-tight">
                UNDUH SK KEPALA SEKOLAH
                <span className="block sm:inline"> (PDF)</span>
              </span>

              <Download className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            </button>
          </motion.div>

          {/* Right: Login Form */}
          <div className="flex justify-center lg:justify-end">
            <LoginForm
              disabled={!isTimeUp}
              onLoginSuccess={(student) => setStudentData(student)}
            />
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full flex justify-between items-center py-8 border-t border-white/5 text-white/20 text-[10px] md:text-xs"
        >
          <p>© 2026 IT SMANSA. All Rights Reserved.</p>
        </motion.footer>
      </div>
    </main>
  );
}
