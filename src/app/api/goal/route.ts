import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Goal from "@/models/Goal";

interface Goal {
  email: string;
  curso: string;
  temporal: string;
  alcance: string;
}


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const curso = searchParams.get("curso");

  if (!email || !curso) {
    return NextResponse.json({ error: "Falta los parámetros" }, { status: 400 });
  }

  await connectDB();

  // Usa lean() y tipa el resultado como any para evitar errores de acceso
  const goal = await Goal.find({ email, curso }).lean<Goal[]>();

  if (!goal) {
    return NextResponse.json({ error: "Metas no encontrada" }, { status: 404 });
  }

  return NextResponse.json(goal);
}
