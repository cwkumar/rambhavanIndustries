// src/lib/data.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: '001', name: 'Stel-o-fit T-Shirt', price: 19.99, description: 'A lightweight, comfortable cotton tee branded with the Stelofit logo.' },
  { id: '002', name: 'Stel-o-fit Mug', price: 9.99, description: 'A ceramic mug perfect for your morning coffee—features a sleek Stelofit design.' },
  { id: '003', name: 'Stel-o-fit Sticker Pack', price: 4.99, description: 'A set of 5 high-quality vinyl stickers for your laptop or water bottle.' }
];

export interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

export const carouselItems: CarouselItem[] = [
  {
    id: 'c1',
    imageUrl: 'factory/1.jpg',
    title: 'Premium Denim Collection',
    subtitle: 'Effortless style, unmatched durability'
  },
  {
    id: 'c2',
    imageUrl: 'factory/2.jpg',
    title: 'Eco-Friendly Fabrics',
    subtitle: 'Sustainable fashion for a greener tomorrow'
  },
  {
    id: 'c3',
    imageUrl: 'factory/3.jpg',
    title: 'Summer Linen Range',
    subtitle: 'Stay cool and chic under the sun'
  },
  {
    id: 'c4',
    imageUrl: 'factory/4.jpg',
    title: 'Tailored Elegance',
    subtitle: 'Precision cuts for a perfect fit'
  },
  {
    id: 'c5',
    imageUrl: 'factory/5.jpg',
    title: 'Urban Streetwear Lines',
    subtitle: 'Bold designs for the modern city dweller'
  },
  {
    id: 'c6',
    imageUrl: 'factory/6.jpg',
    title: 'Classic Formal Wear',
    subtitle: 'Timeless pieces for special occasions'
  },
  {
    id: 'c7',
    imageUrl: 'factory/7.jpg',
    title: 'Innovative Knitwear',
    subtitle: 'Comfort meets contemporary design'
  }
];
export interface ShowSection {
  id: string;
  name: string;
  price: number;
  sale_price: number;
  description: string;
  imageUrl: string;
  hoverImage?: string;
  slug: string;
}

export const showcase: ShowSection[] = [
  {
    id: '001',
    name: 'Stel-o-fit T-Shirt',
    price: 19.99,
    sale_price: 17.99,
    description: 'A lightweight, comfortable cotton tee branded with the Stel-o-fitMarket logo.',
    imageUrl: 'product/1.jpg',
    hoverImage: 'product/1-hover.jpg',
    slug: 'Stel-o-fit-t-shirt'
  },
  {
    id: '002',
    name: 'Stel-o-fit Mug',
    price: 9.99,
    sale_price: 8.99,
    description: 'A ceramic mug perfect for your morning coffee—features a sleek Stel-o-fitMarket design.',
    imageUrl: 'product/2.jpg',
    hoverImage: 'product/2-hover.jpg',
    slug: 'Stel-o-fit-mug'
  },
  {
    id: '003',
    name: 'Stel-o-fit Sticker Pack',
    price: 4.99,
    sale_price: 3.99,
    description: 'A set of 5 high-quality vinyl stickers for your laptop or water bottle.',
    imageUrl: 'product/3.jpg',
    hoverImage: 'product/3-hover.jpg',
    slug: 'Stel-o-fit-sticker-pack'
  },
  {
    id: '101',
    name: 'Stel-o-fit Hoodie',
    price: 29.99,
    sale_price: 24.99,
    description: 'Cozy hoodie with Stel-o-fitMarket branding.',
    imageUrl: 'product/4.jpg',
    hoverImage: 'product/4-hover.jpg',
    slug: 'Stel-o-fit-hoodie'
  }
];