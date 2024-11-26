import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Components
import Input from '@/ui/components/common/Input';

// Constants
import { INPUT_TYPE, TYPE } from '@/constants';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the input field',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text inside the input field',
      control: 'text'
    },
    value: {
      description: 'Value of the input field',
      control: 'text'
    },
    variant: {
      description: 'Style variant of the input field',
      control: 'radio',
      options: Object.values(TYPE)
    },
    type: {
      description: 'HTML type of the input field',
      control: 'select',
      options: Object.values(INPUT_TYPE)
    },
    icon: {
      description: 'Optional icon to display on the input field',
      control: 'text'
    },
    message: {
      description: 'Error or helper message below the input',
      control: 'text'
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: 'boolean'
    },
    onClick: {
      description: 'Event handler for when the icon is clicked'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const basic: Story = {
  render: (args) => {
    const [textInput, setTextInput] = useState(args.value || '');

    const handleTextInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newValue = event.target.value;
      setTextInput(newValue);
      args.onChange?.(event);
    };

    return (
      <div className="flex flex-col gap-5">
        <Input
          {...args}
          label="Input primary"
          value={textInput}
          onChange={handleTextInputChange}
        />
        <Input
          {...args}
          label="input second"
          variant={TYPE.SECOND}
          value={textInput}
          onChange={handleTextInputChange}
        />
        <Input
          {...args}
          label="input third"
          variant={TYPE.THIRD}
          value={textInput}
          onChange={handleTextInputChange}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Enter some text',
    value: '',
    variant: TYPE.PRIMARY
  }
};

export const withIcon: Story = {
  render: () => {
    const [textInput, setTextInput] = useState('');

    const handleTextInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setTextInput(event.target.value);
    };

    return (
      <Input
        label="Text Input"
        placeholder="Enter some text"
        value={textInput}
        onChange={handleTextInputChange}
        variant={TYPE.THIRD}
        icon="/heart.svg"
        onClick={() => alert('Click icon')}
      />
    );
  }
};

export const types: Story = {
  render: () => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPassword(event.target.value);
    };

    return (
      <div>
        <Input
          label="Password"
          placeholder="value..."
          variant={TYPE.PRIMARY}
          type="password"
          icon="/heart.svg"
          onChange={handlePasswordChange}
          onClick={() => alert('Icon clicked!')}
          value={password}
          isRequired
        />
        <Input
          label="Email"
          placeholder="value..."
          variant={TYPE.PRIMARY}
          type={INPUT_TYPE.EMAIL}
          onChange={handlePasswordChange}
          onClick={() => alert('Icon clicked!')}
          value={password}
        />
      </div>
    );
  }
};

export const error: Story = {
  render: () => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPassword(event.target.value);
    };

    return (
      <Input
        label="Password"
        placeholder="value..."
        variant={TYPE.PRIMARY}
        type="password"
        onChange={handlePasswordChange}
        onClick={() => alert('Icon clicked!')}
        value={password}
        message={password ? '' : 'Has error...'}
      />
    );
  }
};
