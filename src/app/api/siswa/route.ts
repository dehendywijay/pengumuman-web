import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const POST = async (req : NextRequest) => {
    try {
        const body = await req.json();
        const { nisn, password } = body;

        if (!nisn || !password) {
            return new Response(JSON.stringify({ error: "NISN dan password wajib diisi" }), {
                status: 400,
            });
        }
        if (password !== nisn) {
            return new Response(JSON.stringify({ error: "Password salah" }), {
                status: 401,
            });
        }
        const res = await prisma.pengumuman.findFirst({
            where: {
                nipd: nisn,
            },
            select: {
                nipd: true,
                nama: true,
                kelas: true,
            }
        });
    
        return new Response(JSON.stringify(res), {
            status: 200,
        });
    } catch (error) {
        console.error("Error fetching student data:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
        });
    }
}