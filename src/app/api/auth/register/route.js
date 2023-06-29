import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { registerData } = await req.json();
  await connect();

  const newUser = new User();

  try {
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
