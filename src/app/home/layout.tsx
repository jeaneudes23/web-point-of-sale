import { Button } from "@/components/ui/button";
import { InvoicePriceBreakdown } from "@/features/invoices/components/InvoicePriceBreakdown";
import { InvoiceProductsList } from "@/features/invoices/components/InvoiceProductsList";
import { ProductsListSearchBar } from "@/features/products/components/ProductsListSearchBar";
import React, { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-dvh flex">
      <aside className="basis-64 shrink-0 bg-card flex flex-col px-4">
        <div className="shrink-0 h-20 flex items-center">Top</div>
        <div className="flex-grow overflow-y-auto"></div>
        <div className="mt-auto shrink-0">Bottom</div>
      </aside>
      <div className="grow basis-full bg-background flex flex-col px-8">
        <div className="shrink-0 my-6">
          <ProductsListSearchBar />
        </div>
        <div className="grow overflow-y-auto">{children}</div>
      </div>
      <aside className="basis-1/3 bg-card flex flex-col px-4">
        <div className="shrink-0 h-20 flex items-center">
          <div>
            <h2 className="font-bold text-lg">New Invoice</h2>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          <InvoiceProductsList />
        </div>
        <div className="mt-auto shrink-0 my-6 space-y-6">
          <InvoicePriceBreakdown />
          <div className="grid">
            <Button size={"lg"}>Save Invoice</Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
