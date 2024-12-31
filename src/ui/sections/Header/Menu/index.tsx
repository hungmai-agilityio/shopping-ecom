'use client';

import Link from 'next/link';

// Stores
import { useUserStore } from '@/stores';

// Components
import { UserAction, UserIcon } from '@/ui/components';

const UserMenu = () => {
  const { userId } = useUserStore();

  return (
    <>
      {!userId ? (
        <Link href="/sign-in">
          <UserIcon />
        </Link>
      ) : (
        <UserAction user={userId} />
      )}
    </>
  );
};

export default UserMenu;
