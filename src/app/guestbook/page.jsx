import Gästebuch from "../components/Gästebuch.jsx";
import Post from "../components/Post.jsx";
import { Suspense } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function Gästebuch_Server()
    {
        const allGuests = await prisma.gast.findMany()
          
    return(
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>
            <Suspense><Gästebuch/>
            {
                allGuests.map(guest =>
                    <>
                    <Post id={guest.id} name={guest.name} nachricht={guest.nachricht} erstellungsdatum={guest.erstellungsdatum.toLocaleDateString()}/>
                    </>
                )
            }
          
            </Suspense>    
            </div>
);
}

export default Gästebuch_Server;

