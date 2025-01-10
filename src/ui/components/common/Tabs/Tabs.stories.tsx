import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Panel, Tabs, ITab } from '@/ui/components';
import { TYPE } from '@/constants';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    list: {
      description: 'Render dynamic react node children'
    },
    selected: {
      description: 'Tab position order'
    },
    onClick: {
      description: 'Handle event when click '
    },
    variant: {
      description: 'Choose tab layout style (primary or second)',
      control: 'radio',
      options: Object.values(TYPE)
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const list: Omit<ITab, 'selected' | 'onClick'>[] = [
  {
    title: 'Tab 1',
    value: '1'
  },
  {
    title: 'Tab 2',
    value: '2'
  }
];

export const Default: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState<string>('1');

    const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedTab(event.currentTarget.value);
    };

    return (
      <div className="my-4">
        <Tabs
          list={list}
          selected={selectedTab}
          onClick={handleChangeTab}
          variant={args.variant}
        />
        <Panel selected={selectedTab} tabIndex="1">
          <div className="text-center mt-3">Content for Tab 1</div>
        </Panel>
        <Panel selected={selectedTab} tabIndex="2">
          <div className="text-center mt-3">Content for Tab 2</div>
        </Panel>
      </div>
    );
  },
  args: {
    variant: TYPE.PRIMARY
  }
};

export const Second: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('1');

    const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedTab(event.currentTarget.value);
    };

    return (
      <div className="my-4">
        <Tabs
          list={list}
          selected={selectedTab}
          onClick={handleChangeTab}
          variant={TYPE.SECOND}
        />
        <Panel selected={selectedTab} tabIndex="1">
          <div className="text-center mt-3">Content for Tab 1</div>
        </Panel>
        <Panel selected={selectedTab} tabIndex="2">
          <div className="text-center mt-3">Content for Tab 2</div>
        </Panel>
      </div>
    );
  }
};
