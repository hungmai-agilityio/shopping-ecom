'use server';

import { revalidatePath } from 'next/cache';
import { getUserId, postAvatar, updateUser } from '@/libs';
import { Address, IUser } from '@/interface';
import { END_POINT } from '@/constants';


export const updateUserProfile = async (user: IUser, data: Partial<IUser>, selectedFile?: File) => {
  const imageUrl = selectedFile ? await postAvatar(selectedFile) : user.avatar;

  const updatedUser: IUser = {
    ...user,
    ...data,
    avatar: imageUrl,
    updated_at: new Date().toISOString(),
  };

  await updateUser(user.id, updatedUser);
  return updatedUser
};

export const addAddress = async (userId: string, newAddress: Address) => {
  const user: IUser = await getUserId(userId);
  const updatedUser = {
    ...user,
    updated_at: new Date().toISOString(),
    address: [...user.address, newAddress],
  };

  await updateUser(userId, updatedUser);
  revalidatePath(END_POINT.ACCOUNT);

  return updatedUser
};

export const editAddress = async (userId: string, updatedAddress: Address) => {
  const user: IUser = await getUserId(userId);
  const updatedUser = {
    ...user,
    address: user.address.map((addr) =>
      addr.id === updatedAddress.id ? updatedAddress : addr
    ),
  };

  await updateUser(userId, updatedUser);
  revalidatePath(END_POINT.ACCOUNT);

  return updatedUser

};

export const setDefaultAddress = async (userId: string, addressId: string) => {
  const user: IUser = await getUserId(userId);

  const updatedAddresses = user.address.map((addr) =>
    addr.id === addressId
      ? { ...addr, isDefault: true }
      : { ...addr, isDefault: false }
  );

  const sortedAddresses = updatedAddresses.sort((a, b) =>
    b.isDefault ? 1 : a.isDefault ? -1 : 0
  );

  const updatedUser = {
    ...user,
    address: sortedAddresses,
  };

  await updateUser(userId, updatedUser);
  revalidatePath(END_POINT.ACCOUNT);

  return updatedUser;
};
export const removeAddress = async (userId: string, addressId: string) => {
  const user: IUser = await getUserId(userId);
  const updatedUser = {
    ...user,
    address: user.address.filter((addr) => addr.id !== addressId),
  };

  await updateUser(userId, updatedUser);
  revalidatePath(END_POINT.ACCOUNT);

  return updatedUser
};
