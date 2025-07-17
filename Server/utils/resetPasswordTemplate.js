const ResetPass = (username, otp) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        text-align: center;
      }
      .otp {
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
        background-color: #ff5e00;
        color: #fff;
        padding: 12px 20px;
        border-radius: 8px;
        margin-top: 20px;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Hello ${username},</h2>
      <p>Hello From  Webdone!</p>
      <p>Please use the following OTP to verify your email and reset your password:</p>
      <div class="otp">${otp}</div>
      <p class="footer">If you did not request this email, you can safely ignore it.</p>
    </div>
  </body>
  </html>
  `;
};

export default ResetPass;
