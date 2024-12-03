import { TYPE } from '@/constants';
import { Button, Input } from '@/ui/components';

const ContactSection = () => {
  return (
    <div className="w-full lg:h-card-lg h-full bg-white p-10 shadow-contact">
      <div className="lg:flex justify-between gap-7">
        <div className="w-full mb-5">
          <Input variant={TYPE.THIRD} placeholder="Your Name *" />
        </div>
        <div className="w-full mb-5">
          <Input variant={TYPE.THIRD} placeholder="Your Email *" />
        </div>
        <div className="w-full mb-5">
          <Input variant={TYPE.THIRD} placeholder="Your Phone *" />
        </div>
      </div>
      <div className="mb-5">
        <textarea
          className="bg-gray-200 p-2 w-full resize-none outline-none text-dark"
          rows={8}
          placeholder="Your Message"
        />
      </div>
      <div className="flex justify-end">
        <Button>Send Message</Button>
      </div>
    </div>
  );
};

export default ContactSection;
