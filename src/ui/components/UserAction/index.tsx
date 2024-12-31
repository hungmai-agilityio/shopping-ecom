'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

// Constants
import { END_POINT, QUERY } from '@/constants';

// Components
import { Badge, Icon, UserDropdown } from '@/ui/components';

// Interfaces
import { ICart, IWishlist } from '@/interface';

// Libs
import { getUserCart, getUserWishList } from '@/libs';

interface UserActionProps {
  user: string;
}

const UserAction = ({ user }: UserActionProps) => {
  const { data: cart = [] } = useQuery<ICart[]>({
    queryKey: [QUERY.CART],
    queryFn: () => getUserCart(user),
    enabled: !!user
  });

  const { data: wishlist = [] } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user),
    enabled: !!user
  });

  return (
    <div className="flex gap-8 items-center">
      <div className="lg:flex hidden gap-8 items-center">
        <Link href={END_POINT.WISHLIST}>
          <Badge quantity={wishlist?.length || 0}>
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
          <Badge quantity={cart?.length || 0}>
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
      <UserDropdown cartLength={cart.length} wishlistLength={wishlist.length} />
    </div>
  );
};

export default UserAction;
