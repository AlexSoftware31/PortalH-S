import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  (await cookies()).set('token', '', { maxAge: 0, path: '/', httpOnly: true });
  
  return NextResponse.json({});

}
