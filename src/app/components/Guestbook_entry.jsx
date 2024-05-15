
const Guestbook_entry = (props) =>
    {
            const {fullName, Message} = props
      return(
        <div style={{display:"flex",justifyContent:"right",flexWrap:"wrap"}}>
            <div className="guestbook">
                <p style={{textAlign:"left"}}>Von:&nbsp;{fullName}</p>
                {Message}
                </div>
        </div>
      )
    }

export default Guestbook_entry;