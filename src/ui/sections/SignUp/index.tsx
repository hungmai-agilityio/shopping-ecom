'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Constants
import { END_POINT, INPUT_TYPE, MESSAGE_VALID, SIZE, TYPE } from '@/constants';

// Components
import { AuthForm, Button, InputController } from '@/ui/components';

// Interfaces
import { IUser } from '@/interface';

// Libs
import { addUser, checkUserByEmail, signUpSchema } from '@/libs';

const SignUpSection = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<IUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: '',
    address: '',
    phone: '',
    city: '',
    company: '',
    apartment: '',
    created_at: '',
    updated_at: ''
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting }
  } = useForm<IUser>({
    resolver: zodResolver(signUpSchema),
    defaultValues: formData
  });

  const onSubmit = async (data: IUser) => {
    const userExists = await checkUserByEmail(data.email);
    if (userExists) {
      setError('email', {
        type: 'manual',
        message: MESSAGE_VALID.EMAIL_EXIST
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newData = {
      ...data,
      id: uuidv4(),
      password: hashedPassword,
      lastName: '',
      avatar: '',
      address: '',
      phone: '',
      city: '',
      company: '',
      apartment: '',
      create_at: new Date(),
      update_at: new Date()
    };

    setFormData(newData);

    const newUser = await addUser(newData);

    if (newUser.data) {
      setFormData(formData);

      setTimeout(() => {
        router.push(END_POINT.HOME);
        router.refresh();
      }, 2000);
    }
  };

  return (
    <AuthForm title="Create an account" subtitle="Enter your details below">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10">
          <InputController
            name="firstName"
            control={control}
            placeholder="Name"
            variant={TYPE.SECOND}
          />
        </div>
        <div className="my-10">
          <InputController
            name={'email'}
            control={control}
            placeholder="Email or Phone Number"
            variant={TYPE.SECOND}
          />
        </div>
        <div className="my-10">
          <InputController
            name={'password'}
            control={control}
            type={INPUT_TYPE.PASSWORD}
            placeholder="Password"
            variant={TYPE.SECOND}
          />
        </div>
        <Button size={SIZE.LARGE} disabled={isSubmitting}>
          Create Account
        </Button>
        <div className="mt-5">
          <Button
            size={SIZE.LARGE}
            type="submit"
            styles="bg-white border border-dark"
            disabled={isSubmitting}
          >
            <div className="flex items-center justify-center gap-5">
              <Image
                src="/icon-google.svg"
                alt="icon google"
                width={24}
                height={24}
              />
              <span className="text-dark">Sign up with Google</span>
            </div>
          </Button>
        </div>
        <div className="mt-10">
          <p className="text-gray-600">
            Already have account?
            <Link
              href="/signIn"
              className="border-b border-dark p-1 ml-2 text-dark"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthForm>
  );
};

export default SignUpSection;
