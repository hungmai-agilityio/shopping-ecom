'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

// Constants
import { inter, popping, SIZE } from '@/constants';

// Interfaces
import { IProduct } from '@/interface';

// Components
import {
  Button,
  ColorPicker,
  Icon,
  QuantityHorizontal,
  Rating,
  SizePicker
} from '@/ui/components';

interface DetailProps {
  product: IProduct;
}

const ProductDetail = ({ product }: DetailProps) => {
  const [color, setColor] = useState<string>(product.colors![0]);
  const [size, setSize] = useState<string>(
    product.sizes ? product.sizes[0] : ''
  );

  return (
    <section
      className={clsx(
        'md:flex flex-wrap justify-center gap-10 container',
        popping.className
      )}
    >
      <div className="lg:block hidden my-4 gap-6">
        {product.imageDetail?.map((item, index) => (
          <div
            key={index}
            className="bg-gray-light w-44 h-36 mb-5 flex justify-center items-center"
          >
            <Image
              src={item}
              alt="detail-img"
              width={120}
              height={120}
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      <div className="lg:w-card-detail lg:h-card-detail w-full h-[250px] bg-gray-light rounded-md flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={446}
          height={315}
          objectFit="contain"
          className="lg:w-[446px] lg:h-[315px] w-[200px] h-[200px]"
          priority
        />
      </div>

      <div>
        <div className="border-b border-dark">
          <h1
            className={clsx(
              'font-semibold md:text-2xl text-base',
              inter.className
            )}
          >
            {product.name}
          </h1>
          <div className="mt-4 flex items-center md:gap-5 gap-2">
            <Rating count={product.ratings} />
            <p className="text-gray-400 md:text-base text-xs">
              ({product.reviewCount} Reviews)
            </p>
            <p className="border-l border-gray-600 px-6 md:text-base text-xs text-success">
              In Stock
            </p>
          </div>

          <p
            className={clsx(
              'md:text-2xl text-base my-5 text-gray-600',
              inter.className
            )}
          >
            ${product.price}
          </p>

          <p className="my-5 md:text-base text-xs">{product.description}</p>
        </div>
        <div className="my-5">
          <div className="flex gap-7 items-center">
            <p
              className={clsx(
                'lg:text-2xl text-base my-5 text-gray-600',
                inter.className
              )}
            >
              Colours:
            </p>

            <ColorPicker
              colors={product.colors!}
              onClick={() => {}}
              selectedColor={color}
            />
          </div>
          {product.sizes && (
            <div className="my-5 flex gap-7 items-center">
              <p
                className={clsx(
                  'lg:text-2xl text-base my-5 text-gray-600',
                  inter.className
                )}
              >
                Size:
              </p>
              {product.sizes?.map((item, index) => (
                <SizePicker
                  key={index}
                  size={item}
                  onClick={() => {}}
                  selected={size}
                />
              ))}
            </div>
          )}

          <div className="flex flex-wrap my-5 gap-5 items-center">
            <QuantityHorizontal
              value={1}
              onChange={() => {}}
              max={product.stock}
            />
            <Button size={SIZE.MEDIUM}>Buy Now</Button>
            <div className="w-10 h-10 border border-dark rounded-lg flex justify-center items-center">
              <Icon
                src="/heart.svg"
                alt="heart-icon"
                width={32}
                height={32}
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="mt-10 max-w-card-md h-full border border-dark rounded-md">
            <div className="border-b border-dark p-5 flex gap-5">
              <Icon
                src="/ship-dark.svg"
                alt="ship icon"
                width={40}
                height={40}
              />
              <div className="flex-col gap-3">
                <p className="font-medium text-xl">Free Delivery</p>
                <span className="underline text-sm">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="p-5 flex gap-5">
              <Icon
                src="/return.svg"
                alt="return icon"
                width={40}
                height={40}
              />
              <div className="flex-col gap-3">
                <p className="font-medium text-xl">Return Delivery</p>
                <span className="underline text-sm">
                  Free 30 Days Delivery Returns. Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
