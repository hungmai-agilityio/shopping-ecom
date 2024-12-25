'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { InputController, Modal } from '@/ui/components';

// Libs
import { addressSchema } from '@/libs';

type AddressForm = z.infer<typeof addressSchema>;

interface ModalAddressProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddressForm) => void;
  defaultValues?: AddressForm;
  isEdit?: boolean;
}

const ModalAddress = ({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
  isEdit = false
}: ModalAddressProps) => {
  const { control, handleSubmit, reset } = useForm<AddressForm>({
    resolver: zodResolver(addressSchema),
    defaultValues
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const handleFormSubmit = (data: AddressForm) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEdit ? 'Update Address' : 'Add New Address'}
      btnSecond={isEdit ? 'Update' : 'Add'}
      onClick={handleSubmit(handleFormSubmit)}
      styles="fixed top-0 left-0 w-full h-full overflow-y-auto md:relative md:max-w-3xl md:h-auto md:overflow-visible"
    >
      <div className="flex flex-col gap-8">
        <InputController control={control} name="apartment" label="Apartment" />
        <InputController
          control={control}
          name="street"
          label="Street"
          isRequired
        />
        <InputController
          control={control}
          name="city"
          label="City"
          isRequired
        />
        <InputController
          control={control}
          name="phone"
          label="Phone"
          isRequired
        />
        <InputController control={control} name="company" label="Company" />
      </div>
    </Modal>
  );
};

export default ModalAddress;
