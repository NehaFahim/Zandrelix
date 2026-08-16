import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * ================================================================
 *  CONTACT FORM API — fill in your own details below
 * ================================================================
 *  This route already receives the form as JSON, validates it and
 *  returns a clean JSON response the frontend understands. The only
 *  thing left for you is to plug in your real email credentials.
 *
 *  1) Create a file called `.env.local` in the project root (copy
 *     `.env.local.example`) and fill in:
 *
 *       SMTP_HOST=smtp.gmail.com          // or your provider's SMTP host
 *       SMTP_PORT=465
 *       SMTP_USER=you@yourdomain.com
 *       SMTP_PASS=your-app-password       // Gmail needs an "App Password"
 *       CONTACT_TO_EMAIL=hello@zandrelix.tech   // where you want to receive leads
 *
 *  2) That's it — restart `npm run dev` and the form will send real
 *     emails. If you'd rather use a service like Resend, SendGrid or
 *     Postmark instead of SMTP, just swap out the `transporter` /
 *     `sendMail` block below for that provider's SDK call — the
 *     request/response JSON contract for the frontend stays the same.
 * ================================================================
 */

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const { name, email, phone, subject, message } = body;

    // ---- basic validation ----
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in your name, email and message." },
        { status: 400 }
      );
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ success: false, message: "That email address doesn't look right." }, { status: 400 });
    }

    // ---- if SMTP isn't configured yet, don't crash — tell the developer clearly ----
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      console.warn(
        "[/api/contact] SMTP env vars are not set yet — see app/api/contact/route.ts for setup steps."
      );
      return NextResponse.json(
        {
          success: false,
          message: "Email sending isn't configured yet on the server. (Add your SMTP details in .env.local.)",
        },
        { status: 500 }
      );
    }

    // ---- send the email ----
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Zandrelix Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New inquiry: ${subject || "General Inquiry"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Subject: ${subject || "General Inquiry"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #111;">
          <h2 style="margin: 0 0 12px;">New website inquiry</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Phone:</b> ${escapeHtml(phone || "—")}</p>
          <p><b>Subject:</b> ${escapeHtml(subject || "General Inquiry")}</p>
          <p><b>Message:</b></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Your message has been sent — we'll be in touch soon!" });
  } catch (err) {
    console.error("[/api/contact] failed to send:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong sending your message. Please try again in a moment." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
