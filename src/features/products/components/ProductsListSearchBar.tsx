"use client";

import { ChevronDown, Search, X } from "lucide-react";
import useProductListFilter from "../hooks/useProductListFilter";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

export const ProductsListSearchBar = () => {
  const { query, setQuery, toggleShowCategoriesFilter, showCategoriesFilter, setCategoryFilter } = useProductListFilter();
  const clear = () => {
    setQuery("");
    setCategoryFilter("");
  };
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="bg-card flex basis-sm items-center gap-2 rounded-full border p-3 shadow">
        <Search className="size-5" />
        <input className="w-full outline-none" placeholder="Search product" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"card"} onClick={clear} size={"icon"} className="relative">
          <X className="size-5" />
          <span className="sr-only">Clear search</span>
        </Button>
        <Button variant={"product"} onClick={toggleShowCategoriesFilter}>
          <ChevronDown className={twMerge(showCategoriesFilter ? "" : "rotate-180", "transition-all duration-300")} />
        </Button>
      </div>
    </div>
  );
};
