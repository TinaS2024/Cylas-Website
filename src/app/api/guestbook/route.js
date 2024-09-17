import prisma from "@/app/server/prisma";

export async function POST(req)
{
    const {fullName,nachricht} = await req.json() 
    const result = await prisma.gast.create({
        data: {
            name: fullName,
            nachricht: nachricht,
        },
    });

    return Response.json({result},{status:200});
   
}