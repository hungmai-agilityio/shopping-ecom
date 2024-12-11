'use client';
import Image from 'next/image';
import { useCallback } from 'react';

// Constants
import { SIZE, TYPE } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Components
import { Button, Icon, ModalAddress } from '@/ui/components';

// Hooks
import { useModal } from '@/hooks/useModal';

interface AddressProps {
  user: IUser;
}
const AddressSection = ({ user }: AddressProps) => {
  const addModal = useModal();
  const editModal = useModal();

  const handleOpenAddModal = useCallback(() => {
    addModal.openModal();
  }, []);

  const handleOpenEditModal = useCallback(() => {
    editModal.openModal();
  }, []);

  return (
    <div className="bg-white shadow-md h-full">
      <div className="flex justify-between gap-5 items-center border-b border-gray-500 py-10 px-8">
        <h2 className="text-lg text-dark font-medium">My Address</h2>
        <Button onClick={handleOpenAddModal}>
          <div className="flex items-center gap-5 justify-center">
            <Image
              src="/icon-add.svg"
              alt="icon add"
              width={24}
              height={24}
              priority
            />
            <span>New Address</span>
          </div>
        </Button>
      </div>
      <div className="p-5">
        {user.address.map((item) => (
          <div className="border-b border-gray-300 py-4" key={item.id}>
            <div className="flex justify-between">
              <div>
                <p className="text-base text-dark leading-loose">
                  Phone:
                  <span className="ml-2 text-primary">{user.phone}</span>
                </p>
                {item.apartment && (
                  <p className="leading-loose">
                    Apartment:
                    <span className="ml-2 text-primary font-medium">
                      {item.apartment}
                    </span>
                  </p>
                )}
                {item.street && (
                  <p className="leading-loose">
                    Street:
                    <span className="ml-2 text-primary font-medium">
                      {item.street}
                    </span>
                  </p>
                )}
                {item.city && (
                  <p className="leading-loose">
                    City:
                    <span className="ml-2 text-primary font-medium">
                      {item.city}
                    </span>
                  </p>
                )}
                {user.company && (
                  <p className="leading-loose">
                    Company:
                    <span className="ml-2 text-primary font-medium">
                      {user.company}
                    </span>
                  </p>
                )}
                {item.isDefault === true && (
                  <p className="mt-2 p-1 w-20 border border-primary text-center text-primary font-medium">
                    Default
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex items-end">
                  <Icon
                    src="/icon-edit.svg"
                    alt="icon edit"
                    width={24}
                    height={24}
                    onClick={handleOpenEditModal}
                    priority
                  />
                  {!item.isDefault && (
                    <Button
                      variant={TYPE.THIRD}
                      size={SIZE.SMALL}
                      disabled={item.isDefault}
                    >
                      Delete
                    </Button>
                  )}
                </div>
                <Button
                  variant={TYPE.SECOND}
                  size={SIZE.SMALL}
                  disabled={item.isDefault}
                >
                  Set Default
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalAddress
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onClick={() => {}}
      />
      <ModalAddress
        isOpen={editModal.isOpen}
        onClose={editModal.closeModal}
        onClick={() => {}}
        isEdit
      />
    </div>
  );
};

export default AddressSection;
