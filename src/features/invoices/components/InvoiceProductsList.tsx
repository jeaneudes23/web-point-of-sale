"use client";

import Image from "next/image";
import useInvoiceStore from "../hooks/useInvoiceStore";
import { formatMoney } from "@/lib/utils";
import useProductListFilter from "@/features/products/hooks/useProductListFilter";
import { twMerge } from "tailwind-merge";

export const InvoiceProductsList = () => {
  const { invoiceProducts } = useInvoiceStore();
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
      {invoiceProducts.map((invoiceProduct) => (
        <div onClick={() => showSingleItem(invoiceProduct.name)} className={twMerge(invoiceProduct.name === query ? "border-2 border-primary" : "", "py-2 rounded-xl border-2 transition-colors cursor-pointer duration-200 p-3 flex items-start gap-4")} key={invoiceProduct.id}>
          <div className="w-10 aspect-square relative rounded-[inherit]">
            <Image src={invoiceProduct.image!} className="object-cover rounded-[inherit]" alt={invoiceProduct.name} fill />
          </div>
          <div className="text-sm grid grow">
            <h3 className="font-medium">{invoiceProduct.name}</h3>
            <div className="flex justify-between ">
              <p className="font-semibold">
                {formatMoney(invoiceProduct.price)} <span className="text-muted-foreground">x{invoiceProduct.quantity}</span>
              </p>
              <p className="text-primary font-bold">{formatMoney(invoiceProduct.price * invoiceProduct.quantity)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
