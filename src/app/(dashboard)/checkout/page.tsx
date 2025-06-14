import { Button } from "@/components/ui/button";
import { CategoriesList } from "@/features/categories/components/CategoriesList";
import { ClearInvoiceList } from "@/features/invoices/components/ClearInvoiceList";
import { InvoicePriceBreakdown } from "@/features/invoices/components/InvoicePriceBreakdown";
import { InvoiceProductsList } from "@/features/invoices/components/InvoiceProductsList";
import { ProductsList } from "@/features/products/components/ProductsList";
import { ProductsListSearchBar } from "@/features/products/components/ProductsListSearchBar";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-background flex grow basis-full flex-col">
        <div className="shrink-0 p-4">
          <ProductsListSearchBar />
          <CategoriesList />
        </div>
        <div className="mb-16 grow overflow-y-auto px-4">
          <ProductsList />
        </div>
      </div>
      <aside className="bg-card flex basis-1/3 flex-col space-y-4 px-4">
        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">New Invoice</h2>
          <ClearInvoiceList />
        </div>
        <div className="flex-grow overflow-y-auto">
          <InvoiceProductsList />
        </div>
        <div className="mt-auto mb-4 shrink-0 space-y-6">
          <InvoicePriceBreakdown />
          <div className="grid">
            <Button size={"lg"}>Save Invoice</Button>
          </div>
        </div>
      </aside>
    </>
  );
}
