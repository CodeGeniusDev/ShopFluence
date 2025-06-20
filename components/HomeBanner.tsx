import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Categories = [
  "All",
  "Electronics",
  "Clothing",
  "Footwear",
  "Accessories",
  "Beauty",
  "Home & Living",
  "Sports",
  "Health & Beauty",
];

const HomeBanner = () => {
  return (
    <div className="w-full px-0 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="flex flex-col sm:mx-2 md:mx-4 lg:mx-6 justify-center items-center md:items-stretch md:flex-row gap-3 md:gap-4 p-2 md:px-3 md:py-4 my-0 sm:my-3 md:my-4 w-full max-w-[2000px] mx-auto bg-[var(--white)] border-0 sm:border border-[var(--sub-text)] rounded-none sm:rounded-md">
        <div className="hidden md:grid grid-cols-1 w-full md:w-[22%] lg:w-[20%] xl:w-[18%] 2xl:w-1/5 overflow-y-auto max-h-[500px] pr-1">
          {Categories.map((category) => (
            <button
              key={category}
              className="px-3 py-2 w-full rounded-md font-medium hover:bg-[var(--third)] focus:bg-[var(--third)] focus:font-bold transition-colors cursor-pointer text-sm md:text-base text-[var(--text)] text-left flex items-center hover:border-[var(--white)]"
            >
              {category}
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
          <div className="absolute inset-0 bg-black/20 z-[1]"></div>
          <div className="flex flex-col items-start justify-center gap-1 sm:gap-2 p-3 sm:p-4 md:p-5 lg:p-6 absolute z-10 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-full">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[var(--white)] drop-shadow-md">
              ShopFluence
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-[var(--white)] drop-shadow-md">
              Trending Products
            </p>
            <Button
              type="button"
              variant="default"
              className="bg-[var(--white)] text-sm sm:text-sm text-[var(--main)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md py-2 sm:py-2 px-4 sm:px-4 font-bold transition-colors w-fit cursor-pointer mt-2 sm:mt-2"
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-col gap-2 sm:gap-3 w-full md:w-[23%] lg:w-[20%] xl:w-[22%] 2xl:w-[20%] md:min-w-[180px] mt-2 sm:mt-0 px-2 sm:px-0">
          <div className="flex flex-col items-start justify-start gap-1 sm:gap-2 p-2 sm:p-3 bg-[var(--third)] rounded-md h-full col-span-2">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[var(--text)] break-words">
              Join Now
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--sub-text)]">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
            <Button
              type="button"
              variant="default"
              className="bg-[var(--main)] text-xs sm:text-sm text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md py-1.5 sm:py-2 px-2 sm:px-3 w-full font-bold transition-colors cursor-pointer mt-1 sm:mt-2"
            >
              Join Now
            </Button>
          </div>
          <div className="flex flex-col items-start justify-center p-2 sm:p-3 md:px-3 md:py-4 bg-[var(--star)] rounded-md cursor-pointer h-full min-h-[70px] sm:min-h-[80px] w-full">
            <h2 className="text-sm md:text-base text-[var(--white)]">
              Get US $10 off with a new supplier
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center p-2 sm:p-3 md:px-3 md:py-4 bg-[var(--tag)] rounded-md cursor-pointer h-full min-h-[70px] sm:min-h-[80px] w-full">
            <h2 className="text-sm md:text-base text-[var(--white)]">
              Send quotes with supplier preferences
            </h2>
          </div>
        </div>

        <div className="md:hidden w-full mt-2 max-w-[500px] mx-auto">
          <select className="w-full p-2 text-sm border border-[var(--sub-text)] rounded-md bg-[var(--white)] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--main)]">
            {Categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
