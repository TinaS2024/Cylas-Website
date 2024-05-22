
const Guestbook_entry = (props) =>
    {
            const {fullName, Message, Datum, ID} = props
      return(
        <div style={{display:"flex",justifyContent:"right",flexWrap:"wrap"}}>
            <div className="guestbook">
                <p style={{textAlign:"left"}}>Von:&nbsp;{fullName}</p>
                <p style={{textAlign:"left"}}>Am:&nbsp;{Datum}</p>
                {Message}
                </div>
        </div>
      )
    }

export default Guestbook_entry;