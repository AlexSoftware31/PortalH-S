import { NextResponse } from 'next/server';
import { createUser } from '@/utils/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, password, email, plan } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
  }

  try {
    await createUser(email, password, name, plan);
    return NextResponse.json({ message: 'Usuario creado' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
