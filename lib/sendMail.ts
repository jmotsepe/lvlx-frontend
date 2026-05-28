"use server";

import mailer from "./nodeMailer";

export type EmailData = {
  fullname: string;
  email: string;
  message: string;
};

export async function sendEmail({ email, fullname, message }: EmailData) {
  const htmlContent = `
  <style>
    .container {
      max-width: 500px;
      margin: 0 auto;
    }

    .header {
      background-color: #f2f2f2;
      padding: 10px;
    }

    .header h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }

    .details p {
      margin-bottom: 8px;
    }

    .details strong {
      font-weight: bold;
    }

    .message {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      padding: 10px;
      margin-top: 15px;
    }

    .message p {
      margin-bottom: 5px;
    }
  </style>

  <div class="container">
    <div class="header">
      <h2>New Message:</h2>
    </div>
    
    <div class="details">
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
    </div>

    <div class="message">
      <p>${message}</p>
    </div>
  </div>
`;

  const msg = {
    to: "phumudzo@soimagine.co.za",
    from: email,
    subject: "New message from contact page",
    html: htmlContent,
  };

  mailer.sendMail(msg, (err: any, info: any) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Response: ", info);
    }
  });
}
