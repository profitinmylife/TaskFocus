import type { AppTheme } from '@shared/types/theme';

export const themeColorMap: Record<AppTheme, Record<string, string>> = {
    light: {
        bg: '#ffffff',
        text: '#222222',
        primary: '#4f46e5',
        secondary: '#f1f5f9',
        // ...добавляйте свои цвета
    },
    dark: {
        bg: '#18181b',
        text: '#f1f5f9',
        primary: '#6366f1',
        secondary: '#27272a',
        // ...добавляйте свои цвета
    },
}; 