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
    numOfItems += item.quantity ?? 0;
    orderTotal += (item.quantity ?? 0) * item.price;
  });

  return { numOfItems, orderTotal };
}
