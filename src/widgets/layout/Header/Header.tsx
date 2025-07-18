import {
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useTheme } from '@shared/hooks/useTheme';
import { useSidebarStore } from '@widgets/layout/Sidebar';
import { useMatches } from 'react-router-dom';
import type { RouteMeta } from '@shared/types';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@features/languageSwitcher';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleSideBar = useSidebarStore((s) => s.toggleSideBar);
  const matches = useMatches();
  const { t } = useTranslation();

  const lastMatch = matches.at(-1) as
    | { data?: { meta?: RouteMeta } }
    | undefined;

  const meta = lastMatch?.data?.meta ?? {};
  const title = meta.title ? t(meta.title) : t('tasks.title');
  const description = meta.description ? t(meta.description) : '';

  return (
    <Flex
      asChild
      className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800 px-4 md:px-8 bg-white dark:bg-gray-900"
      align="center"
      height="75px"
    >
      <header className="flex w-full items-center">
        <div className="md:hidden mr-2">
          <Button
            variant="ghost"
            size="2"
            onClick={() => toggleSideBar(true)}
            aria-label="Открыть меню"
          >
            <HamburgerMenuIcon width={24} height={24} />
          </Button>
        </div>
        <Flex
          className="flex-1 items-center"
          justify="center"
          align="center"
          direction="column"
        >
          <Text
            size="5"
            weight="bold"
            className="text-center w-full md:text-left md:w-auto"
          >
            {title}
          </Text>
          {description && (
            <div className="hidden md:block ml-4">
              <Text size="2" color="gray">
                {description}
              </Text>
            </div>
          )}
        </Flex>

        <Flex gap="2">
          <Button
            size="2"
            className="ml-2"
            onClick={toggleTheme}
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
          <LanguageSwitcher />
        </Flex>

        <div className="ml-4 hidden md:flex items-center gap-2">
          <Flex
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800"
            align="center"
            justify="center"
          >
            <Text weight="bold" size="2">
              {t('profile.name')[0]}
            </Text>
          </Flex>
          <Text weight="medium">{t('profile.name')}</Text>
        </div>
      </header>
    </Flex>
  );
};
