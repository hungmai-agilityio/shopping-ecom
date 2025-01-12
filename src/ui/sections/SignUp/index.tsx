'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Constants
import { END_POINT, INPUT_TYPE, SIZE, TYPE } from '@/constants';

// Components
import { AuthForm, Button, InputController } from '@/ui/components';

// Interfaces
import { IUser } from '@/interface';

// Libs
import { signUpSchema } from '@/libs';
import { createUser } from '@/actions';
import { useUserStore } from '@/stores';
import { useToast } from '@/stores/toast';

const SignUpSection = () => {
  const router = useRouter();
  const { setUserId } = useUserStore();
  const toast = useToast();
  const [showPass, setShowPass] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<IUser>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: IUser) => {
    const response = await createUser(data);

    toast.error(response.message);

    if (response.success) {
      setUserId(response.userId!);
      router.push(END_POINT.HOME);
    }
  };

  // Toggle password visibility
  const toggleShowPassword = () => setShowPass(!showPass);

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
            placeholder="Email"
            variant={TYPE.SECOND}
          />
        </div>
        <div className="my-10">
          <InputController
            name={'password'}
            control={control}
            type={showPass ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD}
            placeholder="Password"
            variant={TYPE.SECOND}
            showIcon={showPass ? '/eye.svg' : '/eye-hide.svg'}
            toggleShow={toggleShowPassword}
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
              href={END_POINT.SIGN_IN}
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
