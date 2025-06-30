"use client";

import React from "react";
import Image from "next/image";
import { Title } from "./ui/text";

const suppliers = [
  {
    country: "Pakistan",
    domain: "shofluence.pk",
    countryCode: "pk",
    flag: "https://flagcdn.com/pk.svg",
  },
  {
    country: "Arabic Emirates",
    domain: "shopfluence.ae",
    countryCode: "ae",
    flag: "https://flagcdn.com/ae.svg",
  },
  {
    country: "Denmark",
    domain: "shopfluence.com.dk",
    countryCode: "dk",
    flag: "https://flagcdn.com/dk.svg",
  },
  {
    country: "Australia",
    domain: "shopfluence.com.au",
    countryCode: "au",
    flag: "https://flagcdn.com/au.svg",
  },
  {
    country: "France",
    domain: "shopfluence.com.fr",
    countryCode: "fr",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    country: "United States",
    domain: "shopfluence.com.us",
    countryCode: "us",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    country: "Russia",
    domain: "shopfluence.com.ru",
    countryCode: "ru",
    flag: "https://flagcdn.com/ru.svg",
  },
  {
    country: "China",
    domain: "shopfluence.com.cn",
    countryCode: "cn",
    flag: "https://flagcdn.com/cn.svg",
  },
  {
    country: "Italy",
    domain: "shopfluence.com.it",
    countryCode: "it",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    country: "Great Britain",
    domain: "shopfluence.co.uk",
    countryCode: "gb",
    flag: "https://flagcdn.com/gb.svg",
  },
];

const SuppliersByRegion = () => {
  return (
    <section className="py-4 w-full">
      <div className="w-full">
        <div className="w-full">
          <Title className="text-2xl md:text-3xl text-[var(--text)] text-left pb-12">
            Suppliers by region
          </Title>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className="bg-[var(--white)] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-9 mb-2 relative rounded overflow-hidden shadow-sm">
                  <Image
                    src={supplier.flag}
                    alt={`${supplier.country} flag`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-[var(--text)] font-medium text-left">
                  {supplier.country}
                </h3>
                <p className="text-[var(--sub-text)] text-sm text-left">
                  {supplier.domain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuppliersByRegion;
