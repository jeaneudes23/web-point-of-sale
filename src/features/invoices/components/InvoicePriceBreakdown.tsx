"use client";

import useInvoiceStore from "../hooks/useInvoiceStore";
import { formatMoney } from "@/lib/utils";

export const InvoicePriceBreakdown = () => {
  const { invoiceProducts } = useInvoiceStore();
  const subTotal = invoiceProducts.reduce((subTotal, invoiceProduct) => {
    subTotal += invoiceProduct.price * invoiceProduct.quantity;
    return subTotal;
  }, 0);

  const taxAmount = (subTotal * 5) / 100;

  return (
    <div className="bg-background rounded-xl p-6 shadow-md">
      <div className="text-muted-foreground flex justify-between text-sm font-medium">
        <h3>Sub Total</h3>
        <p>{formatMoney(subTotal)}</p>
      </div>
      <div className="text-muted-foreground mt-1 mb-4 flex justify-between text-sm font-medium">
        <h3>Tax 5%</h3>
        <p>{formatMoney(taxAmount)}</p>
      </div>
      <div className="flex justify-between font-semibold">
        <h3>Total Amount</h3>
        <p>{formatMoney(subTotal + taxAmount)}</p>
      </div>
    </div>
  );
};
