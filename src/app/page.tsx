'use client';
import { TYPE } from '@/constants';
import Icon from '@/ui/components/common/Icon';

const IconList = () => {
  const handleClick = (name: string) => {
    alert(`You clicked on ${name}`);
  };

  return (
    <div className="flex space-x-4">
      <Icon
        src="/cart.svg"
        alt="Home Icon"
        width={36}
        height={36}
        onClick={() => handleClick('Home')}
        variant={TYPE.SECOND}
      />
      <Icon
        src="/heart.svg"
        alt="Home Icon"
        width={34}
        height={34}
        onClick={() => handleClick('Home')}
        variant={TYPE.SECOND}
      />
      <Icon
        src="/cart.svg"
        alt="Home Icon"
        width={20}
        height={20}
        onClick={() => handleClick('Home')}
      />
    </div>
  );
};

export default IconList;
