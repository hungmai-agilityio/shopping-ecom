import Input from '@/ui/components/common/Input';
import Modal from '@/ui/components/common/Modal';
import { memo } from 'react';

interface ModalAddressProps {
  onClick: () => void;
  isEdit?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddress = memo(
  ({ onClick, isEdit = false, isOpen, onClose }: ModalAddressProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={isEdit ? 'Update Address' : 'Add new address'}
        btnSecond={isEdit ? 'Update address' : 'Add address'}
        onClick={onClick}
      >
        <div className="md:flex gap-8">
          <div className="basis-1/2 md:mb-0 mb-10">
            <Input label="Phone" isRequired />
          </div>
          <div className="basis-1/2 md:mb-0 mb-10">
            <Input label="Email" disabled />
          </div>
        </div>
        <div className="my-10">
          <Input label="Apartment" />
        </div>
        <div className="my-10">
          <Input label="Street" isRequired />
        </div>
        <div className="my-10">
          <Input label="City" isRequired />
        </div>
        <div className="my-10">
          <Input label="Company" />
        </div>
      </Modal>
    );
  }
);

export default ModalAddress;
