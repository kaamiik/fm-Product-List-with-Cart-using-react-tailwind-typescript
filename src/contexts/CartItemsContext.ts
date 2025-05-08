import React from 'react';
import type { CartItem } from '../types';

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
