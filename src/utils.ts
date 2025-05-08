export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

type ImagePath = `./assets/images/image-${string}.jpg`;

type ImagePaths = Record<
  'thumbnail' | 'mobile' | 'tablet' | 'desktop',
  ImagePath
>;

export type CartItem = {
  image: ImagePaths;
  name: string;
  category: string;
  price: number;
  alt: string;
  quantity: number;
};

export function calculateCartTotals(cartItems: CartItem[]) {
  let numOfItems = 0;
  let orderTotal = 0;

  cartItems.forEach((item) => {
    numOfItems += item.quantity;
    orderTotal += item.quantity * item.price;
  });

  return { numOfItems, orderTotal };
}
