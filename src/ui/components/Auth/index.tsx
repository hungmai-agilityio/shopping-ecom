import Image from 'next/image';

// Constants
import { inter, popping } from '@/constants';

interface AuthFormProps {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}

const AuthForm = ({ title, subtitle, children }: AuthFormProps) => {
  return (
    <div className="flex my-10">
      <Image
        src="/image-form.webp"
        alt="img-form"
        width={805}
        height={781}
        className="md:block hidden"
      />
      <div className="xl:w-form w-full my-auto xl:mx-36 mx-14">
        <div className={`${popping.className}`}>
          <h1 className={`text-4xl font-medium ${inter.className}`}>{title}</h1>
          <p className="text-base mt-5">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
