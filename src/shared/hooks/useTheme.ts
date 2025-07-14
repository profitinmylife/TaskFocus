import { useContext } from 'react';
import { ThemeContext } from '@app/providers/ThemeProvider';
import type { ThemeContextType } from '@shared/types/theme';

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 