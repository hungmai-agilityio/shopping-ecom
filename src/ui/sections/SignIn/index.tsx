'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

// Libs
import { signInSchema } from '@/libs';
import { handleSignIn } from '@/actions';

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

  const [showPass, setShowPass] = useState<boolean>(false);
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

  // Toggle password visibility
  const toggleShowPassword = () => setShowPass(!showPass);

  // Handle submit data for loginlogin
  const onSubmit = async (data: { email: string; password: string }) => {
    const response = await handleSignIn(data.email, data.password);

    if (response.success) {
      router.push(END_POINT.HOME);
    } else {
      setToast({
        status: STATUS.ERROR,
        message: response.message
      });
    }
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
            placeholder="Email"
          />
        </div>
        <div className="my-10">
          <InputController
            name="password"
            control={control}
            type={showPass ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD}
            variant={TYPE.SECOND}
            placeholder="Password"
            showIcon={showPass ? '/eye.svg' : '/eye-hide.svg'}
            toggleShow={toggleShowPassword}
          />
        </div>

        <div className="flex justify-between items-center gap-4">
          <Button size={SIZE.SMALL} disabled={isSubmitting}>
            Login
          </Button>
          <Link
            href={END_POINT.SIGN_UP}
            className="font-medium md:text-base text-sm text-primary"
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
