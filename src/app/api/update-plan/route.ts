import { NextResponse } from "next/server";
import { getUsers, saveUsers } from "@/utils/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, plan } = body;

  if (!email || !plan) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const users = getUsers();
  const index = users.findIndex(u => u.email === email);

  if (index === -1) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  users[index].plan = plan;
  saveUsers(users);

  return NextResponse.json({ message: `Plan actualizado a ${plan}` });
}
