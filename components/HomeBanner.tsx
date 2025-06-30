import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { SubTitle, Title } from "./ui/text";

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Clothing" },
  { id: 4, name: "Footwear" },
  { id: 5, name: "Accessories" },
  { id: 6, name: "Beauty" },
  { id: 7, name: "Home & Living" },
  { id: 8, name: "Sports" },
  { id: 9, name: "Health & Beauty" },
];

const HomeBanner = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center md:items-stretch md:flex-row gap-3 md:gap-4 p-2 md:px-3 md:py-4 my-0 sm:my-3 md:my-4 mx-auto bg-[var(--white)] border-0 sm:border border-[var(--border)] rounded-none sm:rounded-md">
        <div className="hidden md:grid grid-cols-1 w-full md:w-[22%] lg:w-[20%] xl:w-[18%] 2xl:w-1/5 overflow-y-auto max-h-[500px] pr-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-2 w-full rounded-md transition-colors cursor-pointer text-sm md:text-base text-[var(--text)] text-left flex items-center hover:border-[var(--white)] ${
                activeCategory === category.id
                  ? "bg-[var(--third)] hover:bg-[var(--second)] font-bold"
                  : "font-medium hover:bg-[var(--third)]"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="w-full md:w-[55%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] relative aspect-[21/9] xs:aspect-[21/8] sm:aspect-[21/7] md:aspect-[21/6] min-h-[150px] xs:min-h-[170px] sm:min-h-[200px] md:min-h-[220px] overflow-hidden rounded-md">
          <Image
            src="/Images/banner/banner.jpg"
            alt="ShopFluence - Discover Amazing Deals"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 60vw, 70vw"
            className="w-full h-full object-cover"
            priority
          />
          <div className="flex flex-col items-start justify-start mt-2 lg:mt-8 xs:mt-8 gap-1 sm:gap-2 p-3 sm:p-4 md:p-5 lg:p-6 absolute z-10 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-full">
            <Title className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-[var(--text)] drop-shadow-md">
              Latest Trending
            </Title>
            <SubTitle className="text-xl sm:text-2xl md:text-2xl lg:text-4xl text-[var(--text)] drop-shadow-md font-bold">
              Electronic Products
            </SubTitle>
            <Link href="/shop">
              <Button
                type="button"
                variant="default"
                className="bg-[var(--white)] text-sm sm:text-sm text-[var(--text)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md py-2 sm:py-2 px-4 sm:px-4 font-bold transition-colors w-fit cursor-pointer mt-2 sm:mt-2"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-col gap-2 sm:gap-3 w-full md:w-[23%] lg:w-[20%] xl:w-[22%] 2xl:w-[20%] md:min-w-[180px] mt-2 sm:mt-0 px-2 sm:px-0">
          <div className="flex flex-col items-start justify-start gap-1 sm:gap-2 p-2 sm:p-3 bg-[var(--third)] rounded-md h-full col-span-2">
            <Title>
              Join Now
            </Title>
            <SubTitle>
              Get daily news on upcoming offers from many suppliers all over the
              world
            </SubTitle>
            <Button
              type="button"
              variant="default"
              className="bg-[var(--main)] text-xs sm:text-sm text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md py-1.5 sm:py-2 px-2 sm:px-3 w-full font-bold transition-colors cursor-pointer mt-1 sm:mt-2"
            >
              Join Now
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:px-3 md:py-4 bg-[var(--star)] rounded-md cursor-pointer h-full min-h-[70px] sm:min-h-[80px] w-full">
            <Title className="text-sm md:text-base text-[var(--white)]">
              Get US $10 off with a new supplier
            </Title>
          </div>
          <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:px-3 md:py-4 bg-[var(--tag)] rounded-md cursor-pointer h-full min-h-[70px] sm:min-h-[80px] w-full">
            <Title className="text-sm md:text-base text-[var(--white)]">
              Send quotes with supplier preferences
            </Title>
          </div>
        </div>

        <div className="md:hidden w-full mt-2 max-w-[500px] mx-auto">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(Number(e.target.value))}
            className="w-full p-2 text-sm border border-[var(--sub-text)] rounded-md bg-[var(--white)] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--main)]"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
