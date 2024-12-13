// Constants
import { navItems } from '@/constants';
import { getUserCookie } from '@/libs';

// Components
import { Logo, Navbar, UserAction } from '@/ui/components';

const Header = async () => {
  const user = getUserCookie();
  return (
    <header className=" py-8 border-b h-24 border-dark">
      <div className="w-full flex items-center bg-white shadow-header container">
        <Logo />
        <div className="w-full lg:flex lg:justify-center hidden gap-10 items-end">
          <Navbar items={navItems} styles="flex gap-12" />
        </div>
        {user && <UserAction user={user} />}
      </div>
    </header>
  );
};

export default Header;
