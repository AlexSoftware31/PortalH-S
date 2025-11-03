import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const usersFile = path.join(process.cwd(), 'src', 'data', 'users.json');

export function getUsers(): { email: string; password: string; name: string, plan: string}[] {
  const data = fs.readFileSync(usersFile, 'utf-8');
  return JSON.parse(data);
}

export function saveUsers(users: { email: string; password: string ; name: string; plan: string}[]) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

export async function createUser(email: string, password: string, name: string, plan: string) {
  const users = getUsers();
  const exists = users.find(u => u.email === email);
  if (exists) throw new Error('Usuario ya existe');

  const hashed = await bcrypt.hash(password, 10);
  users.push({email, password: hashed , name, plan});
  saveUsers(users);
}

export async function validateUser(email: string, password: string) {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  if (!user) return false;
  return await bcrypt.compare(password, user.password);
}
