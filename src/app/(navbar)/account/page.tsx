import { Metadata } from 'next';
import { clsx } from 'clsx';

// Constants
import { popping } from '@/constants';

// Libs
import { getUserCookie } from '@/libs';

// Components
import { Breadcrumb } from '@/ui/components';

// Sections
import { AddressSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Account'
};

const Account = async () => {
  const user = await getUserCookie();

  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <div className={clsx('container my-20', popping.className)}>
      <div className="flex justify-between">
        <Breadcrumb />
        <p className="text-base">
          Welcome! <span className="text-primary">{fullName}</span>
        </p>
      </div>
      <div className="my-20">
        <AddressSection user={user} />
      </div>
    </div>
  );
};

export default Account;
