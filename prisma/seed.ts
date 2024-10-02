import { PrismaClient } from "@prisma/client";
const primsa = new PrismaClient();
async function main () {
    const response = await primsa.thought.deleteMany({});
}
main();