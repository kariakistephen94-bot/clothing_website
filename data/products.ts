export type Gender = "women" | "men";

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  gender: Gender;
  price: number;
  /** Short line shown on cards & hero */
  tagline: string;
  /** Long-form editorial copy for the product page */
  description: string;
  details: string[];
  sizes: string[];
  colors: ColorOption[];
  images: string[];
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  gender: Gender;
  image: string;
  count: number;
}

/** Unsplash helper — keeps URLs tidy and consistently sized. */
const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  // ——————————————————————————— WOMEN ———————————————————————————
  {
    id: "silk-evening-dress",
    name: "Silk Evening Dress",
    category: "Dresses",
    gender: "women",
    price: 85000,
    tagline: "Fluid silk that moves like light.",
    description:
      "Cut from a single weight of mulberry silk, the Evening Dress falls in an uninterrupted line from shoulder to hem. A bias drape catches the light with every movement — engineered to feel weightless, designed to be remembered.",
    details: [
      "100% mulberry silk, 19 momme",
      "Bias-cut for natural drape",
      "Concealed side zip",
      "Dry clean only",
      "Made in Lagos, Nigeria",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Obsidian", hex: "#1b1b1b" },
      { name: "Champagne", hex: "#c8a96a" },
      { name: "Ivory", hex: "#f4efe6" },
    ],
    images: [
      img("1595777457583-95e059d581b8"),
      img("1566174053879-31528523f8ae"),
      img("1539008835657-9e8e9680c956"),
    ],
    isNew: true,
  },
  {
    id: "minimal-linen-blazer",
    name: "Minimal Linen Blazer",
    category: "Outerwear",
    gender: "women",
    price: 58000,
    tagline: "Structure, softened.",
    description:
      "A tailored blazer reimagined in breathable European linen. The shoulder is clean, the lapel is narrow, and the silhouette is relaxed enough to live in. Layer it over everything, season after season.",
    details: [
      "100% Belgian linen",
      "Half-canvas construction",
      "Horn buttons",
      "Fully lined body",
      "Made in Lagos, Nigeria",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Stone", hex: "#e8e2d8" },
      { name: "Charcoal", hex: "#2b2b2b" },
    ],
    images: [
      img("1591047139829-d91aecb6caea"),
      img("1551489186-cf8726f514f8"),
      img("1487222477894-8943e31ef7b2"),
    ],
    isNew: true,
  },
  {
    id: "cashmere-sweater",
    name: "Cashmere Sweater",
    category: "Essentials",
    gender: "women",
    price: 45000,
    tagline: "The quiet luxury of pure cashmere.",
    description:
      "Knitted from grade-A Mongolian cashmere, this sweater is the definition of understated indulgence. A relaxed crew neck and ribbed cuffs give it shape; the hand-feel does the rest.",
    details: [
      "100% grade-A Mongolian cashmere",
      "12-gauge knit",
      "Ribbed neck, cuffs & hem",
      "Hand wash cold",
      "Knitted in Lagos, Nigeria",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#c8a96a" },
      { name: "Ivory", hex: "#f4efe6" },
      { name: "Charcoal", hex: "#2b2b2b" },
    ],
    images: [
      img("1576566588028-4147f3842f27"),
      img("1434389677669-e08b4cac3105"),
      img("1583743814966-8936f5b7be1a"),
    ],
    isNew: true,
  },
  {
    id: "leather-handbag",
    name: "Leather Handbag",
    category: "Accessories",
    gender: "women",
    price: 72000,
    tagline: "Crafted to be carried for a lifetime.",
    description:
      "A structured top-handle bag in full-grain Italian leather. Minimal hardware, hand-finished edges, and a suede-lined interior — an object that ages beautifully and outlasts the season.",
    details: [
      "Full-grain Italian leather",
      "Suede-lined interior",
      "Palladium hardware",
      "Detachable shoulder strap",
      "Crafted in Aba, Nigeria",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Cognac", hex: "#8a5a33" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    images: [
      img("1584917865442-de89df76afd3"),
      img("1591561954557-26941169b49e"),
      img("1548036328-c9fa89d128fa"),
    ],
    isNew: true,
  },

  // ——————————————————————————— MEN ———————————————————————————
  {
    id: "italian-wool-jacket",
    name: "Italian Wool Jacket",
    category: "Jackets",
    gender: "men",
    price: 90000,
    tagline: "Tailoring with a soul.",
    description:
      "A soft-shouldered jacket woven from Italian virgin wool. Built with a half-canvas chest for natural movement, it bridges the gap between the boardroom and the evening — effortlessly.",
    details: [
      "100% Italian virgin wool",
      "Half-canvas construction",
      "Functional surgeon's cuffs",
      "Bemberg lining",
      "Tailored in Lagos, Nigeria",
    ],
    sizes: ["46", "48", "50", "52", "54"],
    colors: [
      { name: "Midnight", hex: "#1b1f2a" },
      { name: "Charcoal", hex: "#2b2b2b" },
    ],
    images: [
      img("1594938298603-c8148c4dae35"),
      img("1507679799987-c73779587ccf"),
      img("1593032465175-481ac7f401a0"),
    ],
    isNew: true,
  },
  {
    id: "premium-cotton-shirt",
    name: "Premium Cotton Shirt",
    category: "Shirts",
    gender: "men",
    price: 18000,
    tagline: "The white shirt, perfected.",
    description:
      "Tailored from two-ply Egyptian cotton with a subtle sheen, this shirt holds its crispness through the day. Mother-of-pearl buttons and a clean spread collar complete the essential.",
    details: [
      "Two-ply Egyptian cotton",
      "Mother-of-pearl buttons",
      "Spread collar",
      "Single-needle stitching",
      "Made in Lagos, Nigeria",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#f4efe6" },
      { name: "Sky", hex: "#cdd8e0" },
      { name: "Stone", hex: "#e8e2d8" },
    ],
    images: [
      img("1602810318383-e386cc2a3ccf"),
      img("1620012253295-c15cc3e65df4"),
      img("1598033129183-c4f50c736f10"),
    ],
    isNew: true,
  },
  {
    id: "tailored-trousers",
    name: "Tailored Trousers",
    category: "Essentials",
    gender: "men",
    price: 32000,
    tagline: "A clean line, from waist to hem.",
    description:
      "Pleated trousers in a refined wool blend, cut with a tapered leg and a comfortable mid-rise. Designed to dress up with tailoring or down with knitwear — without compromise.",
    details: [
      "Wool-blend suiting cloth",
      "Single forward pleat",
      "Tapered leg",
      "Extended tab closure",
      "Tailored in Lagos, Nigeria",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Charcoal", hex: "#2b2b2b" },
      { name: "Stone", hex: "#e8e2d8" },
      { name: "Navy", hex: "#1b1f2a" },
    ],
    images: [
      img("1473966968600-fa801b869a1a"),
      img("1594938328870-9623159c8c99"),
      img("1624378439575-d8705ad7ae80"),
    ],
    isNew: true,
  },
  {
    id: "luxury-sneakers",
    name: "Luxury Sneakers",
    category: "Casual Wear",
    gender: "men",
    price: 38000,
    tagline: "Quiet footwear for considered steps.",
    description:
      "A minimalist low-top built from full-grain Italian leather on a hand-stitched margom sole. No logos, no noise — just clean lines and exceptional comfort.",
    details: [
      "Full-grain Italian leather",
      "Margom rubber sole",
      "Calf-leather lining",
      "Hand-finished by Nigerian artisans",
      "Crafted in Aba, Nigeria",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "White", hex: "#f4efe6" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    images: [
      img("1549298916-b41d501d3772"),
      img("1525966222134-fcfa99b8ae77"),
      img("1600185365926-3a2ce3cdb9eb"),
    ],
    isNew: true,
  },
];

export const collections: Collection[] = [
  // Women
  {
    id: "women-dresses",
    title: "Dresses",
    gender: "women",
    image: img("1566174053879-31528523f8ae"),
    count: 24,
  },
  {
    id: "women-outerwear",
    title: "Outerwear",
    gender: "women",
    image: img("1539533018447-63fcce2678e3"),
    count: 18,
  },
  {
    id: "women-essentials",
    title: "Essentials",
    gender: "women",
    image: img("1521572163474-6864f9cf17ab"),
    count: 32,
  },
  {
    id: "women-accessories",
    title: "Accessories",
    gender: "women",
    image: img("1584917865442-de89df76afd3"),
    count: 21,
  },
  // Men
  {
    id: "men-suits",
    title: "Suits",
    gender: "men",
    image: img("1507679799987-c73779587ccf"),
    count: 16,
  },
  {
    id: "men-shirts",
    title: "Shirts",
    gender: "men",
    image: img("1602810318383-e386cc2a3ccf"),
    count: 27,
  },
  {
    id: "men-jackets",
    title: "Jackets",
    gender: "men",
    image: img("1551028719-00167b16eac5"),
    count: 19,
  },
  {
    id: "men-casual",
    title: "Casual Wear",
    gender: "men",
    image: img("1516257984-b1b4d707412e"),
    count: 30,
  },
];

export const HERO_IMAGE = img("1618244972963-dbee1a7edc95", 2000);
export const STORY_IMAGE = img("1558769132-cb1aea458c5e", 1600);

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByGender(gender: Gender): Product[] {
  return products.filter((p) => p.gender === gender);
}

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString("en-NG")}`;
}
