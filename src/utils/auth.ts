import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';


export async function createUser(email: string, password: string, name: string, plan: string) {
  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    plan,
  });

  await newUser.save();

}

export async function validateUser(email: string, password: string) {
  await connectDB();

  const user = await User.findOne({ email });
  if (!user) return false;

  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;

}
