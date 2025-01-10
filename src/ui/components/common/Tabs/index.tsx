// Constants
import { tabsClasses, TYPE } from '@/constants';

// Components
import { Tab, ITab } from '@/ui/components';

interface TabsProps {
  list: Omit<ITab, 'selected' | 'onClick'>[];
  selected: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: TYPE.PRIMARY | TYPE.SECOND;
}

const Tabs = ({
  list,
  onClick,
  selected,
  variant = TYPE.PRIMARY
}: TabsProps) => (
  <div className={tabsClasses[variant]}>
    {list.map((item) => (
      <Tab
        key={item.value}
        value={item.value}
        title={item.title}
        selected={selected}
        onClick={onClick}
        variant={variant}
      />
    ))}
  </div>
);

export default Tabs;
