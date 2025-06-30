"use client";
import React from "react";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import DealsAndOffers from "@/components/DealsAndOffers";

const page = () => {
  return (
    <>
      <Container>
        <HomeBanner />
        <DealsAndOffers />
        <ProductGrid />
      </Container>
    </>
  );
};

export default page;
