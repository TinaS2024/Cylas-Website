
const Textfeld = (props) =>
    {
        const {titel} = props
      
        return(
            <div className="textfeld-container">
                <h2>{titel}</h2>   
              <div className="abstand">
                {props.children}
              </div>
           
                    
            </div>
    

        )
    }

export default Textfeld;