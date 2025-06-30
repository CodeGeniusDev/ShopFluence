"use client";
import React from "react";
import { Title } from "./ui/text";
import Image from "next/image";

const products = [
  {
    name: "Smartwatch",
    price: "$199",
    image: "/images/products/product_24.jpg",
    description: "Smart watch with fitness tracker and heart rate monitor."
  },
  {
    name: "Winter Jacket",
    price: "$89",
    image: "/images/products/product_25.jpg",
    description: "Warm and stylish winter jacket for cold weather."
  },
  {
    name: "Polo T-Shirt",
    price: "$29",
    image: "/images/products/product_26.jpg",
    description: "Classic fit polo t-shirt in various colors."
  },
  {
    name: "Denim Shorts",
    price: "$39",
    image: "/images/products/product_27.jpg",
    description: "Comfortable denim shorts for summer."
  },
  {
    name: "Blue Backpack",
    price: "$49",
    image: "/images/products/product_28.jpg",
    description: "Durable backpack with multiple compartments."
  },
  {
    name: "Leather Wallet",
    price: "$45",
    image: "/images/products/product_29.jpg",
    description: "Genuine leather wallet with RFID protection."
  },
  {
    name: "Formal Blazer",
    price: "$129",
    image: "/images/products/product_30.jpg",
    description: "Slim fit formal blazer for office wear."
  },
  {
    name: "Clay Pot",
    price: "$24",
    image: "/images/products/product_31.jpg",
    description: "Handcrafted clay pot for plants."
  },
  {
    name: "Electric Kettle",
    price: "$35",
    image: "/images/products/product_32.jpg",
    description: "Fast boiling electric kettle with auto shut-off."
  },
  {
    name: "Wireless Headphones",
    price: "$99",
    image: "/images/products/product_33.jpg",
    description: "Noise cancelling wireless headphones."
  },
];

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
                  <p className="text-[var(--main)] text-sm sm:text-base font-semibold text-left mb-1 sm:mb-2">
                    {product.price}
                  </p>
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
