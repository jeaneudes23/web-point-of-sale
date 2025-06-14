import api from "@/lib/api";
import { Category } from "@prisma/client";

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await api.get('/categories')

    return response.data
  } catch {
    return []
  }
}