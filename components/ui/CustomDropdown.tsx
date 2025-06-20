"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export type DropdownOption = {
  label: string;
  flagSrc: string; // Made required
  value?: string;
};

type DropdownDirection = 'up' | 'down';

type CustomDropdownProps = {
  options: DropdownOption[];
  selectedOption: DropdownOption;
  onSelect: (option: DropdownOption) => void;
  direction?: DropdownDirection;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  showFlag?: boolean;
  showChevron?: boolean;
  ariaLabel?: string;
};

export function CustomDropdown({
  options,
  selectedOption,
  onSelect,
  direction = 'down',
  className = "",
  buttonClassName = "",
  menuClassName = "",
  showFlag = true,
  showChevron = true,
  ariaLabel = "Select an option"
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  const menuPosition = direction === 'up' 
    ? 'bottom-full mb-1' 
    : 'mt-1';

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full gap-2 py-2 text-sm cursor-pointer ${buttonClassName}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
      >
        <div className="flex items-center gap-2">
          {showFlag && selectedOption.flagSrc && (
            <div className="w-5 flex-shrink-0">
              <Image
                src={selectedOption.flagSrc}
                alt=""
                width={20}
                height={14}
                className="w-full h-auto object-cover"
                aria-hidden="true"
              />
            </div>
          )}
          <span className="truncate">{selectedOption.label}</span>
        </div>
        {showChevron && (
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        )}
      </button>

      {isOpen && (
        <div 
          className={`absolute right-0 ${menuPosition} w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${menuClassName}`}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className={`flex items-center px-4 py-2 text-sm cursor-pointer ${
                  selectedOption.label === option.label 
                    ? 'bg-gray-100 text-[var(--main)]' 
                    : 'text-[var(--sub-text)] hover:bg-gray-50'
                }`}
                role="menuitem"
              >
                {showFlag && option.flagSrc && (
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={option.flagSrc}
                      alt=""
                      width={20}
                      height={14}
                      className="w-full h-auto object-cover"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <span className={showFlag ? 'ml-2' : ''}>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
