"use client";

import { Search, X } from "lucide-react";
import useProductListFilter from "../hooks/useProductListFilter";
import { Button } from "@/components/ui/button";

export const ProductsListSearchBar = () => {
  const { query, setQuery } = useProductListFilter();
  return (
    <div className="flex justify-between">
      <div className="bg-card flex items-center p-3 gap-2 shadow basis-sm rounded-full">
        <Search className="size-5" />
        <input className="w-full outline-none" placeholder="Search product" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <Button onClick={() => setQuery("")} size={"icon"}>
        <X className="size-5" />
        <span className="sr-only">Clear search</span>
      </Button>
    </div>
  );
};
