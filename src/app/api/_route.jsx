import { prisma } from "../../../server/prisma";

export async function POST(req, res)
{
    const { fullName, nachricht } = req.body
    const result = await prisma.gast.create({
        data: {
            name: fullName,
            nachricht: nachricht,
        },
        
    }
);
console.log(fullName,nachricht)
    res.json(result)
}