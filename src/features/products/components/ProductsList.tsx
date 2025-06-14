"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product-api";
import { ProductCard } from "./ProductCard";
import useProductListFilter from "../hooks/useProductListFilter";
import { Info } from "lucide-react";

export const ProductsList = () => {
  const fetchProducts = async () => {
    return await getProducts();
  };

  const { query, categoryFilter } = useProductListFilter();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = data?.filter((product) => {
    const matchesQuery = !query || product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    const matchesCategory = !categoryFilter || product.categoryIds.includes(categoryFilter);

    return matchesCategory && matchesQuery;
  });

  return isLoading ? (
    <LoadingSkeleton />
  ) : !isSuccess || !!!products?.length ? (
    <ErrorMessage />
  ) : (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="bg-card aspect-square animate-pulse rounded-2xl p-4 shadow"></div>
      ))}
    </div>
  );
};

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <Info />
      <p className="text-lg font-medium">No products found</p>
    </div>
  );
};
