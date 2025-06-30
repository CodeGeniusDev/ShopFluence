"use client";
import React from "react";
import Image from "next/image";
import { Title } from "./ui/text";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    name: "Velvet Armchair",
    price: 349.99,
    image: "/images/products/1.jpg",
  },
  {
    id: 2,
    name: "Clay Pot",
    price: 29.99,
    image: "/images/products/3.jpg",
  },
  {
    id: 3,
    name: "Potted Plant",
    price: 45.79,
    image: "/images/products/4.jpg",
  },
  {
    id: 4,
    name: "Air Mattress",
    price: 89.99,
    image: "/images/products/5.jpg",
  },
  {
    id: 5,
    name: "Table Lamp",
    price: 59.99,
    image: "/images/products/6.jpg",
  },
  {
    id: 6,
    name: "Magazine Holder",
    price: 24.99,
    image: "/images/products/7.jpg",
  },
  {
    id: 7,
    name: "Coffee Machine",
    price: 199.99,
    image: "/images/products/8.jpg",
  },
  {
    id: 8,
    name: "Fruit Juicer",
    price: 49.99,
    image: "/images/products/9.jpg",
  },
  {
    id: 9,
    name: "Smartphone",
    price: 699.99,
    image: "/images/products/10.jpg",
  },
  {
    id: 10,
    name: "Tablet",
    price: 349.99,
    image: "/images/products/11.jpg",
  },
  {
    id: 11,
    name: "Gaming Headset",
    price: 129.99,
    image: "/images/products/12.jpg",
  },
  {
    id: 12,
    name: "DSLR Camera",
    price: 899.99,
    image: "/images/products/13.jpg",
  },
  {
    id: 13,
    name: "Laptop",
    price: 1299.99,
    image: "/images/products/14.jpg",
  },
  {
    id: 14,
    name: "Smartwatch",
    price: 249.99,
    image: "/images/products/15.jpg",
  },
  {
    id: 15,
    name: "Headphones",
    price: 179.99,
    image: "/images/products/16.jpg",
  },
  {
    id: 16,
    name: "Electric Kettle",
    price: 39.99,
    image: "/images/products/17.jpg",
  },
];

const HomeAndOutdoor: React.FC = () => {
  const homeCategories = categories.slice(0, 8);
  const electronicsCategories = categories.slice(8);

  const router = useRouter();

  const CategorySection = ({
    title,
    categories,
    bgImage,
    link,
  }: {
    title: string;
    categories: typeof homeCategories;
    bgImage: string;
    link: string;
  }) => (
    <section className="w-full py-4">
      <div className="bg-[var(--white)] border border-[var(--border)] rounded-md">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 p-6 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={bgImage}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative z-10">
              <Title className="font-bold mb-4">
                {title.split(" ").slice(0, 2).join(" ")} <br />{" "}
                {title.split(" ").slice(2).join(" ")}
              </Title>
              <Button
                onClick={() => router.push(link)}
                type="submit"
                variant="default"
                className="bg-[var(--main)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md p-4 py-5 sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Source now
              </Button>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-[var(--white)] border border-[var(--border)] p-4 flex flex-col items-center text-center hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => router.push(link)}
                >
                  <div className="relative w-20 h-20 mb-2">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={500}
                      height={500}
                      className="object-contain"
                      sizes="120px"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-[var(--text)]">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[var(--sub-text)] mt-1">
                    From USD {category.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <CategorySection
        title="Home and Outdoor"
        categories={homeCategories}
        bgImage="/images/banner/banner_01.jpg"
        link="/home-and-outdoor"
      />
      <CategorySection
        title="Consumer Electronics and Gadgets"
        categories={electronicsCategories}
        bgImage="/images/banner/banner_02.jpg"
        link="/electronics-and-gadgets"
      />
    </>
  );
};

export default HomeAndOutdoor;
