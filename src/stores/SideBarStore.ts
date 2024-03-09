import { create } from 'zustand';

interface SideBarProps {
    isOpen: boolean,
}

const SidebarStore = (set: any) => ({
    isOpen: false,
    toggleSidebar: () => set((state: SideBarProps) => ({ isOpen: !state.isOpen })),
    closeSideBar: () => set({isOpen: false})
});

const useSidebarStore = create(SidebarStore)

export default useSidebarStore;