"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Title } from "./ui/text";

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    item: "",
    details: "",
    quantity: "",
    unit: "pcs",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Thank you for your request!\n\n` +
      `Item: ${formData.item}\n` +
      `Quantity: ${formData.quantity} ${formData.unit}\n` +
      `Details: ${formData.details || "No additional details provided"}\n\n` +
      `We'll get back to you soon!`;
    alert(message);
  };

  return (
    <section className="w-full py-4">
      <div className="relative w-full py-12 md:py-12 overflow-hidden rounded-md">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--main)] to-[var(--second)]"></div>
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/banner/banner_03.jpg"
              alt="Warehouse background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-10 lg:p-12 text-white">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <Title className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      Easy Supplier Requests
                    </Title>
                    <p className="text-[var(--white)] text-sm md:text-base mb-6">
                      Streamline your procurement with our quick quote system.
                      Get competitive offers from multiple suppliers in one
                      place.
                    </p>
                    <div className="flex items-center space-x-3 mt-8">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--main)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        No obligations
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mt-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--main)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        Competitive pricing
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--white)] p-6 sm:p-8">
                  <div className="max-w-md mx-auto">
                    <div className="text-center mb-6">
                      <Title className="text-xl font-bold text-[var(--main)]">
                        Get a Quote
                      </Title>
                      <p className="text-sm text-[var(--sub-text)] mt-1">
                        Fill in the details below and we ll get back to you
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="item"
                          value={formData.item}
                          onChange={handleChange}
                          placeholder="What do you need?"
                          className="w-full px-4 py-2.5 text-sm border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--main)] focus:border-[var(--main)] outline-none transition-all duration-200"
                          required
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Additional details (optional)"
                          className="w-full px-4 py-2.5 text-sm border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--main)] focus:border-[var(--main)] outline-none transition-all duration-200 resize-none"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            placeholder="Quantity"
                            className="w-full px-4 py-2.5 text-sm border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--main)] focus:border-[var(--main)] outline-none transition-all duration-200"
                            required
                          />
                        </div>
                        <div className="relative">
                          <select
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 text-sm border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--main)] focus:border-[var(--main)] outline-none appearance-none bg-white pr-8 transition-all duration-200"
                          >
                            <option value="pcs">Pieces</option>
                            <option value="kg">Kilograms</option>
                            <option value="g">Grams</option>
                            <option value="l">Liters</option>
                            <option value="m">Meters</option>
                            <option value="box">Boxes</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="default"
                        className="w-full bg-[var(--main)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md p-4 py-5 sm:text-sm font-bold transition-colors cursor-pointer"
                      >
                        Get Quotes Now
                        <span className="ml-2">→</span>
                      </Button>

                      <p className="text-xs text-center text-[var(--sub-text)] mt-4">
                        We ll connect you with verified suppliers who can meet
                        your requirements
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequest;
