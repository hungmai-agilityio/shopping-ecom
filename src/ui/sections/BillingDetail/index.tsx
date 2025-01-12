'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';

// Interfaces
import { IUser, Address } from '@/interface';

// Components
import { InputController } from '@/ui/components';

// Constants
import { MESSAGE_API, TYPE } from '@/constants';

// Libs
import { updateUser, billingSchema } from '@/libs';
import { useToast } from '@/stores/toast';

interface BillingDetailsProps {
  user: IUser;
}

const BillingDetails = ({ user }: BillingDetailsProps) => {
  const defaultAddress =
    user.address.find((addr) => addr.isDefault) || user.address[0];

  const [currentUser, setCurrentUser] = useState<IUser>(user);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const toast = useToast();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { isDirty }
  } = useForm({
    resolver: zodResolver(billingSchema),
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

    if (JSON.stringify(formAddress) === JSON.stringify(defaultAddress)) return;

    const updatedAddress: Address = {
      ...formAddress,
      id: uuidv4(),
      isDefault: true
    };

    const updatedAddresses = currentUser.address
      .map((addr) => (addr.isDefault ? { ...addr, isDefault: false } : addr))
      .concat(updatedAddress);

    const sortedAddresses = updatedAddresses.sort((a, b) =>
      b.isDefault ? 1 : a.isDefault ? -1 : 0
    );

    const addressUpdate: IUser = {
      ...currentUser,
      address: sortedAddresses
    };

    setCurrentUser(addressUpdate);

    const response = await updateUser(user.id, addressUpdate);
    response.data
      ? toast.success(MESSAGE_API.UPDATE_PROFILE_SUCCESS)
      : toast.error(MESSAGE_API.UPDATE_PROFILE_ERROR);
  };

  const onCheckboxChange = () => {
    setIsChecked(true);
    handleSubmit(onSubmit)();
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
            isDisabled
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
            isDisabled
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
    </section>
  );
};

export default BillingDetails;
