import Map from "../components/Map";

const Impressum = () =>
{
    return(
    <div className="impressum-container abstand-unten">
    <div style={{marginTop:"5%"}} className="abstand zentrieren">
    <table width={410}>
        <tbody> 
        <tr><td><h2 style={{textAlign:"left"}}>Impressum</h2></td></tr>
        <tr><td><span>Cylas AG Büro:</span></td></tr>
            <tr><td>Fritz-Wagner-Siedlung 16</td></tr>
            <tr><td>09116 Chemnitz </td></tr> 
            <tr><td><b>Tel.:</b> (03 71) 3 35 06 67</td></tr>
            <tr><td style={{height:"25px"}}></td></tr>
            <tr><td style={{height:"50px"}}><b>Geschäftsführer:</b></td></tr>
            <tr><td><span>Reiner Boes:</span> &emsp;&emsp;(01 71) 8 50 09 08</td></tr>
            <tr><td><span>Dr. Gerd Pfeifer:</span> &ensp;(01 60) 96 24 85 44 </td></tr>
            <tr><td style={{height:"50px"}}></td></tr>
            <tr><td><b>E-Mail:</b>&emsp;&emsp;&emsp;&emsp;&ensp; <span>info@cylas.de</span></td></tr>
        </tbody>
    </table>
    <br/>
</div>
<div className="map-container-impressum map">
    <Map/>
    <p className="p_other werk_addr"><br/><b>Cylas AG Werkstatt:</b><br/>Straßburger Straße 7, 09120 Chemnitz<br/> Besuch nur nach Absprache!</p>

</div>

</div>
    )
}

export default Impressum;