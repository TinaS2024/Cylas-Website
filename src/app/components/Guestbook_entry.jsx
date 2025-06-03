
const Guestbook_entry = (props) =>
    {
            const {fullName, Message, Datum, ID} = props
      return(
        <div style={{display:"flex",justifyContent:"right",flexWrap:"wrap",marginTop:"50px"}}>
            <div className="guestbook">
                <p style={{fontSize:"14px",textAlign:"left"}}><span style={{color:"#0f4252"}}>Von&nbsp;{fullName}</span></p>
                <p style={{fontSize:"14px",textAlign:"left"}}><span style={{color:"#0f4252"}}>am&nbsp;{Datum}&nbsp;geschrieben:</span></p>
                <br />
                 {Message}
                </div>
        </div>
      )
    }

export default Guestbook_entry;