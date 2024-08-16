const Impressum = () =>
{
    return(
<div className="abstand zentrieren">
    <table>
        <h2 style={{textAlign:"left"}}>Anschrift</h2>
        <tbody>
            <tr><td><span>Cylas AG</span></td></tr>
            <tr><td>Fritz-Wagner-Siedlung 16</td></tr>
            <tr><td>09116 Chemnitz </td></tr>
            <tr><td><b>Tel.:</b> (03 71) 3 35 06 67</td></tr>
            <tr><td style={{height:"50px"}}><b>Geschäftsführer:</b></td></tr>
            <tr><td><span>Reiner Boes:</span> &emsp;&emsp;(01 71) 8 50 09 08</td></tr>
            <tr><td><span>Dr. Gerd Pfeifer:</span> &ensp;(01 60) 96 24 85 44 </td></tr>
            <tr><td style={{height:"50px"}}></td></tr>
            <tr><td><b>E-Mail:</b>&emsp;&emsp;&emsp;&emsp;&ensp; <span>info@cylas.de</span></td></tr>
        </tbody>
    </table>
        
</div>
    )
}

export default Impressum;