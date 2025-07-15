import { Flex } from '@radix-ui/themes';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

const ResponsiveLayout = () => {
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

export default ResponsiveLayout;
