import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { KEY, MESSAGE_API, MESSAGE_VALID, TIME_STATUS } from '@/constants';
import { addUser, checkUserByEmail } from '@/libs';

// Libs

export async function POST(req: NextRequest) {
  try {
    const { firstName, email, password } = await req.json();

    const userExists = await checkUserByEmail(email);
    if (userExists) {
      return NextResponse.json(
        { message: MESSAGE_VALID.EMAIL_EXIST },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: uuidv4(),
      firstName,
      lastName: '',
      avatar: '',
      email,
      address: [],
      password: hashedPassword,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    await addUser(newUser);

    const cookieValue = JSON.stringify({
      newUser
    });

    cookies().set(KEY.USER, cookieValue, {
      httpOnly: true,
      secure: true,
      maxAge: TIME_STATUS.COOKIE_TIME,
    });

    return NextResponse.json({ message: MESSAGE_API.SIGN_UP_SUCCESS, user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: MESSAGE_API.SIGN_UP_ERROR, error: error },
      { status: 500 }
    );
  }
}
