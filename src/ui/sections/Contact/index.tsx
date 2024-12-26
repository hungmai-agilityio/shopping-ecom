'use client';

import { useState } from 'react';
import { TYPE } from '@/constants';
import { Button, Input } from '@/ui/components';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle change input value
  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value
      });
    };

  const handleSend = () => {
    alert('Update later');
  };

  return (
    <div className="w-full lg:h-card-lg h-full bg-white p-10 shadow-contact">
      <div className="lg:flex justify-between gap-7">
        <div className="w-full mb-5">
          <Input
            variant={TYPE.THIRD}
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange('name')}
          />
        </div>
        <div className="w-full mb-5">
          <Input
            variant={TYPE.THIRD}
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange('email')}
          />
        </div>
        <div className="w-full mb-5">
          <Input
            variant={TYPE.THIRD}
            placeholder="Your Phone *"
            value={formData.phone}
            onChange={handleChange('phone')}
          />
        </div>
      </div>
      <div className="mb-5">
        <textarea
          className="bg-gray-200 p-2 w-full resize-none outline-none text-dark"
          rows={8}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange('message')}
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSend}>Send Message</Button>
      </div>
    </div>
  );
};

export default ContactSection;
