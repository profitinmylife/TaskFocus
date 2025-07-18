import { Button, Flex, Heading } from '@radix-ui/themes';
import { useSidebarStore } from '../lib';
import SidebarContent from './SidebarContent.tsx';
import { useTranslation } from 'react-i18next';

const SidebarHeader = ({
  onClose,
  showClose,
}: {
  onClose?: () => void;
  showClose?: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <Flex
      justify="between"
      align="center"
      className="pb-4 md:p-4 md:pb-0"
    >
      <Heading size="4" weight="bold">
        {t('tasks.title')}
      </Heading>
      {showClose && (
        <Button
          variant="soft"
          size="1"
          onClick={onClose}
          aria-label={t('common.button.close')}
        >
          ✕
        </Button>
      )}
    </Flex>
  );
};

const Sidebar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const mobileOpen = useSidebarStore((s) => s.mobileOpen);
  const toggleSideBar = useSidebarStore((s) => s.toggleSideBar);

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => toggleSideBar(false)}
          />
          <Flex
            direction="column"
            className="relative bg-white text-black dark:bg-gray-900 dark:text-white w-72 max-w-full h-full p-4 animate-slide-in transition-transform duration-300 z-10 overflow-y-auto max-h-screen"
          >
            <SidebarHeader
              onClose={() => toggleSideBar(false)}
              showClose
            />
            {SidebarContent({
              onLinkClick,
              close: () => toggleSideBar(false),
            })}
          </Flex>
        </div>
      )}
      <div className="hidden md:flex">
        <Flex
          direction="column"
          className="w-72 max-w-full h-screen bg-white text-black dark:bg-gray-900 dark:text-white border-r sticky top-0 transition-all duration-300 border-gray-200 dark:border-gray-800"
        >
          <SidebarHeader />
          {SidebarContent({ onLinkClick })}
        </Flex>
      </div>
    </>
  );
};

export default Sidebar;
