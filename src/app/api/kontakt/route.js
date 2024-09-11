import* as nodemailer from "nodemailer";

export async function POST(req)
{
    const {username,email,bereich,nachricht} = await req.json() 
    
    const transporter = nodemailer.createTransport({
            host:"smtp-mail.outlook.com",
            service: "Outlook",
            port: 587,
            secureConnection: false,
            tls: {
                ciphers: "SSLv3"
            },
            auth: {
                user:"bolasys_client@outlook.de" ,//process.env.EMAIL_USER,
                pass:"kZ4xj8vkVABf9WB" ,//process.env.EMAIL_PASS,
            }
        });   
        
    const mailData = {
         from: "bolasys_client@outlook.de",
         to: "Tina.Schmidtbauer@bolasys.de",
         subject: bereich,
         html: '<h2>Kundenanfrage an Cylas AG</h2><p>Von: '+username+'</p><p>Email-Absender: '+email+'</p><p>Nachricht: <br/> '+nachricht+'</p>',
     };    
     
     transporter.sendMail(mailData);

    return Response.json({ username,email,bereich,nachricht })   //Immer wenn ein JSON-Parse-Error kommt stand res stand Response da

}
