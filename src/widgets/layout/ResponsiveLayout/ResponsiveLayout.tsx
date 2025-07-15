import { Flex } from '@radix-ui/themes';
import { Header } from '@widgets/layout/Header/Header';
import { Sidebar } from '@widgets/layout/Sidebar/ui/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

export const ResponsiveLayout = () => {
  return (
    <Flex className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <Flex direction="column" className="flex-1 min-h-screen">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </Flex>
    </Flex>
  );
};
