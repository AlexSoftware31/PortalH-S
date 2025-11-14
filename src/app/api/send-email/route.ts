import { transporter } from "@/lib/mail";

export async function POST(req: Request) {
  const { to, subject, html } = await req.json();

  await transporter.sendMail({
    from: '"Harmony & Symphony" <no-reply@gmail.com>', // puedes usar tu dominio aquí
    to,
    subject,
    html,
  });

  return new Response("Correo enviado", { status: 200 });
}
