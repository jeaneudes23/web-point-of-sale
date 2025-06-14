"use client";

import Image from "next/image";
import useInvoiceStore from "../hooks/useInvoiceStore";
import { formatMoney } from "@/lib/utils";
import useProductListFilter from "@/features/products/hooks/useProductListFilter";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export const InvoiceProductsList = () => {
  const { invoiceProducts, removeInvoiceProduct } = useInvoiceStore();
  const { setQuery, query } = useProductListFilter();

  const showSingleItem = (name: string) => {
    if (name == query) {
      setQuery("");
    } else {
      setQuery(name);
    }
  };

  return (
    <div className="grid space-y-2">
      {invoiceProducts.map((invoiceProduct, index) => (
        <div key={invoiceProduct.id} className="flex items-center gap-2 text-sm ">
          <span className="text-muted-foreground font-bold">{index + 1}.</span>
          <div onClick={() => showSingleItem(invoiceProduct.name)} className={twMerge(invoiceProduct.name === query ? "border-2 border-primary" : "", "py-2 grow rounded-xl border-2 transition-colors cursor-pointer duration-200 p-3 flex items-start gap-4")}>
            <div className="w-10 aspect-square relative rounded-[inherit]">
              <Image src={invoiceProduct.image!} className="object-cover rounded-[inherit]" alt={invoiceProduct.name} fill />
            </div>
            <div className="grid grow ">
              <div className="flex justify-between">
                <h3 className="font-medium line-clamp-1">{invoiceProduct.name}</h3>
              </div>
              <div className="flex justify-between ">
                <p className="font-semibold">
                  {formatMoney(invoiceProduct.price)} <span className="text-muted-foreground">x{invoiceProduct.quantity}</span>
                </p>
                <p className="text-primary font-bold">{formatMoney(invoiceProduct.price * invoiceProduct.quantity)}</p>
              </div>
            </div>
          </div>
          <Button onClick={() => removeInvoiceProduct(invoiceProduct.id)} size={"icon"} className="size-6" variant={"destructive"}>
            <span className="sr-only">Remove from invoice</span>
            <Trash className="size-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};
