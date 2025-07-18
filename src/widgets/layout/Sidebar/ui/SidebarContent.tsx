import { GearIcon, PlusIcon } from '@radix-ui/react-icons';
import { Badge, Button, Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { FILTERS, NAV_ITEMS, STATS } from '../lib';
import { useTranslation } from 'react-i18next';

const SidebarContent = ({
  onLinkClick,
  close,
}: {
  onLinkClick?: () => void;
  close?: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="md:p-4">
      <div className="mb-6">
        <Button
          className="flex gap-2"
          variant="solid"
          size="2"
          style={{ width: '100%', cursor: 'pointer' }}
        >
          <PlusIcon /> {t('sidebar.newTask')}
        </Button>
      </div>
      <nav className="mb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="mb-2">
          <Text as="p" color="gray">
            {t('sidebar.navigation')}
          </Text>
        </div>
        <Flex direction="column" gap="1" className="pb-2">
          {NAV_ITEMS.map((item) => (
            <Flex key={item.label} className="flex-1">
              <Link
                to={item.to}
                className="flex flex-1 items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-gray-900 dark:text-white"
                onClick={() => {
                  onLinkClick?.();
                  close?.();
                }}
              >
                {item.icon}
                <Text>{t(item.label)}</Text>
              </Link>
            </Flex>
          ))}
        </Flex>
      </nav>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="mb-2">
          <Text as="p" color="gray">
            {t('sidebar.statistics')}
          </Text>
        </div>
        <Flex direction="column" gap="1" className="pb-2">
          {STATS.map((stat) => (
            <Flex
              key={stat.label}
              justify="between"
              align="center"
              className="px-3 py-1"
            >
              <Text size="2">{t(stat.label)}</Text>
              <Badge color={stat.color}>{stat.value}</Badge>
            </Flex>
          ))}
        </Flex>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <Text as="p" color="gray">
            {t('sidebar.filtersTitle')}
          </Text>
        </div>
        <Flex direction="column" gap="1" className="pb-2">
          {FILTERS.map((filter) => (
            <div className="w-full" key={filter.label}>
              <Button
                variant="soft"
                size="2"
                className="flex justify-start gap-2"
                style={{ width: '100%', cursor: 'pointer' }}
              >
                {filter.icon}
                <Text>{t(filter.label)}</Text>
              </Button>
            </div>
          ))}
        </Flex>
      </div>
      <Flex
        className="mt-auto border-t pt-4 border-gray-200 dark:border-gray-800"
        gap="4"
        align="center"
      >
        <Button
          className="flex-1 justify-start gap-2"
          style={{ width: '100%', cursor: 'pointer' }}
        >
          <GearIcon /> {t('sidebar.settings')}
        </Button>
      </Flex>
    </div>
  );
};

export default SidebarContent;
