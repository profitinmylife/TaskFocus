import { createContext } from 'react';

type AppTheme = 'light' | 'dark';

interface ThemeContextType {
    theme: AppTheme;
    toggleTheme: () => void;
    setTheme: (theme: AppTheme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined); 