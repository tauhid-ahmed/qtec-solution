import "dotenv/config";

import db from "./db.js";
import { products } from "./schema.js";
import { randomUUID } from "crypto";

const seedProducts = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    description:
      "This durable backpack is crafted with heavy-duty G-1000 material and designed to carry your daily essentials with ease. It features a padded sleeve that comfortably fits up to a 15-inch laptop, multiple compartments for organization, and an ergonomic design that ensures comfort even during long hours of wear. Ideal for school, office, or weekend adventures.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
    views: 120,
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    category: "men's clothing",
    description:
      "Elevate your casual style with our premium slim fit t-shirt. Made from high-quality cotton blend, it offers unmatched softness and breathability. The contrast raglan sleeve and modern fit ensure a flattering silhouette, perfect for both lounging and outings. A must-have basic for every wardrobe.",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
    rating: { rate: 4.1, count: 259 },
    views: 85,
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    description:
      "Stay warm and stylish with our cotton utility jacket, featuring a full zip front, adjustable cuffs, and multiple pockets for convenient storage. The mid-weight construction is perfect for layering during cooler months. Tailored for a relaxed yet refined look, suitable for both casual and semi-formal wear.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
    views: 150,
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    description:
      "This casual slim-fit shirt features lightweight fabric with a slight stretch, offering comfort and mobility for your everyday activities. Designed with a stylish collar and curved hem, it’s perfect for layering or wearing on its own. Great for casual outings, office settings, or travel.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
    views: 98,
  },
  {
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: "jewelery",
    description:
      "An elegant piece from the Legends Naga Collection by John Hardy. This bracelet is handcrafted with sterling silver and 18k gold accents, featuring a symbolic dragon motif representing strength and prosperity. The intricate detailing and chain station design make it a luxurious addition to any jewelry collection.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
    views: 67,
  },
  {
    title: "Solid Gold Petite Micropave",
    price: 168,
    category: "jewelery",
    description:
      "This dainty micropavé ring features solid 14k gold with intricately set cubic zirconia stones that shimmer with every movement. Its timeless design makes it perfect for stacking or wearing as a standalone piece. Ideal for gifting or adding a subtle sparkle to your everyday look.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
    views: 240,
  },
  {
    title: "White Gold Plated Princess",
    price: 9.99,
    category: "jewelery",
    description:
      "Crafted with precision, this princess-cut engagement-style ring is plated with high-quality white gold. The center stone is surrounded by a halo of sparkling accents that give the illusion of a larger diamond. Perfect for special occasions, proposals, or as a beautiful fashion accessory.",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.0, count: 400 },
    views: 132,
  },
  {
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    category: "jewelery",
    description:
      "These rose gold plated tunnel plug earrings are designed for those who appreciate bold fashion. Made from durable stainless steel, they provide a secure fit and polished finish. Ideal for expressing your unique style in a modern, edgy way.",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
    views: 73,
  },
  {
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    category: "electronics",
    description:
      "Designed for mobility and high-speed transfers, the WD 2TB Elements external hard drive features USB 3.0 compatibility, plug-and-play setup, and durable casing. Easily store, backup, and transfer your data—whether for personal files, work documents, or media libraries.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
    views: 310,
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    category: "electronics",
    description:
      "Experience lightning-fast boot-ups and data access with the SanDisk SSD PLUS 1TB internal drive. Built with SATA III interface and enhanced durability, it's ideal for upgrading desktops and laptops. Energy efficient, reliable, and a great value for performance enhancement.",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
    views: 280,
  },
];

// Seed logic
const main = async () => {
  console.log("🌱 Seeding products...");

  for (const product of seedProducts) {
    await db.insert(products).values({
      id: randomUUID(),
      ...product,
    });
  }

  console.log("✅ Done seeding.");
  process.exit(0);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
