import { SIZE, TYPE } from '@/constants';

export const btnSizeClasses = {
  [SIZE.SMALL]: 'w-btn-sm',
  [SIZE.MEDIUM]: 'lg:w-btn-md w-btn-sm',
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

export const inputTypeClasses = {
  [TYPE.PRIMARY]:
    'border border-dark rounded-md focus:ring-1 focus:ring-dark h-14',
  [TYPE.SECOND]: 'border-b border-gray-300 focus:border-dark h-12',
  [TYPE.THIRD]: 'bg-gray-100 rounded-md focus:ring-1 focus:ring-dark h-12'
};

export const avatarSizeClasses = {
  [SIZE.SMALL]: 'w-avatar-sm h-avatar-sm',
  [SIZE.MEDIUM]: 'w-avatar-md h-avatar-md',
  [SIZE.LARGE]: 'w-avatar-lg h-avatar-lg'
};