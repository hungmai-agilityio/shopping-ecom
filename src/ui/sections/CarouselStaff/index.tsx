'use client';

import { useState } from 'react';
import { CardInfo } from '@/ui/components';

interface CarouselInfoItem {
  id: string;
  image: string;
  name: string;
  desc: string;
}

interface CarouselStaffProps {
  slides: CarouselInfoItem[];
}

const CarouselStaff = ({ slides }: CarouselStaffProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(slides.length / itemsPerPage);

  const currentSlides = slides.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="overflow-hidden container">
      <div className="flex flex-wrap gap-6 justify-center">
        {currentSlides.map((staff) => (
          <CardInfo
            key={staff.id}
            image={staff.image}
            name={staff.name}
            desc={staff.desc}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            aria-label={`${index}-picker`}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CarouselStaff;
