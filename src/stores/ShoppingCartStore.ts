import { create } from 'zustand';

interface ShoppingItemProps {
    selected: any
}

const ShoppingItemStore = (set: any) => ({
    selected: null,
    setSelected: (id: any) => set((state: ShoppingItemProps) => ({ selected: id })),
});

const useShoppingItemStore = create(ShoppingItemStore )

export default useShoppingItemStore;