"use client";

import { Heart } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useFavorites } from "@/contexts/FavoritesContext";

type FavoriteButtonProps = {
  product?: {
    id: string | number;
    name: string;
    price: string;
    image: string;
    description: string;
  };
  showCount?: boolean;
  className?: string;
};

const FavoriteButton = ({ product, showCount = true, className = "" }: FavoriteButtonProps) => {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  
  const handleClick = (e: React.MouseEvent) => {
    if (!product) return;
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const buttonContent = (
    <button
      onClick={handleClick}
      className={`group relative flex items-center justify-center ${className}`}
      aria-label={product ? (isFavorite(product.id) ? "Remove from favorites" : "Add to favorites") : "View favorites"}
    >
      <Heart 
        className={`transition-colors ${product && isFavorite(product.id) ? 'fill-[var(--warn)] text-[var(--warn)]' : 'text-[var(--sub-text)] group-hover:text-[var(--warn)]'}`} 
      />
      {showCount && favorites.length > 0 && (
        <span
          className="absolute -top-2 -right-2 z-10 text-xs inline-flex text-[var(--white)] bg-[var(--warn)] items-center justify-center px-1
          rounded-full transition-all ease-in-out duration-300 min-w-4 h-4"
        >
          {favorites.length}
        </span>
      )}
    </button>
  );

  if (!product) {
    return (
      <Link href={"/favorite"} className={className}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default FavoriteButton;