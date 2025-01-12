'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { MESSAGE_API, SIZE, STATUS, TYPE } from '@/constants';

// Interfaces
import { IUser, Address } from '@/interface';

// Components
import { Button, Icon, Modal, ModalAddress } from '@/ui/components';

// Hooks
import { useModal } from '@/hooks/useModal';

// Libs
import { updateUser } from '@/libs';
import { useToast } from '@/stores/toast';

interface AddressProps {
  user: IUser;
}

const AddressSection = ({ user }: AddressProps) => {
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const [currentUser, setCurrentUser] = useState<IUser>(user);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [addressToDelete, setAddressToDelete] = useState<string | null>(null);

  const toast = useToast();

  const defaultData = (address: Address) => ({
    street: address.street,
    city: address.city,
    apartment: address.apartment,
    company: address.company,
    phone: address.phone ?? ''
  });

  // Convert AddressForm to Address
  const convertToAddress = (
    form: {
      street: string;
      city: string;
      apartment?: string;
      company?: string;
      phone?: string;
    },
    existingAddress?: Address
  ): Address => ({
    id: existingAddress?.id || uuidv4(),
    street: form.street,
    city: form.city,
    apartment: form.apartment,
    phone: form.phone,
    company: form.company,
    isDefault: existingAddress?.isDefault || false
  });

  // Handle open add new address modal
  const handleOpenAddModal = useCallback(() => {
    addModal.openModal();
  }, [addModal]);

  // Handle open edit address modal and load data on form
  const handleOpenEditModal = useCallback(
    (address: Address) => {
      setEditingAddress(address);
      editModal.openModal();
    },
    [editModal]
  );

  /**
   *  Handle open delete address modal
   *  @param {string} id - id of the address to be deleted
   */
  const handleOpenDeleteModal = useCallback(
    (id: string) => {
      setAddressToDelete(id);

      deleteModal.openModal();
    },
    [editModal]
  );

  // Handle add new address
  const handleAddAddress = async (form: {
    street: string;
    city: string;
    apartment?: string;
    company?: string;
    phone?: string;
  }) => {
    const newAddress = convertToAddress(form);
    const updatedUser = {
      ...currentUser,
      updated_at: new Date().toISOString(),
      address: [...currentUser.address, newAddress]
    };

    setCurrentUser(updatedUser);
    const response = await updateUser(currentUser.id, updatedUser);

    if (response.data) {
      setCurrentUser(updatedUser);

      toast.success(MESSAGE_API.UPDATE_PROFILE_SUCCESS);
      return;
    }
    toast.error(MESSAGE_API.UPDATE_PROFILE_ERROR);
  };

  // Handle Edit address and update to user
  const handleEditAddress = async (form: {
    street: string;
    city: string;
    apartment?: string;
    company?: string;
    phone?: string;
  }) => {
    const updatedAddress = convertToAddress(form, editingAddress!);
    const updatedUser = {
      ...currentUser,
      address: currentUser.address.map((addr) =>
        addr.id === editingAddress?.id ? updatedAddress : addr
      )
    };

    const response = await updateUser(currentUser.id, updatedUser);

    if (response.data) {
      setCurrentUser(updatedUser);

      toast.success(MESSAGE_API.UPDATE_PROFILE_SUCCESS);

      return;
    }

    toast.error(MESSAGE_API.UPDATE_PROFILE_ERROR);
  };

  // Handle set default address
  const handleSetDefaultAddress = useCallback(
    async (address: Address) => {
      const updatedAddresses = currentUser.address.map((addr) =>
        addr.id === address.id
          ? { ...addr, isDefault: true }
          : { ...addr, isDefault: false }
      );

      const sortedAddresses = updatedAddresses.sort((a, b) =>
        b.isDefault ? 1 : a.isDefault ? -1 : 0
      );

      const updatedUser = {
        ...currentUser,
        address: sortedAddresses
      };

      const response = await updateUser(currentUser.id, updatedUser);

      if (response.data) {
        setCurrentUser(updatedUser);
      }
    },
    [currentUser]
  );

  // Handle remove address
  const handleRemoveAddress = useCallback(async () => {
    const updatedAddresses = currentUser.address.filter(
      (address) => address.id !== addressToDelete
    );

    const updatedUser = {
      ...currentUser,
      address: updatedAddresses
    };

    const response = await updateUser(currentUser.id, updatedUser);

    if (response.data) {
      setCurrentUser(updatedUser);
      deleteModal.closeModal();

      toast.error(MESSAGE_API.DELETE_ADDRESS_SUCCESS);

      return;
    }

    toast.error(MESSAGE_API.DELETE_ADDRESS_ERROR);
  }, [addressToDelete]);

  return (
    <div className="bg-white shadow-md h-full">
      <div className="flex justify-between gap-5 items-center border-b border-gray-500 py-10 px-8">
        <h2 className="text-lg text-dark font-medium">My Address</h2>
        <Button onClick={handleOpenAddModal}>
          <div className="flex items-center gap-5 justify-center">
            <div className="lg:block hidden">
              <Image
                src="/icon-add.svg"
                alt="icon add"
                width={24}
                height={24}
                priority
              />
            </div>
            <span>New Address</span>
          </div>
        </Button>
      </div>
      <div className="p-5">
        {currentUser.address.map((item) => (
          <div className="border-b border-gray-300 py-4" key={item.id}>
            <div className="md:flex justify-between">
              <div>
                {item.phone && (
                  <p className="text-base text-dark leading-loose">
                    Phone:
                    <span className="ml-2 text-primary">{item.phone}</span>
                  </p>
                )}
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
                {item.company && (
                  <p className="leading-loose">
                    Company:
                    <span className="ml-2 text-primary font-medium">
                      {item.company}
                    </span>
                  </p>
                )}
                {item.isDefault === true && (
                  <p className="mt-2 p-1 w-20 border border-primary text-center text-primary font-medium">
                    Default
                  </p>
                )}
              </div>
              <div className="flex md:flex-col justify-center items-center gap-5 md:my-0 my-5">
                <div className="flex items-center">
                  <Icon
                    src="/icon-edit.svg"
                    alt="icon edit"
                    width={24}
                    height={24}
                    onClick={handleOpenEditModal.bind(null, item)}
                    priority
                  />
                  {!item.isDefault && (
                    <Button
                      variant={TYPE.THIRD}
                      size={SIZE.SMALL}
                      disabled={item.isDefault}
                      onClick={handleOpenDeleteModal.bind(null, item.id)}
                    >
                      Delete
                    </Button>
                  )}
                </div>
                <Button
                  variant={TYPE.SECOND}
                  size={SIZE.SMALL}
                  disabled={item.isDefault}
                  onClick={handleSetDefaultAddress.bind(null, item)}
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
        onSubmit={handleAddAddress}
      />
      <ModalAddress
        isOpen={editModal.isOpen}
        onClose={editModal.closeModal}
        onSubmit={handleEditAddress}
        defaultValues={editingAddress ? defaultData(editingAddress) : undefined}
        isEdit
      />
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.closeModal}
        btnSecond="Delete"
        onClick={handleRemoveAddress}
        title="Delete Address"
      >
        Do you want to delete this address?
      </Modal>
    </div>
  );
};

export default AddressSection;
