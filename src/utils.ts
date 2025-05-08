import type { CartItem } from './types';

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateCartTotals(cartItems: CartItem[]) {
  let numOfItems = 0;
  let orderTotal = 0;

  cartItems.forEach((item) => {
    numOfItems += item.quantity;
    orderTotal += item.quantity * item.price;
  });

  return { numOfItems, orderTotal };
}
