'use client';

import Image from 'next/image';

// Constants
import { CELL } from '@/constants';

// Interfaces
import { ICart, IProduct } from '@/interface';

// Components
import {
  Body,
  Cell,
  Empty,
  Head,
  Icon,
  QuantityVertical,
  Row,
  Table
} from '@/ui/components';

interface CartTableProps {
  products: IProduct[];
  cart: ICart[];
  onChangeQuantity: (productId: string, newQuantity: number) => void;
  onRemoveProduct: (productId: string) => void;
}

const CartTable = ({
  products,
  cart,
  onChangeQuantity,
  onRemoveProduct
}: CartTableProps) => {
  const renderRowEmpty = <Empty />;

  const renderRowData = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) return null;

    const subtotal = item.quantity * product.price;

    // Handle quantity change
    const handleQuantityChange = (newQuantity: number) => {
      onChangeQuantity(item.id, newQuantity);
    };

    // Handle remove product by id
    const handleRemoveProduct = () => {
      onRemoveProduct(item.id);
    };

    return (
      <Row
        key={item.id}
        styles="relative lg:h-28 h-full items-center border-b lg:mb-0 mb-5"
      >
        <Cell type={CELL.TD} styles="flex items-center gap-5 mt-4">
          <Image
            src={product.image}
            alt={product.name}
            width={50}
            height={50}
            priority
          />
          <p className="text-sm font-medium">{product.name}</p>
          <Icon
            src="/icon-cancel.svg"
            alt="icon-delete"
            width={24}
            height={24}
            onClick={handleRemoveProduct}
            className="absolute top-5 left-0 cursor-pointer"
          />
        </Cell>
        <Cell type={CELL.TD} styles="text-base">
          <div className="flex gap-2">
            <p>Color:</p>
            <p style={{ color: item.color, fontWeight: 'bold' }}>
              {item.color || 'None'}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Variant:</p>
            <p className="font-bold">{item.size || 'None'}</p>
          </div>
        </Cell>

        <Cell type={CELL.TD} styles="text-base" label="Price:">
          ${product.price}
        </Cell>
        <Cell type={CELL.TD} styles="px-4 py-2">
          <QuantityVertical
            onChange={handleQuantityChange}
            value={item.quantity}
            max={product.stock}
          />
        </Cell>
        <Cell type={CELL.TD} styles="px-4 py-2 text-base" label="Subtotal:">
          ${subtotal}
        </Cell>
      </Row>
    );
  });

  return (
    <div className="lg:h-table h-full overflow-y-auto scrollbar">
      <Table>
        <Head>
          <Row styles="lg:flex hidden">
            <Cell type={CELL.TH}>Product</Cell>
            <Cell type={CELL.TH}>Attributes </Cell>
            <Cell type={CELL.TH}>Price</Cell>
            <Cell type={CELL.TH}>Quantity</Cell>
            <Cell type={CELL.TH}>Subtotal</Cell>
          </Row>
        </Head>
        <Body>{!cart.length ? renderRowEmpty : renderRowData}</Body>
      </Table>
    </div>
  );
};

export default CartTable;
