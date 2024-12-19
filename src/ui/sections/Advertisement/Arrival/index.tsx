import { inter } from '@/constants';
import { CardPromo, Heading, Tag } from '@/ui/components';
import { clsx } from 'clsx';
import Link from 'next/link';

const Arrival = () => {
  return (
    <>
      <Tag label="Featured" />
      <Heading styles="my-10">New Arrival</Heading>
      <div className="flex flex-wrap gap-7">
        <div className="w-full lg:w-[700px]">
          <CardPromo
            img="/arrival-1.png"
            name="ads-1"
            width="w-full"
            height="h-[700px]"
          >
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
        </div>
        <div className="w-full lg:w-[700px]">
          <CardPromo
            img="/arrival-2.png"
            name="ads-2"
            width="w-full"
            height="h-[340px]"
          >
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
          <div className="mt-8 md:flex hidden gap-7">
            <CardPromo
              img="/arrival-3.png"
              name="ads-3"
              width="w-[340px]"
              height="h-[330px]"
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
              img="/arrival-4.png"
              name="ads-4"
              width="w-[340px]"
              height="h-[330px]"
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
