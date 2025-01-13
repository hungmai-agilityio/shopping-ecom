'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

// Constants
import { TAB } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Components
import { Tabs, Panel } from '@/ui/components';

// Sections
import { ProfileSection } from '@/ui/sections';

// Lazy
const AddressSection = dynamic(() => import('@/ui/sections/Account/Address'));

interface AccountProps {
  user: IUser;
}

const AccountSection = ({ user }: AccountProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(TAB.PROFILE);

  const list = useMemo(
    () => [
      { title: 'My Profile', value: TAB.PROFILE },
      { title: 'Address Book', value: TAB.ADDRESS }
    ],
    []
  );

  const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedTab(event.currentTarget.value);
  };

  return (
    <section className="my-20 lg:flex">
      <div className="flex flex-col lg:justify-start justify-center lg:items-start my-5">
        <h2 className="text-base font-medium my-5 text-center">
          Manage My Account
        </h2>
        <div className="lg:ml-9">
          <Tabs list={list} selected={selectedTab} onClick={handleChangeTab} />
        </div>
      </div>
      <Panel selected={selectedTab} tabIndex={TAB.PROFILE}>
        <ProfileSection user={user} />
      </Panel>
      <Panel selected={selectedTab} tabIndex={TAB.ADDRESS}>
        <AddressSection user={user} />
      </Panel>
    </section>
  );
};

export default AccountSection;
