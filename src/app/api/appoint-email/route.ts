import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  date: z.string(),
  time: z.string(),
  service: z.string(),
});

const resend = new Resend("re_S3QztK3z_M8GCkKrwAoQ1zAC51gPrj2ba");

export async function POST(req: Request) {
  const body = await req.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, date, time, service } = result.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "raiyancmax@gmail.com",
      replyTo: email,
      subject: `New Appointment: ${service}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
