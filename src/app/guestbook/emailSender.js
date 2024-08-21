import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: "smtp.strato.de",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: global.CONFIG.sender_email,
    pass: global.CONFIG.sender_password,
  },
  /*
  service: 'gmail',
  auth: {
    user: global.CONFIG.sender_email,
    pass: global.CONFIG.sender_password
  }
  */
});

const mailOptions = {
  from: global.CONFIG.sender_mail,
  to: global.CONFIG.email_receiver
};

const sendMail = content => {
  if (global.CONFIG.enable_email_notifications === 'yes') {
    transporter.sendMail({ ...mailOptions, ...content }, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
};

export function sendJobFinishedMail(job) {
  let d = new Date();
  const content = {
    subject: `Benachrichtigung Abschluss: Seite ${job.page.sourceFile.name} ist fertig`,
    text: `Ein Job wurde soeben fertig gestellt.
    Uhrzeit: ${d.toTimeString()}
    Seitenname: ${job.page.sourceFile.name}
    `
  };
  sendMail(content);
}

export function sendJobErroredMail(job) {
  let d = new Date();
  const content = {
    subject: `Benachrichtigung Fehler: Seite ${job.page.sourceFile.name} wurde mit einem Fehler beendet`,
    text: `Ein Job konnte nicht abgeschlossen werden.
    Uhrzeit: ${d.toTimeString()}
    Seitenname: ${job.page.sourceFile.name}
    `
  };
  sendMail(content);
}
