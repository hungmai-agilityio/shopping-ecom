import { Metadata } from 'next';
import { SignInSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Sign in',
  description:
    'Securely sign in to access your account and personalized features.'
};

const SignIn = () => {
  return <SignInSection />;
};

export default SignIn;
