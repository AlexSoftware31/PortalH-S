import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  (await cookies()).set('token', '', { maxAge: 0, path: '/', httpOnly: true });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://portal-h-s.vercel.app';
  return NextResponse.redirect(new URL('/', baseUrl));

}
