import { SIZE, STATUS, TYPE } from '@/constants';

export const btnSizeClasses = {
  [SIZE.SMALL]: 'w-btn-sm h-[45px]',
  [SIZE.MEDIUM]: 'lg:w-btn-md w-btn-sm',
  [SIZE.LARGE]: 'w-full'
};

export const btnTypeClasses = {
  [TYPE.PRIMARY]: 'h-14 bg-primary text-white',
  [TYPE.SECOND]:
    'h-14 bg-white border border-black text-black hover:bg-primary hover:text-white hover:border-transparent disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-black',
  [TYPE.THIRD]:
    'bg-transparent text-primary hover:underline disabled:hover:no-underline'
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

export const toastStyles = {
  [STATUS.SUCCESS]: 'bg-green-500',
  [STATUS.ERROR]: 'bg-red-500',
  [STATUS.WARNING]: 'bg-yellow-500'
};
