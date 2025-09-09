import Gaestebuch from "../components/Gaestebuch.jsx";
import Post from "../components/Post.jsx";
import { Suspense } from "react";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

//eslint-disable-next-line
const prisma = new PrismaClient().$extends(withAccelerate());

async function Gaestebuch_ausgabe()
    {
        const allGuests = await prisma.gast.findMany()
          
    return(
        <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>
            <Suspense><Gaestebuch/>
            {
                allGuests.map(guest =>
                    <>
                    <Post id={guest.id} name={guest.name} nachricht={guest.nachricht} erstellungsdatum={guest.erstellungsdatum.toLocaleDateString()}/>
                    </>
                )
            }
          
            </Suspense>    
            </div>
        </div>
);
}

export default Gaestebuch_ausgabe;

