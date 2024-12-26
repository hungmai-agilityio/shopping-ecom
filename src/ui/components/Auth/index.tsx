import Image from 'next/image';

import { inter, popping } from '@/constants';

interface AuthFormProps {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}

const AuthForm = ({ title, subtitle, children }: AuthFormProps) => {
  return (
    <div className="flex my-10">
      <div className="lg:w-1/2 lg:block hidden">
        <Image
          src="/image-form.webp"
          alt="img-form"
          width={500}
          height={600}
          className="w-full h-auto object-contain md:block hidden"
        />
      </div>
      <div className="lg:w-form w-full my-auto lg:mx-36 mx-14">
        <div className={`${popping.className}`}>
          <h1 className={`lg:text-4xl text-2xl font-medium ${inter.className}`}>{title}</h1>
          <p className="text-base mt-5">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
