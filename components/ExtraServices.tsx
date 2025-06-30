"use client";
import React from "react";
import { FaSearch, FaBox, FaPaperPlane, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import { Title, SubTitle } from "./ui/text";

const ExtraServices = () => {
  const services = [
    {
      id: 1,
      title: "Source from Industry Hubs",
      icon: <FaSearch className="text-gray-700" />,
      image: "/Images/banner/banner_01.jpg",
    },
    {
      id: 2,
      title: "Customize Your Products",
      icon: <FaBox className="text-gray-700" />,
      image: "/Images/banner/banner_02.jpg",
    },
    {
      id: 3,
      title: "Fast, reliable shipping by ocean or air",
      icon: <FaPaperPlane className="text-gray-700" />,
      image: "/Images/banner/banner_03.jpg",
    },
    {
      id: 4,
      title: "Product monitoring and inspection",
      icon: <FaShieldAlt className="text-gray-700" />,
      image: "/Images/banner/banner_01.jpg",
    },
  ];

  return (
    <div className="w-full py-6 pb-12">
      <div className="w-full">
        <Title className="text-2xl sm:text-2.5xl md:text-3xl text-[var(--text)] text-left pb-4 sm:pb-6">
          Our extra services
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg border border-[var(--border)] transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-80"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={service.id < 4}
                />
                <div className="absolute -bottom-6 right-6 bg-[var(--third)] border-2 border-[var(--white)] w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl">{service.icon}</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <SubTitle className="font-semibold text-[var(--text)]/80">
                  {service.title}
                </SubTitle>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
