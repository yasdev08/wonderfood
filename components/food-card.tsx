"use client";

import { useState } from "react";
import { MenuItem } from "@/app/page";
import { Plus } from "lucide-react";
import Image from "next/image";
import nutellaImage from "../public/nutella.jpg";

interface FoodCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function FoodCard({ item, onAddToCart }: FoodCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Placeholder */}
      <div className="aspect-square bg-linear-to-br from-primary/20 to-accent/10 overflow-hidden relative">
        <Image
          src={nutellaImage}
          alt={item.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {item.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent">
            {item.price} DA
          </span>

          <button
            onClick={handleAddToCart}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isAdded
                ? "bg-accent text-primary"
                : "bg-primary/20 text-accent hover:bg-primary/30 active:scale-95"
            }`}
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {isAdded && (
          <p className="text-xs text-accent mt-2 text-center font-semibold">
            Added to cart!
          </p>
        )}
      </div>
    </div>
  );
}
