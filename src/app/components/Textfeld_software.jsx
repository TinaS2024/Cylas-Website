
const Textfeld_Software = (props) =>
    {
        const {titel} = props
      
        return(
            <div className="textfeld-software">
                <h2>{titel}</h2>   
              <div className="abstand">
                {props.children}
              </div>
           
                    
            </div>
    

        )
    }

export default Textfeld_Software;