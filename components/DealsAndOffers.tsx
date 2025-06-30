import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Title } from "./ui/text";
import { SubTitle } from "./ui/text";

const DealsAndOffers: React.FC = () => {
  const [time, setTime] = useState("");
  const endDate = new Date("2025-07-04T14:52:00+05:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;
      if (distance > 0) {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");
        setTime(`${days} ${hours} ${minutes} ${seconds}`);
      } else {
        setTime("00 00 00 00");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  const products = [
    {
      name: "Smart watches",
      discount: "25%",
      image: "/Images/products/product_1.png",
      width: 400,
      height: 400,
    },
    {
      name: "Laptops",
      discount: "15%",
      image: "/Images/products/product_3.png",
      width: 400,
      height: 400,
    },
    {
      name: "GoPro cameras",
      discount: "40%",
      image: "/Images/products/product_4.png",
      width: 400,
      height: 400,
    },
    {
      name: "Headphones",
      discount: "25%",
      image: "/Images/products/product_5.png",
      width: 400,
      height: 400,
    },
    {
      name: "Canon cameras",
      discount: "25%",
      image: "/Images/products/product_6.png",
      width: 400,
      height: 400,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[var(--white)] border border-[var(--border)] rounded-md">
      <div className="p-4 sm:p-6 mb-6 md:mb-0 md:ml-4 flex flex-col items-center md:items-start sm:items-center xs:items-center w-full md:w-auto justify-center">
        <Title className="text-lg font-semibold text-[var(--text)]">
          Deals and offers
        </Title>
        <SubTitle className="text-[var(--sub-text)]">
          Hygiene equipments
        </SubTitle>
        <div className="flex flex-col items-start justify-center">
          <div className="flex space-x-2 mt-6">
            {time.split(" ").map((t, i) => {
              const labels = ["Days", "Hours", "Mins", "Secs"];
              return (
                <div
                  key={i}
                  className="bg-[var(--bg-gray)] text-[var(--white)] px-2 py-1 rounded w-12 text-center items-center flex flex-col font-semibold"
                >
                  {t}
                  <span className="text-xs text-[var(--white)] block text-center font-light">
                    {labels[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Side: Products */}
      <div className="flex flex-wrap w-full md:w-auto justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-auto border-t md:border-t-0 md:border-l border-[var(--border)] p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[var(--bg)] transition-colors duration-200"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-md"
              width={product.width}
              height={product.height}
            />
            <p className="mt-2 text-sm text-[var(--text)]">{product.name}</p>
            <span className="text-[var(--warn)] bg-[var(--warn)]/20 px-2 py-1 rounded-full text-sm font-semibold">{`-${product.discount}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsAndOffers;
