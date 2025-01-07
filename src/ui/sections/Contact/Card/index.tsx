import { Icon } from '@/ui/components';

const CardContact = () => {
  return (
    <div className="w-96 bg-white shadow-contact py-10 px-9 mb-10">
      <div className="flex items-center gap-5">
        <Icon src="/icons-phone.svg" alt="icon phone" width={40} height={40} />
        <p className="text-base font-medium">Call To Us</p>
      </div>
      <p className="my-6 text-sm">We are available 24/7, 7 days a week.</p>
      <p className="my-6 text-sm">
        <a href="tel:+8801611112222">Phone: +8801611112222</a>
      </p>
      <span className="w-full h-px bg-gray-300 block"></span>
      <div className="flex items-center gap-5 my-6">
        <Icon src="/icons-mail.svg" alt="icon mail" width={40} height={40} />
        <p className="text-base font-medium">Write To US</p>
      </div>
      <p className="my-6 text-sm">
        Fill out our form and we will contact you within 24 hours.
      </p>
      <p className="my-6 text-sm">
        <a href="mailto:customer@exclusive.com">
          Emails: customer@exclusive.com
        </a>
      </p>
      <p className="my-6 text-sm">
        <a href="mailto:support@exclusive.com">Emails: support@exclusive.com</a>
      </p>
    </div>
  );
};

export default CardContact;
