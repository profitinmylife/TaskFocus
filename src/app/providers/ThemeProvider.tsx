import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react';
import { Theme as RadixTheme } from '@radix-ui/themes';

type AppTheme = 'light' | 'dark';

interface ThemeContextType {
    theme: AppTheme;
    toggleTheme: () => void;
    setTheme: (theme: AppTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<AppTheme>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as AppTheme | null;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        const setInitialTheme = () => {
            if (storedTheme) {
                setThemeState(storedTheme);
            } else {
                setThemeState(systemPrefersDark.matches ? 'dark' : 'light');
            }
        };

        const handleSystemChange = (e: MediaQueryListEvent) => {
            const localTheme = localStorage.getItem('theme');
            if (!localTheme) {
                setThemeState(e.matches ? 'dark' : 'light');
            }
        };

        setInitialTheme();
        systemPrefersDark.addEventListener('change', handleSystemChange);

        return () => {
            systemPrefersDark.removeEventListener('change', handleSystemChange);
        };
    }, []);

    const setTheme = (newTheme: AppTheme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            <RadixTheme appearance={theme}>
                {children}
            </RadixTheme>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
