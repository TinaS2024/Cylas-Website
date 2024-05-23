
const Guestbook_entry = (props) =>
    {
            const {fullName, Message, Datum, ID} = props
      return(
        <div style={{display:"flex",justifyContent:"right",flexWrap:"wrap"}}>
            <div className="guestbook">
                <p style={{textAlign:"left"}}><span>Von:</span>&nbsp;{fullName}</p>
                <p style={{textAlign:"left"}}><span>Am:</span>&nbsp;{Datum}</p>
                <br />
                 {Message}
                </div>
        </div>
      )
    }

export default Guestbook_entry;