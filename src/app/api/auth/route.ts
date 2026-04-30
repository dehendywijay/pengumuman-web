import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Target date: 2026-05-01T00:00:00 (Example)
// src/app/api/auth/route.ts
// src/app/api/auth/route.ts
const TARGET_DATE = new Date("2024-01-01T00:00:00").getTime();



export async function POST(req: Request) {
  try {
    const { nis, password } = await req.json();

    // 1. Security Check: Validate time
    const currentTime = new Date().getTime();
    if (currentTime < TARGET_DATE) {
      return NextResponse.json(
        { message: "Akses ditolak. Pengumuman belum dibuka." },
        { status: 403 }
      );
    }

    // 2. Authentication Check
    // Password is the same as NIS as per PRD
    if (nis !== password) {
      return NextResponse.json(
        { message: "NIS atau Password salah." },
        { status: 401 }
      );
    }

    const student = await prisma.student.findUnique({
      where: { nis },
    });

    if (!student) {
      return NextResponse.json(
        { message: "Data siswa tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Login berhasil",
      student: {
        name: student.name,
        nis: student.nis,
        isPassed: student.isPassed,
      },
    });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan internal." },
      { status: 500 }
    );
  }
}
