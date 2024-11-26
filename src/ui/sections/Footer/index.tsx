import Image from 'next/image';

// Constants
import { listAbout, listQuick, popping } from '@/constants';

// Components
import { SendEmail, List, Logo, Social } from '@/ui/components';

const Footer = () => {
  return (
    <footer
      className={`${popping.className} mt-20 bg-black text-white py-12 text-base`}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex flex-col gap-4">
            <Logo color="text-white" />
            <h3 className="text-xl font-medium">Subscribe</h3>
            <p className="mt-2 text-sm">Get 10% off your first order</p>
            <SendEmail />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            <a href="tel:015-88888-9999">+88015-88888-9999</a>
          </div>
          <List heading="About" items={listAbout} color="text-white" />
          <List heading="Quick Link" items={listQuick} color="text-white" />
          <div className="md:flex md:flex-col flex-row justify-between gap-4 font-medium">
            <h3 className="text-xl">Download App</h3>
            <p className="text-xs text-gray-400">
              Save $3 with App New User Only
            </p>
            <div className="mt-4 flex space-x-4">
              <Image src="/qr-code.webp" alt="qr code" width={76} height={76} />
              <div className="flex flex-col gap-4">
                <Image
                  src="/store.webp"
                  alt="Google Play"
                  width={110}
                  height={40}
                />
                <Image
                  src="/app-store.webp"
                  alt="App Store"
                  width={110}
                  height={40}
                />
              </div>
            </div>
            <div className="flex gap-5 mt-4">
              <Social src="/facebook.svg" alt="facebook" />
              <Social src="/twitter.svg" alt="twitter" />
              <Social src="/instagram.svg" alt="instagram" />
              <Social src="/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
        <p className="text-gray-300">
          &copy; Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
