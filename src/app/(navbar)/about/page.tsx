// Constants
import { slideStaff } from '@/constants';

// Sections
import { AdvertisementSale, ServiceSection, StorySection } from '@/ui/sections';

// Components
import { Breadcrumb, CardInfo } from '@/ui/components';

const About = () => {
  return (
    <div className="my-20">
      <div className="container">
        <Breadcrumb />
      </div>
      <section className="my-20">
        <StorySection />
      </section>
      <AdvertisementSale />
      <section className="my-20 flex justify-center gap-16">
        {slideStaff.map((item) => (
          <CardInfo
            image={item.image}
            name={item.name}
            desc={item.desc}
            key={item.id}
          />
        ))}
      </section>
      <ServiceSection />
    </div>
  );
};

export default About;
