'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Interfaces
import { IUser, Address } from '@/interface';

// Components
import { InputController, ToastMessage } from '@/ui/components';

// Constants
import { MESSAGE_API, STATUS, TYPE } from '@/constants';

// Utility
import { v4 as uuidv4 } from 'uuid';
import { setCookieUser, updateUser } from '@/libs';

interface BillingDetailsProps {
  user: IUser;
}

const BillingDetails = ({ user }: BillingDetailsProps) => {
  const defaultAddress = user.address.find((addr) => addr.isDefault) || {
    id: '',
    street: '',
    city: '',
    apartment: '',
    phone: '',
    company: '',
    isDefault: true
  };

  const [currentUser, setCurrentUser] = useState<IUser>(user);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const {
    control,
    getValues,
    handleSubmit,
    formState: { isDirty }
  } = useForm({
    defaultValues: {
      ...currentUser,
      address: defaultAddress
    }
  });

  useEffect(() => {
    if (isDirty) {
      setIsChecked(false);
    }
  }, [isDirty]);

  const onSubmit = async () => {
    const formAddress = getValues('address');
    const defaultAddress = currentUser.address.find((addr) => addr.isDefault);

    if (JSON.stringify(formAddress) === JSON.stringify(defaultAddress)) {
      return;
    }

    const updatedAddress: Address = {
      ...formAddress,
      id: uuidv4(),
      isDefault: true
    };

    const addressUpdate: IUser = {
      ...currentUser,
      address: currentUser.address
        .map((addr) => (addr.isDefault ? { ...addr, isDefault: false } : addr))
        .concat(updatedAddress)
    };

    setCurrentUser(addressUpdate);
    setIsChecked(true);
    setCookieUser(addressUpdate);

    const response = await updateUser(user.id, addressUpdate);
    setToast({
      status: response.data ? STATUS.SUCCESS : STATUS.ERROR,
      message: response.data
        ? MESSAGE_API.UPDATE_PROFILE_SUCCESS
        : MESSAGE_API.UPDATE_PROFILE_ERROR
    });
  };

  const onCheckboxChange = () => {
    const formAddress = getValues('address');
    const defaultAddress = currentUser.address.find((addr) => addr.isDefault);

    if (JSON.stringify(formAddress) !== JSON.stringify(defaultAddress)) {
      setIsChecked(true);
      handleSubmit(onSubmit)();
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Billing Details</h3>
      <form className="my-10">
        <div className="my-10">
          <InputController
            name="firstName"
            label="First name"
            control={control}
            isRequired
            variant={TYPE.THIRD}
          />
        </div>
        <div className="my-10">
          <InputController
            name="address.company"
            label="Company name"
            control={control}
            variant={TYPE.THIRD}
          />
        </div>
        <div className="my-10">
          <InputController
            name="address.street"
            label="Street address"
            control={control}
            isRequired
            variant={TYPE.THIRD}
          />
        </div>
        <div className="my-10">
          <InputController
            name="address.apartment"
            label="Apartment, floor, etc. (optional)"
            control={control}
            variant={TYPE.THIRD}
          />
        </div>
        <div className="my-10">
          <InputController
            name="address.city"
            label="Town/City"
            isRequired
            control={control}
            variant={TYPE.THIRD}
          />
        </div>
        <div className="my-10">
          <InputController
            name="address.phone"
            label="Phone number"
            isRequired
            control={control}
            variant={TYPE.THIRD}
          />
        </div>
        <div className="my-10">
          <InputController
            name="email"
            label="Email address"
            isRequired
            control={control}
            variant={TYPE.THIRD}
          />
        </div>

        <div className="my-10 flex gap-3 items-center">
          <input
            type="checkbox"
            className="h-6 w-6 accent-primary rounded-md"
            checked={isChecked || !isDirty}
            onChange={onCheckboxChange}
          />
          <span className="text-base">
            Save this information for faster check-out next time
          </span>
        </div>
      </form>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </section>
  );
};

export default BillingDetails;
