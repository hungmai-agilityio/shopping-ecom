import { KEY } from '@/constants';
import { IUser } from '@/interface';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { user }: { user: IUser } = await req.json();

  const cookieStore = cookies();
  cookieStore.set(KEY.USER, JSON.stringify(user), { maxAge: 60 * 60 * 24 * 7 });

  return new Response(JSON.stringify({ message: 'Cookie has been set' }), {
    status: 200
  });
}
