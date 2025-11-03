import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const token = (await cookies()).get('token')?.value;
  //const authenticated = Boolean(token);
  return NextResponse.json({ token });
}
