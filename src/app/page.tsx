// Libs
import { getUserCookie } from '@/libs';

// Sections
import { FlashSale } from '@/ui/sections';

const Home = async () => {
  const user = await getUserCookie();

  return <FlashSale user={user} />;
};

export default Home;
