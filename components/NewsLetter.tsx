"use client";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { Button } from "./ui/button";
import { SubTitle, Title } from "./ui/text";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 bg-[var(--gray)] py-12 w-full px-4 sm:px-6 lg:px-8 mt-6">
        <Title className="text-2xl font-bold text-[var(--text)]">
          Subscribe on our NewsLetter
        </Title>
        <SubTitle className="text-[var(--sub-text)]">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </SubTitle>
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="h-5 w-5 text-[var(--sub-text)]" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="block bg-[var(--white)] w-full pl-10 pr-4 py-2 border border-[var(--main)] rounded-lg focus:ring-2 focus:ring-[var(--main)] focus:border-[var(--main)] outline-none transition-all"
              required
            />
          </div>
          <Button type="submit" variant="default" className="bg-[var(--main)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md p-4 py-5 sm:text-sm font-bold transition-colors cursor-pointer">
            Subscribe
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
