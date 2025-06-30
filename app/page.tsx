"use client";
import React from "react";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import DealsAndOffers from "@/components/DealsAndOffers";
import HomeAndOutdoor from "@/components/HomeAndOutdoor";
import QuoteRequest from "@/components/QuoteRequest";
import SuppliersByRegion from "@/components/SuppliersByRegion";

const page = () => {
  return (
    <>
      <Container>
        <HomeBanner />
        <DealsAndOffers />
        <HomeAndOutdoor />
        <QuoteRequest />
        <ProductGrid />
        <SuppliersByRegion />
      </Container>
    </>
  );
};

export default page;
