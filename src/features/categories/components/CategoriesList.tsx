"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/category-api";
import useProductListFilter from "@/features/products/hooks/useProductListFilter";
import { twMerge } from "tailwind-merge";

export const CategoriesList = () => {
  const fetch = async () => {
    return await getCategories();
  };

  const {
    data: categories,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetch,
  });

  const { showCategoriesFilter, categoryFilter, setCategoryFilter } = useProductListFilter();

  return isLoading ? (
    <LoadingSkeleton />
  ) : !isSuccess ? (
    <ErrorMessage />
  ) : (
    <div className={twMerge("mt-4 flex flex-wrap items-center gap-1 text-xs font-medium", showCategoriesFilter ? "" : "hidden")}>
      {categories.map((category) => (
        <div onClick={() => setCategoryFilter(category.name)} key={category.id} className={twMerge("bg-card cursor-pointer rounded border-2 px-2 py-1", categoryFilter == category.name ? "border-primary" : "")}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

const LoadingSkeleton = () => {
  return <div>Loading</div>;
};

const ErrorMessage = () => {
  return <div>Error</div>;
};
