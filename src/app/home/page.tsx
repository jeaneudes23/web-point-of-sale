import { ProductsList } from "@/features/products/components/ProductsList";
import { ProductsListSearchBar } from "@/features/products/components/ProductsListSearchBar";
import React from "react";

export default function page() {
  return (
    <div className="mb-16">
      <ProductsList />
    </div>
  );
}
