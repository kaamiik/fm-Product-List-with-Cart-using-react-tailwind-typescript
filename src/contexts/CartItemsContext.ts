import React from 'react';
import { CartItem } from '../utils';

type CartItemsContextType = {
  cartItems: CartItem[];
  numOfItems: number;
  orderTotal: number;
  handleRemoveItem: (itemName: string) => void;
  handleClearCart: () => void;
  handleQuantityChange: (item: CartItem, newQuantity: number) => void;
};

export const CartItemsContext =
  React.createContext<CartItemsContextType | null>(null);
