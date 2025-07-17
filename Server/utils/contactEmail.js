
export default function ContactEmail({ name, email, message }) {
  return `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/> ${message}</p>
  `;
}
