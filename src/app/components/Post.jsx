import Guestbook_entry from "./Guestbook_entry"

function Post({id, erstellungsdatum, name, nachricht})
{
    return(
        <div style={{display:"flex",flexFlow:"row", flexWrap:"wrap"}}>
            <Guestbook_entry ID={id} fullName={name} Message={nachricht} Datum={erstellungsdatum}/>
        </div>
    )
}

export default Post;