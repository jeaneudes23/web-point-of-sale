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
    <div className="bg-background p-6 rounded-xl shadow-md">
      <div className="text-sm font-medium flex justify-between text-muted-foreground">
        <h3>Sub Total</h3>
        <p>{formatMoney(subTotal)}</p>
      </div>
      <div className="text-sm font-medium flex justify-between text-muted-foreground">
        <h3>Tax 5%</h3>
        <p>{formatMoney(taxAmount)}</p>
      </div>
      <div className="font-semibold flex justify-between">
        <h3>Total Amount</h3>
        <p>{formatMoney(subTotal + taxAmount)}</p>
      </div>
    </div>
  );
};
