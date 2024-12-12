'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Intefaces
import { IUser } from '@/interface';

// Components
import { InputController } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

interface BillingDetailsProps {
  user: IUser;
}

const BillingDetails = ({ user }: BillingDetailsProps) => {
  const defaultAddress = user.address.find((addr) => addr.isDefault) || {
    id: '',
    street: '',
    city: '',
    apartment: '',
    isDefault: true
  };

  const [currentUser, setCurrentUser] = useState<IUser>(user);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...currentUser,
      address: defaultAddress
    }
  });

  const onSubmit = (data: any) => {
    const updatedUser: IUser = {
      ...currentUser,
      ...data,
      address: currentUser.address.map((addr) =>
        addr.id === data.address.id
          ? { ...data.address, isDefault: true }
          : { ...addr, isDefault: false }
      )
    };

    setCurrentUser(updatedUser);

    // TODO: UPDATE USER ADDRESS LATER
  };

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Billing Details</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
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
            onChange={handleSubmit(onSubmit)}
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
