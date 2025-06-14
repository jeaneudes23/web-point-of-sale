import { Button } from "@/components/ui/button";
import React from "react";
import useInvoiceStore from "../hooks/useInvoiceStore";
import { Product } from "@prisma/client";
import { Minus, Plus, Trash } from "lucide-react";

export const InvoiceProductControls = ({ product }: { product: Product }) => {
  const { removeInvoiceProduct, updateInvoiceProductQuantity, invoiceProducts, addInvoiceProduct } = useInvoiceStore();

  const invoiceProduct = invoiceProducts.find((invoiceProduct) => invoiceProduct.id === product.id);

  return invoiceProduct ? (
    <div className="flex items-center gap-2">
      <div className="bg-background grow flex items-center justify-between p-2 rounded-full border">
        <Button size={"icon"} className="rounded-full size-7" onClick={() => updateInvoiceProductQuantity(invoiceProduct.id, invoiceProduct.quantity + 1)}>
          <Plus className="size-4" />
        </Button>
        <span className="text-sm font-bold">{invoiceProduct.quantity}</span>
        <Button size={"icon"} className="rounded-full size-7" disabled={invoiceProduct.quantity <= 1} onClick={() => updateInvoiceProductQuantity(invoiceProduct.id, invoiceProduct.quantity - 1)}>
          <Minus className="size-4" />
        </Button>
      </div>
      <Button size={"icon"} className="rounded-full size-7" variant={"destructive"} onClick={() => removeInvoiceProduct(invoiceProduct.id)}>
        <Trash className="size-4" />
      </Button>
    </div>
  ) : (
    <Button onClick={() => addInvoiceProduct({ ...product, quantity: 1 })} variant={"product"}>
      Add to invoice
    </Button>
  );
};
