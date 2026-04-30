"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  disabled: boolean;
  onLoginSuccess: (studentData: any) => void;
}

export default function LoginForm({ disabled, onLoginSuccess }: LoginFormProps) {
  const [nis, setNis] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nis, password }),
      });

      const data = await res.json();

      if (res.ok) {
        onLoginSuccess(data.student);
      } else {
        setError(data.message || "NIS atau Password salah");
      }
    } catch (err) {
      setError("Terjadi kesalahan sistem. Coba lagi nanti.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "glass w-full max-w-md p-8 rounded-2xl relative transition-all duration-500",
        disabled ? "opacity-50 grayscale pointer-events-none scale-95" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 neon-border">
          <Lock className="text-accent h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold tracking-tight">Login Siswa</h2>
        <p className="text-white/50 text-sm">Masukkan NIS Anda untuk melihat hasil</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-medium text-white/60 ml-1">USERNAME (NIS)</label>
          <div className="relative group">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30 group-focus-within:text-accent transition-colors" />
            <input
              type="text"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
              placeholder="Contoh: 12345"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white placeholder:text-white/20"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-white/60 ml-1">PASSWORD (NIS)</label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30 group-focus-within:text-accent transition-colors" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white placeholder:text-white/20"
              required
            />
          </div>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="p-3 rounded-lg bg-error/10 border border-error/20 text-error text-xs flex items-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-error" />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={isLoading || disabled}
          className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 group"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              MASUK KE PORTAL
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-2xl z-10">
          <p className="text-white font-medium text-sm px-6 py-2 glass rounded-full border-white/20">
            Menunggu Waktu Pengumuman
          </p>
        </div>
      )}
    </motion.div>
  );
}
