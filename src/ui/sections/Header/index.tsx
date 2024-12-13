// Constants
import { navItems } from '@/constants';
import { getUserCookie } from '@/libs';

// Components
import { BurgerMenu, Logo, Navbar, UserAction } from '@/ui/components';

const Header = async () => {
  const user = getUserCookie();
  return (
    <header className="py-8 border-b h-24 border-dark">
      <div className="lg:flex hidden justify-between items-center bg-white shadow-header container">
        <Logo />
        <div className="flex justify-center gap-10 items-end">
          <Navbar items={navItems} styles="flex gap-12" />
        </div>
        {user && <UserAction user={user} />}
      </div>
      <div className="lg:hidden flex justify-between items-center">
        <BurgerMenu items={navItems} />
        <Logo />
        {user && <UserAction user={user} />}
      </div>
    </header>
  );
};

export default Header;
