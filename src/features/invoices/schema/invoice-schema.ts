import { Product } from "@prisma/client";

export interface InvoiceProduct extends Product {
  quantity: number
}