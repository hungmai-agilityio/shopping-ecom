'use client';

import { useState } from 'react';

// Constants
import { INPUT_TYPE } from '@/constants';

// Component
import { Input } from '@/ui/components';

const SendEmail = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSend = () => {
    alert('Update later');
    setValue('');
  };

  return (
    <Input
      placeholder="Enter your email"
      icon="/icon-send.svg"
      value={value}
      onChange={handleChange}
      className="border-white bg-black text-white"
      type={INPUT_TYPE.EMAIL}
      onClick={handleSend}
    />
  );
};

export default SendEmail;
