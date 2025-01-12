'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

// Libs
import { signInSchema } from '@/libs';
import { handleSignIn } from '@/actions';
import { useUserStore } from '@/stores';

// Constants
import { END_POINT, INPUT_TYPE, SIZE, TYPE } from '@/constants';

// Components
import { AuthForm, Button, InputController } from '@/ui/components';
import { useToast } from '@/stores/toast';

const SignInSection = () => {
  const router = useRouter();
  const { setUserId } = useUserStore();

  const [showPass, setShowPass] = useState<boolean>(false);
  const toast = useToast();

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

  // Handle submit data for login
  const onSubmit = async (data: { email: string; password: string }) => {
    const response = await handleSignIn(data.email, data.password);

    if (response.success) {
      setUserId(response.userId!);

      router.push(END_POINT.HOME);
    } else {
      toast.error(response.message);
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
    </AuthForm>
  );
};

export default SignInSection;
