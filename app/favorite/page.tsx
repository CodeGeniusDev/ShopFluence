"use client";

import React from "react";
import { useFavorites } from "@/contexts/FavoritesContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Title } from "@/components/ui/text";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const router = useRouter();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-[var(--warn)]/15">
            <Heart className="w-12 h-12 text-[var(--warn)]" />
          </div>
          <Title className="text-2xl font-semibold mb-2">
            Your favorites list is empty
          </Title>
          <p className="text-[var(--sub-text)] mb-6">
            You haven&apos;t added any products to your favorites yet.
          </p>
          <Button
            type="submit"
            variant="default"
            className="bg-[var(--main)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--main)] border hover:border-[var(--black)] rounded-md p-4 py-5 sm:text-sm font-bold transition-colors cursor-pointer"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <Title className="text-2xl font-semibold">My Favorites</Title>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <button
                onClick={() => removeFromFavorites(product.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                aria-label="Remove from favorites"
              >
                <Heart className="w-5 h-5 fill-[var(--warn)] text-[var(--warn)]" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2 h-10">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  {product.price}
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300"
                    onClick={() => router.push(`/product/${product.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[var(--main)] hover:bg-[var(--main-dark)]"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
