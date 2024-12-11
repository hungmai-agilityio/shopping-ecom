// Components
import { Tab, ITab } from '@/ui/components';

interface TabsProps {
  list: Omit<ITab, 'selected' | 'onClick'>[];
  selected: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tabs = ({ list, onClick, selected }: TabsProps) => (
  <div className="flex flex-wrap lg:flex-col justify-center gap-4 items-start w-96">
    {list.map((item) => (
      <Tab
        key={item.value}
        value={item.value}
        title={item.title}
        selected={selected}
        onClick={onClick}
      />
    ))}
  </div>
);

export default Tabs;
