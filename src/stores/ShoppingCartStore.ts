import { create } from "zustand";

const ShoppingItemStore = (set: any) => ({
  selected: {
    id: null,
    name: null,
    description: null,
    price: null,
    place_left: null,
  },
  setSelected: (item: any) => set(() => ({ selected: item })),
});

const useShoppingItemStore = create(ShoppingItemStore);

export default useShoppingItemStore;
