import { create } from "zustand";
import { InvoiceProduct } from "../schema/invoice-schema";

interface InvoiceStore {
  invoiceProducts: InvoiceProduct[],
  addInvoiceProduct: (invoiceProduct: InvoiceProduct) => void
  updateInvoiceProductQuantity: (productId: string, newQuantity: number) => void,
  removeInvoiceProduct: (productId: string) => void,
}

const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoiceProducts: [],
  addInvoiceProduct: (newInvoiceProduct) => set((state) => ({
    invoiceProducts: [...state.invoiceProducts, newInvoiceProduct]
  })),
  updateInvoiceProductQuantity: (productId, newQuantity) => set((state) => {
    const invoiceProduct = state.invoiceProducts.find(invoiceProduct => invoiceProduct.id == productId)

    if (!invoiceProduct) return {
      invoiceProducts: state.invoiceProducts
    }

    invoiceProduct.quantity = newQuantity

    return {
      invoiceProducts: state.invoiceProducts
    }

  }),
  removeInvoiceProduct: (productId) => set((state) => ({
    invoiceProducts: state.invoiceProducts.filter(invoiceProduct => invoiceProduct.id !== productId)
  }))
}))

export default useInvoiceStore