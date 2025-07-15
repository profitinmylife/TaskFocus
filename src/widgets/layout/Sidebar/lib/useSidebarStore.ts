import { create } from 'zustand';

interface SidebarState {
  mobileOpen: boolean;
  toggleSideBar: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarState>(
  (set) => ({
    mobileOpen: false,
    toggleSideBar: (value) => set({ mobileOpen: value }),
  }),
);
