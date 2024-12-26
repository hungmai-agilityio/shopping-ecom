'use client';
import Image, { ImageProps } from 'next/image';
import { memo } from 'react';

// Components
import { Card, ColorPicker, Icon, Rating } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

interface CardProduct extends ImageProps {
  id: string;
  name: string;
  rating: number;
  price: number;
  oldPrice?: number;
  colors?: string[];
  isNewProduct?: boolean;
  discount?: number;
  selectedColor?: string;
  icon: string;
  onAdd: (id: string) => void;
  onIconClick: (id: string) => void;
  onView: (id: string) => void;
  isShowAction?: boolean;
}
const CardProduct = memo(
  ({
    src,
    alt,
    id,
    name,
    rating,
    price,
    oldPrice,
    colors = [],
    isNewProduct,
    discount,
    icon,
    selectedColor = colors[0],
    onAdd,
    onIconClick,
    onView,
    isShowAction = false
  }: CardProduct) => {
    /**
     * Handle when clicking the icon and stop Propagating the event elsewhere
     * @param id
     * @param e Mouse event to prevent propagation
     */
    const handleIconClick = (
      id: string,
      e: React.MouseEvent<HTMLDivElement>
    ) => {
      e.stopPropagation();
      onIconClick?.(id);
    };

    /**
     * Handle when clicking the add-to-cart button and stop propagating the event elsewhere
     * @param id - The unique identifier of the product
     * @param e - The mouse event to prevent propagation
     */
    const handleAdClick = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onAdd?.(id);
    };

    /**
     * Handle when clicking the product card and invoke the view action
     * @param id - The unique identifier of the product
     */
    const handleCardClick = (id: string) => {
      onView(id);
    };

    return (
      <Card
        styles="w-card-sm h-card-product font-medium cursor-pointer"
        onClick={handleCardClick.bind(null, id)}
      >
        <div className="bg-gray-light p-4 rounded-b-sm h-card-md relative flex group">
          {discount && (
            <div className="absolute z-10 w-14 h-7 bg-primary text-white text-xs rounded-lg">
              <span className="flex justify-center my-1">-{discount}%</span>
            </div>
          )}
          {isNewProduct && (
            <div className="absolute w-14 h-7 bg-success text-white text-xs rounded-lg">
              <span className="flex justify-center my-1">NEW</span>
            </div>
          )}
          {isShowAction && (
            <div
              className="w-9 h-9 absolute top-3 right-5"
              onClick={(e) => handleIconClick(id, e)}
            >
              <Icon
                src={icon}
                alt={`icon-click`}
                width={34}
                height={34}
                variant={TYPE.THIRD}
                priority
              />
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={152}
            height={100}
            style={{ objectFit: 'contain' }}
            className="mx-auto"
            loading="eager"
          />
          {isShowAction && (
            <div
              className="absolute bg-dark w-full h-10 md:group-hover:flex justify-center items-center gap-4 hover:bg-slate-600 hidden bottom-0 left-0 cursor-pointer"
              onClick={(e) => handleAdClick(id, e)}
            >
              <Icon
                src="/cart-white.svg"
                alt="icon-cart"
                width={24}
                height={24}
                priority
              />
              <p className="text-white">Add To Cart</p>
            </div>
          )}
        </div>
        <div className="mt-4 px-2">
          <p className="text-base overflow-hidden line-clamp-1 capitalize">
            {name}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-primary max-w-16 overflow-hidden text-ellipsis inline-block">
              ${price}
            </span>
            {oldPrice && (
              <span className="text-gray-500 line-through max-w-16 overflow-hidden text-ellipsis inline-block">
                ${oldPrice}
              </span>
            )}
            <Rating count={rating} />
            <span className="text-gray-500">({rating})</span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <ColorPicker colors={colors} selectedColor={selectedColor} />
        </div>
      </Card>
    );
  }
);

export default CardProduct;
