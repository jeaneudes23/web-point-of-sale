import { Button } from "@/components/ui/button";
import { CategoriesList } from "@/features/categories/components/CategoriesList";
import { ClearInvoiceList } from "@/features/invoices/components/ClearInvoiceList";
import { InvoicePriceBreakdown } from "@/features/invoices/components/InvoicePriceBreakdown";
import { InvoiceProductsList } from "@/features/invoices/components/InvoiceProductsList";
import { ProductsListSearchBar } from "@/features/products/components/ProductsListSearchBar";
import React, { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh">
      <aside className="bg-card flex shrink-0 basis-64 flex-col px-4">
        <div className="flex h-20 shrink-0 items-center">Top</div>
        <div className="flex-grow overflow-y-auto"></div>
        <div className="mt-auto shrink-0">Bottom</div>
      </aside>
      <div className="bg-background flex grow basis-full flex-col">
        <div className="shrink-0 p-4">
          <ProductsListSearchBar />
          <CategoriesList />
        </div>
        <div className="grow overflow-y-auto px-4">{children}</div>
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
    </div>
  );
}
