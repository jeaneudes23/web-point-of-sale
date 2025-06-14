import { create } from "zustand"

interface ProductListFilter {
  query: string
  setQuery: (q: string) => void
  categoryFilter: string
  setCategoryFilter: (c: string) => void
  showCategoriesFilter: boolean
  toggleShowCategoriesFilter: () => void
}

const useProductListFilter = create<ProductListFilter>((set) => ({
  query: "",
  setQuery: (q: string) => set(() => ({
    query: q
  })),
  categoryFilter: "",
  setCategoryFilter: (c: string) => set(() => ({
    categoryFilter: c
  })),
  showCategoriesFilter: true,
  toggleShowCategoriesFilter: () => set((state) => ({ showCategoriesFilter: !state.showCategoriesFilter }))
}))

export default useProductListFilter