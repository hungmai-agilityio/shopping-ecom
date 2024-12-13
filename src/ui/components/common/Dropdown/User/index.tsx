'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Components
import { Dropdown, Icon, Menu, MenuItem } from '@/ui/components';

// Constants
import { END_POINT } from '@/constants';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const menuButton = (
    <Icon
      src="/user-white.svg"
      alt="user dropdown"
      width={24}
      height={24}
      styles="bg-primary p-2 rounded-full cursor-pointer"
    />
  );

  const handleSignOut = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.refresh();
  };

  return (
    <Dropdown menuButton={menuButton} setVisible={setIsOpen} isOpen={isOpen}>
      <Menu styles="absolute top-10 right-0">
        <MenuItem
          image="/user-white.svg"
          name="User Profile"
          link={END_POINT.ACCOUNT}
        />
        <MenuItem
          image="/logout.svg"
          name="Logout"
          onClick={handleSignOut}
          link={END_POINT.SIGN_IN}
        />
      </Menu>
    </Dropdown>
  );
};

export default UserDropdown;
