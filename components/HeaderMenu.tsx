"use client";
import { mainData } from "@/constants/data";
import Link from "next/link";
import React from "react";
import LanguageShippingDropdowns from "./LanguageShippingDropdowns";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <nav className="sticky top-0 z-40 w-full px-4 py-1 md:px-10 flex items-center justify-between bg-[var(--white)] border-y border-[var(--border)]">
        {/* Mobile Menu Button */}
        <MobileMenu />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 p-2 items-center">
          {mainData?.map((Item) => {
            const isActive = Item.href === '/' 
              ? pathname === '/'
              : pathname.startsWith(Item.href);
              
            return (
              <Link
                href={Item.href}
                key={Item.id}
                className={`transition-colors cursor-pointer text-sm font-medium ${
                  isActive 
                    ? 'text-[var(--main)]' 
                    : 'text-[var(--text)] hover:text-[var(--main)]'
                }`}
              >
                {Item.title}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <LanguageShippingDropdowns />
        </div>
      </nav>
    </div>
  );
};

export default HeaderMenu;
