import { clsx } from 'clsx';
import { Metadata } from 'next';

// Constants
import { popping } from '@/constants';

// Sections
import { CardContact, ContactSection } from '@/ui/sections';

// Components
import { Breadcrumb } from '@/ui/components';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us for support, inquiries, or feedback'
};

const Contact = () => {
  return (
    <div className={clsx('container my-20', popping.className)}>
      <Breadcrumb />
      <section className=" lg:flex gap-10 my-20">
        <div className="flex justify-center">
          <CardContact />
        </div>
        <ContactSection />
      </section>
    </div>
  );
};

export default Contact;
