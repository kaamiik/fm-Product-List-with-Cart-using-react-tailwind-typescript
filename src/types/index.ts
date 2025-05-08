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
