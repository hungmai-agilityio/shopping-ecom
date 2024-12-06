export interface IWishlist {
  id: string;
  userId: string;
  productId: string;
}

export interface ICart extends IWishlist {
  quantity: number;
  color: string;
  size: string;
}
