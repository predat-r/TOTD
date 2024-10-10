import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const done = await prisma.thought.deleteMany({});
  const done2 = await prisma.like.deleteMany({});
}
main();
