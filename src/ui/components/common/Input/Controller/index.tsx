'use client';

import { useController, Control, FieldValues, Path } from 'react-hook-form';

// Components
import { Input } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  type?: string;
  label?: string;
  placeholder: string;
  showIcon?: string;
  toggleShow?: () => void;
  message?: string;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
}

const InputController = <T extends FieldValues>({
  name,
  control,
  type = 'text',
  label,
  placeholder,
  showIcon,
  toggleShow,
  message,
  variant
}: InputControllerProps<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control });

  return (
    <Input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      label={label}
      icon={showIcon}
      onClick={toggleShow}
      message={message || error?.message}
      variant={variant}
    />
  );
};

export default InputController;
