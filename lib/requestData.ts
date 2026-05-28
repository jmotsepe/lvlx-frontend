"use server";

import mailer from "./nodeMailer";

export type DataDeletionRequest = {
  firstName: string;
  lastName: string;
  accountEmail: string;
  removalReason: string;
};

export async function sendDataDeletionRequest({
  firstName,
  lastName,
  accountEmail,
  removalReason,
}: DataDeletionRequest) {
  const htmlContent = `
    <style>
      /* Customize your email template styles here */
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
        <h2>New Data Deletion Request:</h2>
      </div>
      
      <div class="details">
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Account Email:</strong> ${accountEmail}</p>
      </div>

      <div class="message">
        <p><strong>Removal Reason:</strong> ${removalReason}</p>
      </div>
    </div>
  `;

  const msg = {
    to: "phumudzo@soimagine.co.za", // Update with your recipient email address
    from: accountEmail, // Use the email address or domain you verified above
    subject: "New Data Deletion Request",
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
