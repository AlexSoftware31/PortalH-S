import { createGoal } from '@/utils/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, curso, temporal, alcance } = body;

  if (!email || !curso || !temporal || !alcance) {
    return NextResponse.json({ error: 'Complete los datos requeridos.' }, { status: 400 });
  }

  try {
    await createGoal(email, curso, temporal, alcance)
    return NextResponse.json({ message: 'Meta creado'});
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
