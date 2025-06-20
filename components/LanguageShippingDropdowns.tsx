"use client";
import { useState } from "react";
import { CustomDropdown } from "./ui/CustomDropdown";

import { DropdownOption } from "./ui/CustomDropdown";

type ShippingOption = DropdownOption;
type LanguageOption = DropdownOption;

type Props = {
  languageOptions?: LanguageOption[];
  shippingOptions?: ShippingOption[];
  colors?: {
    primary: string;
    text: string;
    hover: string;
  };
  className?: string;
};

const defaultLanguageOptions: LanguageOption[] = [
  { label: "English, USD", flagSrc: "/Images/usa.jpg", value: "en-US" },
  { label: "English, PKR", flagSrc: "/Images/pakistan.jpg", value: "en-PK" },
  { label: "English, GBP", flagSrc: "/Images/uk.jpg", value: "en-GB" },
  { label: "English, INR", flagSrc: "/Images/india.jpg", value: "en-IN" },
  { label: "Arabic, SAR", flagSrc: "/Images/saudi-arabia.jpg", value: "ar-SA" },
];

const defaultShippingOptions: ShippingOption[] = [
  { label: "Pakistan", flagSrc: "/Images/pakistan.jpg", value: "PK" },
  { label: "USA", flagSrc: "/Images/usa.jpg", value: "US" },
  { label: "UK", flagSrc: "/Images/uk.jpg", value: "GB" },
  { label: "India", flagSrc: "/Images/india.jpg", value: "IN" },
  { label: "Saudi Arabia", flagSrc: "/Images/saudi-arabia.jpg", value: "SA" },
];

export default function LanguageShippingDropdowns({
  languageOptions = defaultLanguageOptions,
  shippingOptions = defaultShippingOptions,
  colors = { primary: "var(--main)", text: "var(--text)", hover: "var(--main-bg)" },
  className = "",
}: Props) {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languageOptions[0]);
  const [selectedCountry, setSelectedCountry] = useState<ShippingOption>(shippingOptions[0]);

  const handleLanguageChange = (option: LanguageOption) => {
    setSelectedLanguage(option);
    // Here you would typically update the language in your app's state
    // e.g., i18n.changeLanguage(option.value);
  };

  const handleCountryChange = (option: ShippingOption) => {
    setSelectedCountry(option);
    // Here you would typically update the shipping country in your app's state
  };

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center w-full gap-4 sm:gap-6 ${className}`}>
      {/* Language Selector */}
      <CustomDropdown
        options={languageOptions}
        selectedOption={selectedLanguage}
        onSelect={handleLanguageChange}
        direction="down"
        className="w-full sm:w-auto"
        buttonClassName={`text-[${colors.text}] hover:text-[${colors.primary}] transition-colors py-3 sm:py-2`}
        menuClassName="left-0"
        ariaLabel="Select language"
      />

      {/* Shipping Country Selector */}
      <CustomDropdown
        options={shippingOptions}
        selectedOption={selectedCountry}
        onSelect={handleCountryChange}
        direction="down"
        className="w-full sm:w-auto"
        buttonClassName={`text-[${colors.text}] hover:text-[${colors.primary}] transition-colors py-3 sm:py-2`}
        menuClassName="right-0"
        ariaLabel="Select shipping country"
      />
    </div>
  );
}