export const PRODUCT_SLUGS = [
  "molokhia",
  "okra",
  "peas",
  "potatoes",
  "mixed",
  "spinach",
  "beans",
  "whiteBeans",
  "redBeans",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export interface Product {
  slug: ProductSlug;
  featured: boolean;
  image: string;
  imageWide?: string;
}

export const products: Product[] = [
  {
    slug: "molokhia",
    featured: true,
    image: "/images/prod-molokhia.png",
  },
  { slug: "okra", featured: false, image: "/images/prod-okra.png" },
  { slug: "peas", featured: false, image: "/images/prod-green-peas.png" },
  { slug: "potatoes", featured: false, image: "/images/prod-potatoes.png" },
  { slug: "mixed", featured: false, image: "/images/prod-mixed-vegetables.png" },
  { slug: "spinach", featured: false, image: "/images/prod-spinach.png" },
  { slug: "beans", featured: false, image: "/images/prod-green-beans.png" },
  { slug: "whiteBeans", featured: false, image: "/images/prod-white-beans.png" },
  { slug: "redBeans", featured: false, image: "/images/prod-red-beans.png" },
];

export function getProduct(slug: ProductSlug): Product {
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    throw new Error(`Unknown product slug: ${slug}`);
  }
  return product;
}
