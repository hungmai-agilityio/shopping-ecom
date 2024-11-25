interface BadgeProps {
  quantity: number;
  children: React.ReactNode;
}

const Badge = ({ quantity, children }: BadgeProps) => {
  return (
    <div className="relative">
      {quantity > 0 && (
        <span className="absolute -top-3 -right-3 h-6 w-6 rounded-full flex justify-center items-center bg-primary text-white text-[10px] cursor-pointer z-10 overflow-hidden font-semibold">
          {quantity > 99 ? '99+' : quantity}
        </span>
      )}
      {children}
    </div>
  );
};

export default Badge;
