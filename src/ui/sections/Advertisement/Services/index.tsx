import { CardSolution } from '@/ui/components';

const ServiceSection = () => {
  return (
    <section className="my-32 container flex justify-center lg:gap-20 gap-8 flex-wrap">
      <CardSolution
        src="/ship.svg"
        alt="icon shop"
        title="FREE AND FAST DELIVERY"
        desc="Free delivery for all orders over $140"
      />
      <CardSolution
        src="/services.svg"
        alt="icon services"
        title="24/7 CUSTOMER SERVICE"
        desc="Friendly 24/7 customer support"
      />
      <CardSolution
        src="/icon_secure.svg"
        alt="icon secure"
        title="MONEY BACK GUARANTEE"
        desc="We reurn money within 30 days"
      />
    </section>
  );
};

export default ServiceSection;
