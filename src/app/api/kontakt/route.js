import * as nodemailer from "nodemailer";

const host = process.env.NEXT_PUBLIC_HOST;
const port = process.env.NEXT_PUBLIC_PORT;
const user = process.env.NEXT_PUBLIC_USER;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const webmail = process.env.NEXT_PUBLIC_WEBMAIL;

export async function POST(req)
{
    const {username,email,bereich,nachricht} = await req.json() 
    
    const transporter = nodemailer.createTransport({
            host: host,
            service: "Strato", 
            port: port, 
            secureConnection: false,
            tls: {
                ciphers: "SSLv3"
            },
            auth: {
                user:user,
                pass:password 
            }
        });   
        
    const mailData = {
         from: user,
         to: webmail,
         subject: bereich,
         html: '<h2>Kundenanfrage an Cylas AG</h2><p>Von: '+username+'</p><p>Email-Absender: '+email+'</p><p>Nachricht: <br/> '+nachricht+'</p>',
     };    
     
     transporter.sendMail(mailData);

    return Response.json({ username,email,bereich,nachricht })   //Immer wenn ein JSON-Parse-Error kommt stand res stand Response da

}
