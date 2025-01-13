'use server';

import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { KEY, MESSAGE_API, MESSAGE_VALID, TIME_STATUS } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Libs
import { addUser, checkPassword, checkUserByEmail, getUserEmail } from '@/libs';

export const createUser = async (data: IUser) => {
  const { email, password } = data;

  const userExists = await checkUserByEmail(email);
  if (userExists) {
    return { success: false, message: MESSAGE_VALID.EMAIL_EXIST };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    ...data,
    id: uuidv4(),
    password: hashedPassword,
    lastName: '',
    avatar: '',
    address: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const userAdded = await addUser(newUser);

  if (!userAdded) {
    return { success: false, message: MESSAGE_API.SIGN_UP_ERROR };
  }

  cookies().set(KEY.USER, JSON.stringify(newUser.id), {
    maxAge: TIME_STATUS.COOKIE_TIME
  });

  return {
    success: true,
    message: MESSAGE_API.SIGN_UP_SUCCESS,
    userId: newUser.id
  };
};

export const handleSignIn = async (email: string, password: string) => {
  try {
    const { data, error } = await getUserEmail(email);

    if (error || !data || !data.length) {
      return { success: false, message: 'User not found' };
    }

    const [user] = data;

    const isPasswordMatch = await checkPassword(password, user.password);
    if (!isPasswordMatch) {
      return { success: false, message: 'Invalid password' };
    }

    cookies().set(KEY.USER, JSON.stringify(user.id), {
      maxAge: TIME_STATUS.COOKIE_TIME
    });

    return {
      success: true,
      message: MESSAGE_API.SIGN_IN_SUCCESS,
      userId: user.id
    };
  } catch (error) {
    return { success: false, message: MESSAGE_API.SIGN_IN_ERROR };
  }
};
