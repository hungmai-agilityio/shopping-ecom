import { Metadata } from 'next';
import { SignUpSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Sign up'
};
const SignUp = () => {
  return <SignUpSection />;
};

export default SignUp;
