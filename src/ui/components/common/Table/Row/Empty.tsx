import Image from 'next/image';

export const Empty = () => {
  return (
    <tr className="absolute left-1/3">
      <td>
        <Image
          src="/cart-empty.webp"
          alt="cart empty"
          width={500}
          height={500}
          className="mt-10 "
        />
      </td>
    </tr>
  );
};
