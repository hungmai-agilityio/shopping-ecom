'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

// Libs
import { handleSignIn, setCookieUser, signInSchema } from '@/libs';

// Constants
import { END_POINT, INPUT_TYPE, SIZE, STATUS, TYPE } from '@/constants';

// Components
import {
  AuthForm,
  Button,
  InputController,
  ToastMessage
} from '@/ui/components';

const SignInSection = () => {
  const router = useRouter();
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const { data: user, error } = await handleSignIn(data.email, data.password);

    if (error) {
      setToast({
        status: STATUS.ERROR,
        message: error.toString()
      });
      return;
    }
    setCookieUser(user);

    router.push(END_POINT.HOME);
  };

  return (
    <AuthForm title="Log in to Exclusive" subtitle="Enter your details below">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10">
          <InputController
            name="email"
            control={control}
            variant={TYPE.SECOND}
            type={INPUT_TYPE.EMAIL}
            placeholder="Email or Phone Number"
          />
        </div>
        <div className="my-10">
          <InputController
            name="password"
            control={control}
            type={INPUT_TYPE.PASSWORD}
            variant={TYPE.SECOND}
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center">
          <Button size={SIZE.SMALL} disabled={isSubmitting}>
            Login
          </Button>
          <Link
            href={END_POINT.SIGN_UP}
            className="font-medium text-base text-primary"
          >
            Don't have an account?
          </Link>
        </div>
      </form>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </AuthForm>
  );
};

export default SignInSection;
