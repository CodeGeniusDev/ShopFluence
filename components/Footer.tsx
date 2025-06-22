"use client";
import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import { FiArrowRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import { footerLinks } from "@/constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <footer className="bg-[var(--white)] text-[var(--text)]">
      <Container className="py-6 sm:py-8 md:py-6 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-16 mb-12">
          {/* Brand Info */}
          <div className="flex-1 min-w-[200px] space-y-4">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[var(--text)] text-sm sm:text-base leading-relaxed max-w-md">
              Your one-stop shop for the latest trends. We are committed to
              delivering an exceptional shopping experience.
            </p>
            <div className="pt-3">
              <SocialMedia />
            </div>
          </div>

          {/* Footer Links - Collapsible on mobile */}
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className="flex-1 min-w-[160px] border-b border-gray-700 last:border-b-0 sm:border-b-0 pb-4 sm:pb-0"
            >
              <div className="flex flex-col">
                <div className="relative">
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 sm:px-0"
                    onClick={() => toggleSection(index)}
                    aria-expanded={openSections[index] || false}
                    aria-controls={`footer-section-${index}`}
                  >
                    <h3 className="text-base font-bold text-[var(--text)] tracking-tight pl-3 sm:pl-5">
                      {section.title}
                    </h3>
                    <span className="sm:hidden text-gray-400">
                      {openSections[index] ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  id={`footer-section-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSections[index] ? "max-h-64" : "max-h-0 sm:max-h-64"
                  }`}
                >
                  <ul className="pt-1 sm:pt-2">
                    {section?.links?.map((link, linkIndex) => (
                      <li key={linkIndex} className="group relative">
                        <Link
                          href={section?.href[linkIndex]}
                          className="text-sm text-[var(--sub-text)] hover:text-[var(--main)] transition-colors duration-200 inline-block w-full py-1.5 pl-5 sm:pl-5 cursor-pointer"
                        >
                          <FiArrowRight className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--main)] w-4 h-4" />
                          <span className="hover:underline">{link}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* App Download Section */}
          <div className="flex-1 min-w-[160px] pt-4 sm:pt-0">
            <h4 className="text-base font-bold text-[var(--text)] mb-4 tracking-tight px-2 sm:px-0">
              Download Our App
            </h4>
            <div className="flex flex-col space-y-3 w-full max-w-[180px]">
              <Link
                href="#"
                className="block w-full max-w-[140px] hover:opacity-90 transition-opacity duration-200"
              >
                <div className="relative w-full h-10 sm:h-11">
                  <Image
                    src="/Images/app-store.png"
                    alt="Download on the App Store"
                    fill
                    sizes="(max-width: 640px) 140px, 160px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
              <Link
                href="#"
                className="block w-full max-w-[140px] hover:opacity-90 transition-opacity duration-200"
              >
                <div className="relative w-full h-10 sm:h-11">
                  <Image
                    src="/Images/google-play.png"
                    alt="Get it on Google Play"
                    fill
                    sizes="(max-width: 640px) 140px, 160px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Divider */}
      <div className="border-t border-[var(--border)]"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4 sm:gap-0 bg-[var(--gray)] px-4 sm:px-6 lg:px-8 pb-4">
        <p className="text-xs sm:text-sm text-[var(--sub-text)] text-center sm:text-left font-bold tracking-tight">
          &copy; {currentYear}{" "}
          <Link
            href="/"
            className="text-[var(--main)] hover:text-[var(--white)] hover:bg-[var(--main)] rounded-full border hover:border-[var(--main)] font-bold transition-colors cursor-pointer p-2"
          >
            ShopFluence.
          </Link>{" "}
          All rights reserved.
        </p>
        <div className="relative">
          <LanguageDropdown />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
