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
    <div className="flex justify-between gap-2 text-sm">
      <Button variant={"card"} className="h-auto" onClick={toggleShowCategoriesFilter}>
        <ChevronDown className={twMerge(showCategoriesFilter ? "" : "rotate-180", "relative transition-all duration-300")} />
        <span className="sr-only">Hide/Show categories</span>
      </Button>
      <div className="bg-card flex grow items-center gap-2 rounded-lg border p-3">
        <Search className="size-5" />
        <input className="w-full outline-none" placeholder="Search product" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <Button variant={"card"} onClick={clear} className="relative h-auto">
        <X />
        <span className="sr-only">Clear search</span>
      </Button>
    </div>
  );
};
