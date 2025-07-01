"use client";
import React from "react";
import { Title } from "./ui/text";
import Image from "next/image";
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  rating?: number;
  reviewCount?: number;
  link?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartwatch",
    price: "$199",
    image: "/images/products/product_24.jpg",
    description: "Smart watch with fitness tracker and heart rate monitor.",
    rating: 4.5,
    reviewCount: 128,
    link: "/product/1"
  },
  {
    id: 2,
    name: "Winter Jacket",
    price: "$89",
    image: "/images/products/product_25.jpg",
    description: "Warm and stylish winter jacket for cold weather.",
    rating: 4.2,
    reviewCount: 89,
    link: "/product/2"
  },
  {
    id: 3,
    name: "Polo T-Shirt",
    price: "$29",
    image: "/images/products/product_26.jpg",
    description: "Classic fit polo t-shirt in various colors.",
    rating: 4.0,
    reviewCount: 215,
    link: "/product/3"
  },
  {
    id: 4,
    name: "Denim Shorts",
    price: "$39",
    image: "/images/products/product_27.jpg",
    description: "Comfortable denim shorts for summer.",
    rating: 4.3,
    reviewCount: 67,
    link: "/product/4"
  },
  {
    id: 5,
    name: "Blue Backpack",
    price: "$49",
    image: "/images/products/product_28.jpg",
    description: "Durable backpack with multiple compartments.",
    rating: 4.7,
    reviewCount: 142,
    link: "/product/5"
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: "$45",
    image: "/images/products/product_29.jpg",
    description: "Genuine leather wallet with RFID protection.",
    rating: 4.1,
    reviewCount: 93,
    link: "/product/6"
  },
  {
    id: 7,
    name: "Formal Blazer",
    price: "$129",
    image: "/images/products/product_30.jpg",
    description: "Slim fit formal blazer for office wear.",
    rating: 3.2,
    reviewCount: 12,
    link: "/product/7"
  },
  {
    id: 8,
    name: "Clay Pot",
    price: "$24",
    image: "/images/products/product_31.jpg",
    description: "Handcrafted clay pot for plants.",
    rating: 4.2,
    reviewCount: 128,
    link: "/product/8"
  },
  {
    id: 9,
    name: "Electric Kettle",
    price: "$35",
    image: "/images/products/product_32.jpg",
    description: "Fast boiling electric kettle with auto shut-off.",
    rating: 2.2,
    reviewCount: 12,
    link: "/product/9"
  },
  {
    id: 10,
    name: "Wireless Headphones",
    price: "$99",
    image: "/images/products/product_33.jpg",
    description: "Noise cancelling wireless headphones.",
    rating: 4.6,
    reviewCount: 178,
    link: "/product/10"
  },
];

// Render star rating
const renderRating = (rating: number, reviewCount: number) => {
  return (
    <div className="flex items-center mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3 w-3 ${
            star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill={star <= Math.round(rating) ? 'currentColor' : 'none'}
        />
      ))}
      <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="w-full py-4 sm:py-6 md:py-8">
      <div className="w-full">
        <Title className="text-2xl sm:text-2.5xl md:text-3xl text-[var(--text)] text-left pb-4 sm:pb-6">
          Recommended Products
        </Title>
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-[var(--white)] border border-[var(--border)] p-3 sm:p-4 md:p-5 rounded-md hover:shadow-sm transition-all duration-300 flex flex-col cursor-pointer h-full"
            >
              <div className="relative w-full h-56 aspect-square mb-2 sm:mb-3 overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 480px) 45vw, (max-width: 640px) 30vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  priority={index < 4}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between pt-1">
                <div>
                  <Title className="text-sm sm:text-base md:text-lg text-[var(--text)] text-left mb-1 sm:mb-2 line-clamp-2">
                    {product.name}
                  </Title>
                  <p className="text-[var(--main)] text-sm sm:text-base font-semibold text-left mb-1">
                    {product.price}
                  </p>
                  {product.rating && product.reviewCount !== undefined && (
                    renderRating(product.rating, product.reviewCount)
                  )}
                </div>
                <p className="text-[var(--sub-text)] text-xs sm:text-sm text-left line-clamp-2 sm:line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
