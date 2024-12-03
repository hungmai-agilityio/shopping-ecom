// Constants
import { slideStaff } from '@/constants';

// Sections
import { AdvertisementSale, ServiceSection, StorySection } from '@/ui/sections';

// Components
import { Breadcrumb } from '@/ui/components';
import { CarouselStaff } from '@/ui/sections';

const About = () => {
  return (
    <div className="my-20">
      <div className="container">
        <Breadcrumb />
      </div>
      <section className="container my-20">
        <StorySection />
      </section>
      <AdvertisementSale />
      <CarouselStaff slides={slideStaff} />
      <ServiceSection />
    </div>
  );
};

export default About;
