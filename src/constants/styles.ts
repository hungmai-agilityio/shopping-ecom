import { SIZE, TYPE } from '@/constants';

export const btnSizeClasses = {
  [SIZE.SMALL]: 'max-w-btn-sm',
  [SIZE.MEDIUM]: 'max-w-btn-md',
  [SIZE.LARGE]: 'w-full'
};

export const btnTypeClasses = {
  [TYPE.PRIMARY]: 'bg-primary text-white',
  [TYPE.SECOND]:
    'bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent',
  [TYPE.THIRD]: 'bg-transparent text-primary hover:underline'
};

export const iconTypeClasses = {
  [TYPE.PRIMARY]: '',
  [TYPE.SECOND]: 'bg-gray-200 p-2 rounded-full',
  [TYPE.THIRD]: 'bg-white p-2 rounded-full'
};
