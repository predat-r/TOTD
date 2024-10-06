import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
async function main(){
    const done =  await  prisma.like.deleteMany({});
    const done2  = await prisma.thought.updateMany({
     data:{
        likeCount:0
     }
    })
}
main();