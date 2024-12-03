import { inter } from '@/constants';
import { CardPromo, Heading, Tag } from '@/ui/components';
import { clsx } from 'clsx';
import Link from 'next/link';

const Arrival = () => {
  return (
    <>
      <Tag label="Featured" />
      <Heading styles="my-10">New Arrival</Heading>
      <div className="flex gap-7">
        <CardPromo src="/arrival-1.png" alt="ads-1" width={750} height={740}>
          <h5 className={clsx('font-semibold text-2xl', inter.className)}>
            PlayStation 5
          </h5>
          <p className="text-sm my-3">
            Black and White version of the PS5 coming out on sale.
          </p>
          <Link href="#" className="underline">
            Shop Now
          </Link>
        </CardPromo>
        <div>
          <CardPromo src="/arrival-2.png" alt="ads-2" width={750} height={404}>
            <h5 className={clsx('font-semibold text-2xl', inter.className)}>
              Women's Collections
            </h5>
            <p className="text-sm my-3">
              Featured woman collections that give you another vibe.
            </p>
            <Link href="#" className="underline">
              Shop Now
            </Link>
          </CardPromo>
          <div className="mt-8 flex gap-7">
            <CardPromo
              src="/arrival-3.png"
              alt="ads-3"
              width={360}
              height={304}
            >
              <h5 className={clsx('font-semibold text-2xl', inter.className)}>
                Speakers
              </h5>
              <p className="text-sm my-3">Amazon wireless speakers</p>
              <Link href="#" className="underline">
                Shop Now
              </Link>
            </CardPromo>
            <CardPromo
              src="/arrival-4.png"
              alt="ads-4"
              width={360}
              height={304}
            >
              <h5 className={clsx('font-semibold text-2xl', inter.className)}>
                Perfume
              </h5>
              <p className="text-sm my-3">GUCCI INTENSE OUD EDP</p>
              <Link href="#" className="underline">
                Shop Now
              </Link>
            </CardPromo>
          </div>
        </div>
      </div>
    </>
  );
};
export default Arrival;
