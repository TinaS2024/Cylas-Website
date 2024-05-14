import Punkt from "../components/Punkt.jsx";

const Textfeld = (props) =>
    {
        const titel = props.titel
        const punkt = props.punkt

        return(
            <div className="textfeld-container">
                <h2>{titel}</h2>
                    <Punkt text={punkt}/>
                    <br />
            </div>
    

        )
    }

export default Textfeld;