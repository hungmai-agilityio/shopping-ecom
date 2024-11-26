// Constants
import { navItems } from '@/constants';

// Components
import { Logo, Navbar } from '@/ui/components';

const Header = () => {
  return (
    <header className=" py-8 border-b h-24 border-dark">
      <div className="w-full flex items-center bg-white shadow-header container">
        <Logo />
        <div className="w-full lg:flex lg:justify-center hidden gap-10 items-start">
          <Navbar items={navItems} styles="flex gap-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
