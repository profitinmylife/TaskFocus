import type { Auth } from '@shared/types/auth.ts';
import { create } from 'zustand';

const AUTH_KEY = 'isAuth';

export const useAuthStore = create<Auth>((set) => ({
  isAuth: false,
  isLoading: false,
  login: () => {
    localStorage.setItem(AUTH_KEY, 'true');
    set({ isAuth: true, isLoading: false });
  },
  logout: () => {
    localStorage.removeItem(AUTH_KEY);
    set({ isAuth: false, isLoading: false });
  },
  refresh: () => {
    set({ isLoading: true });
    setTimeout(() => {
      const isAuth = localStorage.getItem(AUTH_KEY) === 'true';
      set({ isAuth, isLoading: false });
    }, 2000);
  },
}));
