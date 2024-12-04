'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

// Libs
import { handleSignIn, signInSchema } from '@/libs';

// Constants
import { END_POINT, INPUT_TYPE, SIZE, TYPE } from '@/constants';

// Components
import { AuthForm, Button, InputController } from '@/ui/components';
import Link from 'next/link';

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
            variant={TYPE.SECOND}
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center">
          <Button size={SIZE.SMALL}>Login</Button>
          <Link href="/signUp" className="font-medium text-base text-primary">
            Don't have an account?
          </Link>
        </div>
      </form>
    </AuthForm>
  );
};

export default SignInSection;
