import React from 'react';

import { calculateCartTotals } from '../utils';
import type { CartItem } from '../utils';
import { CartItemsContext } from '../contexts/CartItemsContext';

function CartItemsProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const { numOfItems, orderTotal } = calculateCartTotals(cartItems);

  function handleRemoveItem(itemName: string) {
    setCartItems((prev) => prev.filter((item) => item.name !== itemName));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  function handleQuantityChange(item: CartItem, newQuantity: number) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (cartItem) => cartItem.name !== item.name
      );

      if (newQuantity > 0) {
        updatedCartItems.push({ ...item, quantity: newQuantity });
      }

      return updatedCartItems;
    });
  }

  const value = {
    cartItems,
    numOfItems,
    orderTotal,
    handleRemoveItem,
    handleClearCart,
    handleQuantityChange,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsProvider;
