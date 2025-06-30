"use client";
import React, { useState } from "react";
import Container from "./Container";
import { MessageCircle, GripVertical, X } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SearchBar2 from "./SearchBar2";
import HeaderMenu from "./HeaderMenu";
import Carticon from "./Carticon";
import FavoriteButton from "./FavoriteButton";
import Profile from "./Profile";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="relative">
      <Container className="bg-white flex justify-between items-center py-4 px-4 md:px-12">
        <Logo />
        <div className="hidden md:block w-full max-w-lg mx-6">
          <SearchBar onSearch={(query) => console.log("Search:", query)} />
        </div>
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <Profile />
          <button
            className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
            aria-label="Messages"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">Message</span>
          </button>
          <div className="group flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--warn)] font-bold transition-colors cursor-pointer">
            <FavoriteButton className="group-hover:text-[var(--warn)]" />
            <span className="text-xs mt-1">Orders</span>
          </div>
          <button
            className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
            aria-label="Shopping cart"
          >
            <Carticon />
            <span className="text-xs mt-1">My cart</span>
          </button>
        </div>
        <button
          className="md:hidden text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <GripVertical className="w-6 h-6" />
          )}
        </button>
      </Container>
      <div className="">
        <HeaderMenu />
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg blur-lg"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
        <div
          className={`absolute top-0 right-0 w-80 max-w-[80vw] h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between p-4 border-b border-[var(--border)]">
              <Logo />
              <button
                className="text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer text-base"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="mb-6">
                <SearchBar2
                  onSearch={(query) => {
                    console.log("Mobile search:", query);
                    handleNavItemClick();
                  }}
                />
              </div>
              <nav className="flex flex-col space-y-6 py-2">
                <div onClick={handleNavItemClick} className="px-2">
                  <div className="flex flex-col items-center">
                    <Profile />
                  </div>
                </div>
                <button
                  onClick={handleNavItemClick}
                  className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-xs mt-1">Message</span>
                </button>
                <button
                  onClick={handleNavItemClick}
                  className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                >
                  <FavoriteButton />
                  <span className="text-xs mt-1">Orders</span>
                </button>
                <button
                  onClick={handleNavItemClick}
                  className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                >
                  <Carticon />
                  <span className="text-xs mt-1">My cart</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
