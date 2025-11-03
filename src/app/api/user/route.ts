import { NextResponse } from "next/server";
import { getUsers } from "@/utils/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Falta el parámetro 'email'" }, { status: 400 });
  }

  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  // Opcional: no devolver la contraseña
  const { password, ...safeUser } = user;

  return NextResponse.json(safeUser);
}