const QuoteEmail = ({ email, companyName, phone, priceRange, message }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Contact Form Submission</title>
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
        background: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .info {
        margin: 10px 0;
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }
      .info strong {
        display: inline-block;
        width: 130px;
        color: #555;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #999;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>📩 New Contact Form Submission</h2>
      </div>

      <div class="info"><strong>Email:</strong> ${email}</div>
      <div class="info"><strong>Company Name:</strong> ${companyName}</div>
      <div class="info"><strong>Phone:</strong> ${phone}</div>
      <div class="info"><strong>Price Range:</strong> ${priceRange}</div>
      <div class="info"><strong>Message:</strong><br/> ${message}</div>

      <div class="footer">
        This email was generated from your website's contact form.
      </div>
    </div>
  </body>
  </html>
  `;
};

export default QuoteEmail;
