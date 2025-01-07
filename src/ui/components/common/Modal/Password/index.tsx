'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';

// Components
import { InputController, Modal, ToastMessage } from '@/ui/components';

// Libs
import { checkPassword, passwordSchema, updateUser } from '@/libs';

// Constants
import { STATUS, MESSAGE_VALID } from '@/constants';
import { IUser } from '@/interface';

type PasswordForm = z.infer<typeof passwordSchema>;

interface ModalPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser;
}

const ModalPassword = ({ isOpen, onClose, user }: ModalPasswordProps) => {
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showNewPass, setShowNewPass] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirm: ''
    }
  });
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setToast(null);
      reset();
    }
  }, [isOpen, reset]);

  const handleFormSubmit = async (data: PasswordForm) => {
    const { password, newPassword } = data;
    let hashedPassword = user.password;

    const isPasswordCorrect = await checkPassword(password, user.password);
    if (!isPasswordCorrect) {
      setToast({
        status: STATUS.ERROR,
        message: MESSAGE_VALID.CONFIRM_ERROR
      });
      return;
    }

    if (newPassword) {
      if (await checkPassword(newPassword, user.password)) {
        setToast({
          status: STATUS.ERROR,
          message: MESSAGE_VALID.NEW_PASS_ERROR
        });
        return;
      }

      hashedPassword = await bcrypt.hash(newPassword, 10);
    }

    const updatedUser = {
      ...user,
      password: hashedPassword,
      updated_at: new Date().toISOString()
    };
    const response = await updateUser(user.id, updatedUser);

    if (response.data) {
      onClose();
      router.refresh();
    }
  };

  const toggleShowPassword = () => setShowPass(!showPass);
  const toggleShowNewPassword = () => setShowNewPass(!showNewPass);
  const toggleShowConfirm = () => setShowConfirm(!showConfirm);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Change Password"
      btnSecond="Change"
      onClick={handleSubmit(handleFormSubmit)}
      styles="fixed top-0 left-0 w-full h-full overflow-y-auto md:relative md:max-w-3xl md:h-auto md:overflow-visible"
    >
      <div className="flex flex-col gap-8">
        {toast && (
          <ToastMessage status={toast.status} message={toast.message} />
        )}
        <InputController
          control={control}
          name="password"
          label="Current Password"
          type={showPass ? 'text' : 'password'}
          isRequired
          showIcon={showPass ? '/eye.svg' : '/eye-hide.svg'}
          toggleShow={toggleShowPassword}
        />
        <InputController
          control={control}
          name="newPassword"
          label="New Password"
          type={showNewPass ? 'text' : 'password'}
          isRequired
          showIcon={showNewPass ? '/eye.svg' : '/eye-hide.svg'}
          toggleShow={toggleShowNewPassword}
        />
        <InputController
          control={control}
          name="confirm"
          label="Confirm New Password"
          type={showConfirm ? 'text' : 'password'}
          isRequired
          showIcon={showConfirm ? '/eye.svg' : '/eye-hide.svg'}
          toggleShow={toggleShowConfirm}
        />
      </div>
    </Modal>
  );
};

export default ModalPassword;
