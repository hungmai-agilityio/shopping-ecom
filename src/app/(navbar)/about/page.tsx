// Constants
import { slideStaff } from '@/constants';

// Sections
import { AdvertisementSale, ServiceSection, StorySection } from '@/ui/sections';

// Components
import { Breadcrumb } from '@/ui/components';
import { CarouselStaff } from '@/ui/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About'
};

const About = () => {
  return (
    <div className="my-20">
      <div className="container">
        <Breadcrumb />
      </div>
      <StorySection />
      <AdvertisementSale />
      <CarouselStaff slides={slideStaff} />
      <ServiceSection />
    </div>
  );
};

export default About;
