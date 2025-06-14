"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product-api";
import { ProductCard } from "./ProductCard";
import useProductListFilter from "../hooks/useProductListFilter";

export const ProductsList = () => {
  const fetchProducts = async () => {
    return await getProducts();
  };

  const { query } = useProductListFilter();

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return isLoading ? (
    <LoadingSkeleton />
  ) : !isSuccess ? (
    <ErrorMessage />
  ) : (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
      {products
        .filter((product) => product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

const LoadingSkeleton = () => {
  return <div>Loading..</div>;
};

const ErrorMessage = () => {
  return <div>Error !!</div>;
};
