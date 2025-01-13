import { Metadata } from 'next';
import { clsx } from 'clsx';

// Constants
import { popping } from '@/constants';

// Libs
import { getUserCookie, getUserId } from '@/libs';

// Components
import { Breadcrumb } from '@/ui/components';

// Sections
import { AccountSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Account',
  description:
    'This page allows users to make edits and changes to their profile'
};

const Account = async () => {
  const user = await getUserCookie();
  const data = await getUserId(user);

  const fullName = `${data.firstName} ${data.lastName}`;
  return (
    <div className={clsx('container my-20 lg:px-0 px-4', popping.className)}>
      <div className="flex justify-between flex-wrap">
        <Breadcrumb />
        <p className="text-base">
          Welcome! <span className="text-primary">{fullName}</span>
        </p>
      </div>
      <div className="my-20">
        <AccountSection user={data} />
      </div>
    </div>
  );
};

export default Account;
