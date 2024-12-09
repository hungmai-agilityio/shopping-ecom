'use client';

import { useState } from 'react';

// Components
import { Dropdown, Icon, Menu, MenuItem } from '@/ui/components';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuButton = (
    <Icon
      src="/user-white.svg"
      alt="user dropdown"
      width={24}
      height={24}
      styles="bg-primary p-2 rounded-full cursor-pointer"
    />
  );

  return (
    <Dropdown menuButton={menuButton} setVisible={setIsOpen} isOpen={isOpen}>
      <Menu>
        <MenuItem image="/user-white.svg" name="User Profile" />
        <MenuItem image="/logout.svg" name="Logout" />
      </Menu>
    </Dropdown>
  );
};

export default UserDropdown;
