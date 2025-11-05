import { NextResponse } from 'next/server';
import { createUser } from '@/utils/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, password, email, plan } = body;

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'Complete los datos requeridos.' }, { status: 400 });
  }

  if (password.length < 6) {
    return NextResponse.json({ error: 'La contraseña debe tener un mínimo de 6 caracteres.' }, { status: 400 });
  }

  try {
    await createUser(email, password, name, plan);
    return NextResponse.json({ message: 'Usuario creado' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
