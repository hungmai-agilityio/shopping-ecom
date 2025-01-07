'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Constants
import { MESSAGE_API, SIZE, STATUS, TYPE } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Components
import {
  Avatar,
  Button,
  InputController,
  ModalPassword,
  ToastMessage
} from '@/ui/components';

// Libs
import { postAvatar, profileSchema, updateUser } from '@/libs';
import { useModal } from '@/hooks/useModal';

type ProfileForm = z.infer<typeof profileSchema>;

interface ProfileProps {
  user: IUser;
}

const ProfileSection = ({ user }: ProfileProps) => {
  const [avatar, setAvatar] = useState<string | StaticImport>(
    user.avatar || ''
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const router = useRouter();
  const passModal = useModal();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newAvatarURL = URL.createObjectURL(file);
      setAvatar(newAvatarURL);
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: ProfileForm) => {
    const imageUrl = selectedFile
      ? await postAvatar(selectedFile)
      : user.avatar;

    const updatedUser: IUser = {
      ...user,
      ...data,
      avatar: imageUrl,
      updated_at: new Date().toISOString()
    };

    const response = await updateUser(user.id, updatedUser);
    setToast({
      status: response.data ? STATUS.SUCCESS : STATUS.ERROR,
      message: response.data
        ? MESSAGE_API.UPDATE_PROFILE_SUCCESS
        : MESSAGE_API.UPDATE_PROFILE_ERROR
    });

    if (response.data) router.refresh();
  };

  const handleResetForm = () => {
    reset();
  };

  return (
    <div className="bg-white shadow-md py-10 px-8">
      <div className="md:flex justify-between items-center gap-5">
        <h2 className="text-primary font-semibold text-lg mb-6">
          Edit Your Profile
        </h2>
        <div className="relative group">
          <Avatar
            src={avatar}
            alt={user.firstName}
            isCircle
            size={SIZE.LARGE}
          />
          <label
            htmlFor="upload-image"
            className="absolute bg-primary rounded-full opacity-60 w-6 h-6 left-14 top-14 justify-center group-hover:flex hidden cursor-pointer"
          >
            <Image
              src="/icon-add.svg"
              alt="add icon"
              fill
              className="p-1"
              priority
            />
          </label>
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-8">
          <div className="basis-1/2 lg:mb-0 mb-10">
            <InputController
              name="firstName"
              label="First Name"
              placeholder="First Name"
              control={control}
              isRequired
              variant={TYPE.THIRD}
            />
          </div>
          <div className="basis-1/2 lg:mb-0 mb-10">
            <InputController
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              control={control}
              variant={TYPE.THIRD}
            />
          </div>
        </div>
        <div className="my-10">
          <InputController
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            isRequired
            control={control}
            variant={TYPE.THIRD}
          />
        </div>

        <div className="flex justify-between items-center">
          <Button
            type="button"
            className="text-primary hover:underline text-base"
            onClick={passModal.openModal}
          >
            Change password
          </Button>
          <div className="my-10 flex justify-end gap-10 items-center">
            <Button
              type="button"
              className="text-dark hover:underline text-base"
              disabled={isSubmitting}
              onClick={handleResetForm}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Save Changes
            </Button>
          </div>
        </div>
      </form>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
      <ModalPassword
        isOpen={passModal.isOpen}
        onClose={passModal.closeModal}
        user={user}
      />
    </div>
  );
};

export default ProfileSection;
