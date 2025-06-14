import { create } from "zustand"

interface ProductListFilter {
  query: string,
  setQuery: (q: string) => void
}

const useProductListFilter = create<ProductListFilter>((set) => ({
  query: "",
  setQuery: (q: string) => set(() => ({
    query: q
  }))
}))

export default useProductListFilter