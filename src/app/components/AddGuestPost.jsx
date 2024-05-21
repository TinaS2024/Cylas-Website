"use-server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addGuestPost()
{
    const newPost = await prisma.gast.create(
        {
            data:
            {
                name: "Gerald",
                nachricht: "Hallo !",
            },
        }
    );
    console.log({newPost});
}

addGuestPost()
.catch((e) => {
    throw e;
})
.finally(async () =>
{
    await prisma.$disconnect();
});


