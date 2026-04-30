import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const students = [
    { nis: "12345", name: "Dika Permana", isPassed: true },
    { nis: "67890", name: "Siti Aminah", isPassed: true },
    { nis: "11223", name: "Budi Santoso", isPassed: false },
  ];

  for (const student of students) {
    await prisma.student.upsert({
      where: { nis: student.nis },
      update: {},
      create: student,
    });
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
