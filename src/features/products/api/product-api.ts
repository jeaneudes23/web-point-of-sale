import api from "@/lib/api";
import { Product } from "@prisma/client";


export async function getProducts(): Promise<Product[]> {
  try {
    const response = await api.get('/products')

    return response.data
  } catch {
    return []
  }
}