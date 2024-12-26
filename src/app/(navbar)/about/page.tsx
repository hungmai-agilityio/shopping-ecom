// Constants
import { slideStaff } from '@/constants';

// Sections
import { AdvertisementSale, ServiceSection, StorySection } from '@/ui/sections';

// Components
import { Breadcrumb } from '@/ui/components';
import { CarouselStaff } from '@/ui/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'AAbout page briefly introduces the website and its operators'
};

const About = () => {
  return (
    <div className="my-20 lg:px-0 px-4">
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
