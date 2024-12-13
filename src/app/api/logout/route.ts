import { KEY } from '@/constants';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();

  cookieStore.set(KEY.USER, '', { maxAge: 0 });

  return new Response(JSON.stringify({ message: 'Cookie has been cleared' }), {
    status: 200
  });
}
