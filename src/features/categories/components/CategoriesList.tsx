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
        <div onClick={() => setCategoryFilter(categoryFilter == category.id ? "" : category.id)} key={category.id} className={twMerge("bg-card cursor-pointer rounded border-2 px-2 py-1", categoryFilter == category.id ? "border-primary" : "")}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-1 text-xs font-medium">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="bg-card h-7 basis-24 animate-pulse rounded border"></div>
      ))}
    </div>
  );
};

const ErrorMessage = () => {
  return <div>Error</div>;
};
