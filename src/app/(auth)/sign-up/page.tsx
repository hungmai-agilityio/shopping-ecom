import { Metadata } from 'next';
import { SignUpSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Create an account to access personalized features and services.'
};
const SignUp = () => {
  return <SignUpSection />;
};

export default SignUp;
