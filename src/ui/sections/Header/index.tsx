// Constants
import { navItems } from '@/constants';

// Components
import { BurgerMenu, Logo, Navbar } from '@/ui/components';
import { UserMenu } from '@/ui/sections';

const Header = () => {
  return (
    <header className="py-8 border-b h-24 border-dark">
      <div className="lg:flex hidden justify-between items-center bg-white shadow-header container">
        <Logo />
        <div className="flex justify-center gap-10 items-end">
          <Navbar items={navItems} styles="flex gap-12" />
        </div>
        <UserMenu />
      </div>
      <div className="lg:hidden flex justify-between items-center px-5">
        <BurgerMenu items={navItems} />
        <Logo />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
