'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Libs
import { handleSignIn, setCookieUser, signInSchema } from '@/libs';

// Constants
import { END_POINT, INPUT_TYPE, SIZE, TYPE } from '@/constants';

// Components
import { AuthForm, Button, InputController } from '@/ui/components';

const SignInSection = () => {
  const router = useRouter();

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
      return;
    }
    setCookieUser(user);

    router.push(END_POINT.HOME);
    router.refresh();
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
    </AuthForm>
  );
};

export default SignInSection;
