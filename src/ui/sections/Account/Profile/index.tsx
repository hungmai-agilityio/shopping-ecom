'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import bcrypt from 'bcryptjs';

// Constants
import { INPUT_TYPE, TYPE } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Components
import { Button, InputController } from '@/ui/components';

// Libs
import {
  checkPassword,
  ProfileSchema,
  setCookieUser,
  updateUser
} from '@/libs';
import { useRouter } from 'next/navigation';

type ProfileForm = z.infer<typeof ProfileSchema>;

interface ProfileProps {
  user: IUser;
}

const ProfileSection = ({ user }: ProfileProps) => {
  const [showNewPass, setShowNewPass] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<ProfileForm>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      newPassword: '',
      confirm: ''
    }
  });

  const onSubmit = async (data: ProfileForm) => {
    const { newPassword, confirm, ...rest } = data;
    const isPasswordMatch = await checkPassword(newPassword, user.password);
    const hashedPassword = await bcrypt.hash(data.newPassword, 10);

    if (isPasswordMatch) {
      alert('The new password cannot be the same as the old password');
      return;
    }

    const updatedUser: IUser = {
      ...user,
      ...rest,
      password: hashedPassword || user.password,
      updated_at: new Date().toISOString()
    };
    const response = await updateUser(user.id, updatedUser);
    setCookieUser(updatedUser);

    if (response.data) {
      alert('Update profile success');
    }

    router.refresh();
  };

  // Toggle password visibility
  const toggleShowNewPassword = () => setShowNewPass(!showNewPass);
  const toggleShowConfirm = () => setShowConfirm(!showConfirm);

  const handleResetForm = () => {
    reset();
  };

  return (
    <div className="bg-white shadow-md py-10 px-8">
      <h2 className="text-primary font-semibold text-lg mb-6">
        Edit Your Profile
      </h2>
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
              isRequired
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
        <div className="space-y-6">
          <InputController
            name="newPassword"
            placeholder="New Password"
            label="New Password"
            type={showNewPass ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD}
            control={control}
            variant={TYPE.THIRD}
            showIcon={showNewPass ? '/eye.svg' : '/eye-hide.svg'}
            toggleShow={toggleShowNewPassword}
          />
          <InputController
            name="confirm"
            placeholder="Confirm New Password"
            label="Confirm Password"
            type={showConfirm ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD}
            control={control}
            variant={TYPE.THIRD}
            showIcon={showConfirm ? '/eye.svg' : '/eye-hide.svg'}
            toggleShow={toggleShowConfirm}
          />
        </div>

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
      </form>
    </div>
  );
};

export default ProfileSection;
