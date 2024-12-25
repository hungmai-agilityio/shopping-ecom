'use client';

import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Icon } from '@/ui/components';

// Constants
import { popping } from '@/constants';

interface CarouselItem {
  id: string;
  image: string;
  content: string;
  title?: string;
  icon?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  showNavigation?: boolean;
  duration?: number;
}

const Carousel = ({
  items,
  autoPlay = true,
  showNavigation = true,
  duration = 5000
}: CarouselProps) => {
  const [current, setCurrent] = useState<number>(0);

  const handleChangeSlide = (index: number) => {
    setCurrent(index);
  };

  const goToNextSlide = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay) {
      timer = setInterval(goToNextSlide, duration);
    }
    return () => clearInterval(timer);
  }, [autoPlay, duration]);

  return (
    <div
      className={clsx(
        'relative h-slide bg-black overflow-hidden',
        popping.className
      )}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-none w-full h-slide flex items-center justify-between"
          >
            <div className="text-white z-10 px-10 md:px-20 w-full ">
              <div className="flex gap-4 items-center mb-4">
                {item.icon && (
                  <Icon
                    src={item.icon}
                    alt={item.title || ''}
                    width={49}
                    height={49}
                    style={{ objectFit: 'contain' }}
                  />
                )}

                {item.title && (
                  <p className="text-base font-bold">{item.title}</p>
                )}
              </div>
              <p className="lg:text-5xl text-2xl font-semibold">
                {item.content}
              </p>
              <div className="flex gap-4 items-center mt-10">
                <Link
                  href={'#'}
                  className="text-white lg:text-lg text-sm underline"
                >
                  Shop Now
                </Link>
                <Icon
                  src="/arrow-white.svg"
                  alt="arrow icon"
                  width={16}
                  height={14}
                  priority
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src={item.image}
                alt={'slide-image'}
                width={400}
                height={370}
                style={{
                  objectFit: 'contain',
                  maxHeight: '100%',
                  maxWidth: '100%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {showNavigation && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {items.map((_, index) => (
            <button
              aria-label="carousel-btn"
              key={index}
              className={clsx('w-3 h-3 rounded-full', {
                'bg-primary border-2 border-white': index === current,
                'bg-gray-500': index !== current
              })}
              onClick={handleChangeSlide.bind(null, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
