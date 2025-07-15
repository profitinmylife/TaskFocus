import { GearIcon, PlusIcon } from '@radix-ui/react-icons';
import { Badge, Button, Flex, Text } from '@radix-ui/themes';
import { FILTERS, NAV_ITEMS, STATS } from '../lib';

const SidebarContent = ({
  onLinkClick,
  close,
}: {
  onLinkClick?: () => void;
  close?: () => void;
}) => {
  return (
    <div className="md:p-4">
      <div className="mb-6">
        <Button variant="solid" size="2" style={{ width: '100%', cursor: 'pointer' }}>
          <PlusIcon className="mr-2" /> Новая задача
        </Button>
      </div>
      <nav className="mb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="mb-2">
          <Text as="p" color="gray">
            Навигация
          </Text>
        </div>
        <Flex direction="column" gap="1" className="pb-2">
          {NAV_ITEMS.map((item) => (
            <Flex key={item.label} className="flex-1">
              <a
                href={item.to}
                className="flex flex-1 items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-gray-900 dark:text-white"
                onClick={() => {
                  onLinkClick?.();
                  close?.();
                }}
              >
                {item.icon}
                <Text>{item.label}</Text>
              </a>
            </Flex>
          ))}
        </Flex>
      </nav>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="mb-2">
          <Text as="p" color="gray">
            Статистика
          </Text>
        </div>
        <Flex direction="column" gap="1" className="pb-2">
          {STATS.map((stat) => (
            <Flex key={stat.label} justify="between" align="center" className="px-3 py-1">
              <Text size="2">{stat.label}</Text>
              <Badge color={stat.color}>{stat.value}</Badge>
            </Flex>
          ))}
        </Flex>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <Text as="p" color="gray">
            Фильтры
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
                <Text>{filter.label}</Text>
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
        <Button className="flex-1 justify-start gap-2" style={{ width: '100%', cursor: 'pointer' }}>
          <GearIcon /> Настройки
        </Button>
      </Flex>
    </div>
  );
};

export default SidebarContent;
