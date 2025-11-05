import { NextResponse } from 'next/server';
import { validateUser } from '@/utils/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Complete los datos requeridos.' }, { status: 400 });
  }

  const valid = await validateUser(email, password);
  if (!valid) {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  (await cookies()).set('token', email, { httpOnly: true });
  return NextResponse.json({ message: 'Login exitoso' });
}
