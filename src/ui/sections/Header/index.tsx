import Link from 'next/link';

// Constants
import { END_POINT, navItems } from '@/constants';
import { IUser } from '@/interface';

// Components
import {
  BurgerMenu,
  Logo,
  Navbar,
  UserAction,
  UserIcon
} from '@/ui/components';

interface HeaderProps {
  user: IUser;
}
const Header = ({ user }: HeaderProps) => {
  return (
    <header className="py-8 border-b h-24 border-dark">
      <div className="lg:flex hidden justify-between items-center bg-white shadow-header container">
        <Logo />
        <div className="flex justify-center gap-10 items-end">
          <Navbar items={navItems} styles="flex gap-12" />
        </div>
        {!user && (
          <Link href={END_POINT.SIGN_IN}>
            <UserIcon />
          </Link>
        )}
        {user && <UserAction user={user} />}
      </div>
      <div className="lg:hidden flex justify-between items-center px-5">
        <BurgerMenu items={navItems} />
        <Logo />
        {!user && (
          <Link href={END_POINT.SIGN_IN}>
            <UserIcon />
          </Link>
        )}
        {user && <UserAction user={user} />}
      </div>
    </header>
  );
};

export default Header;
