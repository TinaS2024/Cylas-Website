import Image from "next/image";
import error_img from "../image/404.png";

const Default = () =>
{
    return(
           <div className="profile-img abstand">
           
  <Image src={error_img} width={150} alt="Seite wurde nicht gefunden." />
  <h3>Ihre angeforderte Seite wurde nicht gefunden!</h3>
  <br />
        </div>
    )
}
export default Default;