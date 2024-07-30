
const Punkt = (props) =>
{
    const {text} = props;

    return(
        <div>
            <div className="punkt-container"></div> 
            <div><p style={{textAlign:"left"}}>{text}</p><br /></div>
     </div>
    )
}

export default Punkt;