import { memo, ReactNode } from 'react';

interface PanelProps {
  selected: string;
  tabIndex: string;
  children: ReactNode;
}

export const Panel = ({ selected, tabIndex, children }: PanelProps) => {
  if (selected !== tabIndex) {
    return null;
  }

  return <div className="w-full">{children}</div>;
};
