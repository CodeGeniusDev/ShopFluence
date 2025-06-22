"use client";
import React, { useState } from "react";
import { AlignLeft, X } from "lucide-react";
import { mainData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <button
        className="flex items-center gap-2 text-[var(--text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <AlignLeft className="w-6 h-6" />}
      </button>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg blur-lg"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
        
        <div
          className={`absolute top-0 left-0 w-80 max-w-[80vw] h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                className="text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="flex flex-col space-y-4 mb-6">
                {mainData?.map((Item) => {
                  const isActive = Item.href === '/' 
                    ? pathname === '/'
                    : pathname.startsWith(Item.href);
                    
                  return (
                    <Link
                      href={Item.href}
                      key={Item.id}
                      onClick={handleNavItemClick}
                      className={`block py-2 px-3 border-b border-[var(--sub-text)] transition-colors ${
                        isActive 
                          ? 'bg-[var(--main-bg)] text-[var(--main)]' 
                          : 'text-[var(--text)] hover:bg-[var(--main-bg)] hover:text-[var(--main)]'
                      }`}
                    >
                      {Item.title}
                    </Link>
                  );
                })}
                <SocialMedia className="mt-4" />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
