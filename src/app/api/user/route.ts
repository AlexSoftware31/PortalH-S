import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

// Define el tipo plano sin contraseña
type SafeUser = {
  _id: string;
  name?: string;
  email: string;
  plan?: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Falta el parámetro 'email'" }, { status: 400 });
  }

  await connectDB();

  // Usa lean() y tipa el resultado como any para evitar errores de acceso
  const user = await User.findOne({ email }).lean<any>();

  if (!user) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  // Extrae y elimina la contraseña
  const { password, ...safeUser } = user;

  return NextResponse.json(safeUser as SafeUser);
}
