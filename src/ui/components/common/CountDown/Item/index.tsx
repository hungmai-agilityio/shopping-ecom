interface ItemProps {
  label: string;
  value: string;
}

const CountdownItem = ({ label, value }: ItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-medium">{label}</span>
      <span className="text-3xl font-bold">{value}</span>
    </div>
  );
};

export default CountdownItem;
