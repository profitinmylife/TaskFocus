import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useTheme } from '@shared/hooks/useTheme';
import { useSidebarStore } from '../Sidebar';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleSideBar = useSidebarStore((s) => s.toggleSideBar);

  return (
    <Flex
      asChild
      className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800 h-16 px-4 md:px-8 bg-white dark:bg-gray-900"
      align="center"
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
        <Flex className="flex-1 items-center" justify="center" align="center">
          <Text size="5" weight="bold" className="text-center w-full md:text-left md:w-auto">
            Канбан
          </Text>
          <div className="hidden md:block ml-4">
            <Text size="2" color="gray">
              Управляйте задачами с помощью drag & drop
            </Text>
          </div>
        </Flex>
        <Button size="2" className="ml-2" onClick={toggleTheme} aria-label="Переключить тему">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
        <div className="ml-4 hidden md:flex items-center gap-2">
          <Flex
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800"
            align="center"
            justify="center"
          >
            <Text weight="bold" size="2">
              И
            </Text>
          </Flex>
          <Text weight="medium">Иван Петров</Text>
        </div>
      </header>
    </Flex>
  );
};
