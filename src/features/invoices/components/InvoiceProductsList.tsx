"use client";

import Image from "next/image";
import useInvoiceStore from "../hooks/useInvoiceStore";
import { formatMoney } from "@/lib/utils";
import useProductListFilter from "@/features/products/hooks/useProductListFilter";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Info, Trash } from "lucide-react";

export const InvoiceProductsList = () => {
  const { invoiceProducts, removeInvoiceProduct } = useInvoiceStore();
  const { setQuery, query, setCategoryFilter } = useProductListFilter();

  const showSingleItem = (name: string) => {
    setQuery(name == query ? "" : name);
    setCategoryFilter("");
  };

  return (
    <>
      <div className="grid space-y-2">
        {invoiceProducts.map((invoiceProduct, index) => (
          <div key={invoiceProduct.id} className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground font-bold">{index + 1}.</span>
            <div onClick={() => showSingleItem(invoiceProduct.name)} className={twMerge(invoiceProduct.name === query ? "border-primary border-2" : "", "flex grow cursor-pointer items-start gap-4 rounded-lg border-2 p-3 py-2 transition-colors duration-200")}>
              <div className="relative aspect-square w-10 rounded-[inherit]">
                <Image src={invoiceProduct.image!} className="rounded-[inherit] object-cover" alt={invoiceProduct.name} fill />
              </div>
              <div className="grid grow">
                <div className="flex justify-between">
                  <h3 className="line-clamp-1 font-medium">{invoiceProduct.name}</h3>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">
                    {formatMoney(invoiceProduct.price)} <span className="text-muted-foreground">x{invoiceProduct.quantity}</span>
                  </p>
                  <p className="text-primary font-bold">{formatMoney(invoiceProduct.price * invoiceProduct.quantity)}</p>
                </div>
              </div>
            </div>
            <Button onClick={() => removeInvoiceProduct(invoiceProduct.id)} size={"icon"} className="relative size-6" variant={"destructive"}>
              <span className="sr-only">Remove from invoice</span>
              <Trash className="size-4" />
            </Button>
          </div>
        ))}
      </div>
      {!!!invoiceProducts.length && (
        <div className="bg-background flex h-full flex-col items-center justify-center rounded-xl">
          <Info />
          <p className="font-medium">No items added</p>
        </div>
      )}
    </>
  );
};
