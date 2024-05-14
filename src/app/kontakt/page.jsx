'use client'

import Kontakt_Form from "../components/Kontakt_Form";
import { Suspense } from "react"

const Kontakt = () =>
{
    return(
    <>
    <h1>Kontakt</h1>
    <Suspense fallback="Loading...">
        <div style={{display:"flex",justifyContent:"center"}}>
            <Kontakt_Form />
        </div>
    </Suspense>

    </>
    )
    
}

export default Kontakt;

//Formulare https://www.youtube.com/watch?v=AbLAxs-7yl0
//Prisma-Datenbank: https://www.youtube.com/watch?v=FMnlyi60avU Minute 7:13 Uhr