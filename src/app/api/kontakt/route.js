import* as nodemailer from "nodemailer";

export async function POST(req)
{
    const {username,email,bereich,nachricht} = await req.json() 
    
    const transporter = nodemailer.createTransport({
            host: "smtp.strato.de",//"smtp-mail.outlook.com"
            service: "Strato", //"Outlook"
            port: 465, //587
            secureConnection: false,
            tls: {
                ciphers: "SSLv3"
            },
            auth: {
                user:"otrs@cylas.de",//"bolasys_client@outlook.de" 
                pass:"42lasyc-WS" //"kZ4xj8vkVABf9WB" 
            }
        });   
        
    const mailData = {
         from: "otrs@cylas.de",//"bolasys_client@outlook.de",
         to: "Tina.Schmidtbauer@bolasys.de",
         subject: bereich,
         html: '<h2>Kundenanfrage an Cylas AG</h2><p>Von: '+username+'</p><p>Email-Absender: '+email+'</p><p>Nachricht: <br/> '+nachricht+'</p>',
     };    
     
     transporter.sendMail(mailData);

    return Response.json({ username,email,bereich,nachricht })   //Immer wenn ein JSON-Parse-Error kommt stand res stand Response da

}
