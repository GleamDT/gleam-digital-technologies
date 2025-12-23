// app/api/contact/route.js
import { Resend } from "resend";

export const dynamic = "force-dynamic"; // ensure this route is dynamic
export const revalidate = 0;
export const fetchCache = "force-no-store";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message, company } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Send email to you
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: `New enquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send a reply email to the user
    await resend.emails.send({
      from: process.env.FROM_EMAIL, // Your email
      to: email, // The user's email
      subject: "Thank you for contacting GleamDT!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br />Gleam Digital Technologies</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending enquiry email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
