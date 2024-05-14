const ProduktDetails = ({ params }) =>
{
return(

    <h1>Produktdetails: {params.id}</h1>
    
)
}

export default ProduktDetails;

//Hinweis:Ordner von dynamischen Routen muss eckige Klammer haben.
//Rootseite muss immer page heißen