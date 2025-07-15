import { type ReactNode, useEffect, useState } from 'react';
import { Theme } from '@radix-ui/themes';
import { ThemeContext } from '@shared/hooks/useTheme';
import type { AppTheme } from '@shared/types/theme';

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setThemeState] =
    useState<AppTheme>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem(
      'theme',
    ) as AppTheme | null;
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    const setInitialTheme = () => {
      if (storedTheme) {
        setThemeState(storedTheme);
      } else {
        setThemeState(
          systemPrefersDark.matches ? 'dark' : 'light',
        );
      }
    };

    const handleSystemChange = (e: MediaQueryListEvent) => {
      const localTheme = localStorage.getItem('theme');
      if (!localTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    setInitialTheme();
    systemPrefersDark.addEventListener(
      'change',
      handleSystemChange,
    );

    return () => {
      systemPrefersDark.removeEventListener(
        'change',
        handleSystemChange,
      );
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark',
    );
  }, [theme]);

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme }}
    >
      <Theme
        appearance={theme}
        accentColor="violet"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};
