import { Metadata } from 'next';
import { SignInSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Sign in'
};

const SignIn = () => {
  return <SignInSection />;
};

export default SignIn;
