import type { Auth } from '@shared/types/auth.ts';
import { create } from 'zustand';

export const useAuthStore = create<Auth>((set) => ({
  isAuth: true,
  isLoading: false,
  login: () => set({ isAuth: true, isLoading: false }),
  logout: () => set({ isAuth: true, isLoading: false }),
  refresh: () => set({ isAuth: true, isLoading: false }),
}));
