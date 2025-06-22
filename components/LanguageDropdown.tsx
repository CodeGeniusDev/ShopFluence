"use client";
import { useState } from "react";
import { CustomDropdown } from "./ui/CustomDropdown";
import { DropdownOption } from "./ui/CustomDropdown";

type LanguageOption = DropdownOption;

const defaultLanguageOptions: LanguageOption[] = [
  { label: "English, USD", flagSrc: "/Images/usa.jpg", value: "en-US" },
  { label: "English, PKR", flagSrc: "/Images/pakistan.jpg", value: "en-PK" },
  { label: "English, GBP", flagSrc: "/Images/uk.jpg", value: "en-GB" },
  { label: "English, INR", flagSrc: "/Images/india.jpg", value: "en-IN" },
  { label: "Arabic, SAR", flagSrc: "/Images/saudi-arabia.jpg", value: "ar-SA" },
];

type Props = {
  languageOptions?: LanguageOption[];
  colors?: {
    primary: string;
    text: string;
    hover: string;
  };
  className?: string;
};

export default function LanguageDropdown({
  languageOptions = defaultLanguageOptions,
  colors = { primary: "var(--main)", text: "var(--text)", hover: "var(--main-bg)" },
  className = "",
}: Props) {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(languageOptions[0]);

  const handleLanguageChange = (option: LanguageOption) => {
    setSelectedLanguage(option);
    // Here you would typically update the language in your app's state
    // e.g., i18n.changeLanguage(option.value);
  };

  return (
    <CustomDropdown
      options={languageOptions}
      selectedOption={selectedLanguage}
      onSelect={handleLanguageChange}
      direction="up"
      className={`w-full sm:w-auto ${className}`}
      buttonClassName={`text-[${colors.text}] hover:text-[${colors.primary}] transition-colors`}
      ariaLabel="Select language"
    />
  );
}
