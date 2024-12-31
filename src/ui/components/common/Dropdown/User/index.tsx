'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

// Components
import {
  Badge,
  Dropdown,
  Icon,
  Menu,
  MenuItem,
  Modal,
  UserIcon
} from '@/ui/components';

// Constants
import { END_POINT } from '@/constants';
import Link from 'next/link';

// Hooks
import { useModal } from '@/hooks/useModal';

import { useUserStore } from '@/stores';

interface UserDropdownProps {
  wishlistLength?: number;
  cartLength?: number;
}
const UserDropdown = ({
  wishlistLength = 0,
  cartLength = 0
}: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modal = useModal();
  const { removeUserId } = useUserStore();
  const router = useRouter();
  const menuButton = <UserIcon />;

  const handleOpenLogOutModal = useCallback(() => {
    modal.openModal();
  }, [modal]);

  const handleSignOut = async () => {
    await fetch('/api/logout', { method: 'POST' });
    removeUserId();
    router.push(END_POINT.SIGN_IN);
    router.refresh();
  };

  return (
    <>
      <Dropdown menuButton={menuButton} setVisible={setIsOpen} isOpen={isOpen}>
        <Menu styles="absolute top-10 right-0 z-50">
          <MenuItem
            image="/user-white.svg"
            name="User Profile"
            link={END_POINT.ACCOUNT}
          />
          <MenuItem
            image="/logout.svg"
            name="Logout"
            onClick={handleOpenLogOutModal}
          />
          <div className="lg:hidden flex justify-center gap-8 my-5">
            <Link href={END_POINT.WISHLIST}>
              <Badge quantity={wishlistLength}>
                <Icon
                  src="/heart.svg"
                  alt="heart-icon"
                  width={32}
                  height={32}
                  priority
                />
              </Badge>
            </Link>
            <Link href={END_POINT.CART}>
              <Badge quantity={cartLength}>
                <Icon
                  src="/cart.svg"
                  alt="cart-icon"
                  width={32}
                  height={32}
                  priority
                />
              </Badge>
            </Link>
          </div>
        </Menu>
      </Dropdown>
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.closeModal}
        btnSecond="Log out"
        onClick={handleSignOut}
        title="Logout"
      >
        You want to log out?
      </Modal>
    </>
  );
};

export default UserDropdown;
