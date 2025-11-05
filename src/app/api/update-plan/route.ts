import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, plan } = body;

  if (!email || !plan) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  user.plan = plan;
  await user.save();

  return NextResponse.json({ message: `Plan actualizado a ${plan}` });

}
