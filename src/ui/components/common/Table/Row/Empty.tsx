import Image from 'next/image';

export const Empty = () => {
  return (
    <tr>
      <td colSpan={4} className="text-center">
        <div className="flex justify-center items-center h-full">
          <Image
            src="/cart-empty.png"
            alt="cart empty"
            width={500}
            height={500}
            className="mx-auto mt-10"
          />
        </div>
      </td>
    </tr>
  );
};
