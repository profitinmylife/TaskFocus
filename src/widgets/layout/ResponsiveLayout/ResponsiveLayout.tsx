import { Flex } from '@radix-ui/themes';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { MetaHandler } from '@features/metaHandler';
import { useAuthStore } from '@entities/user/model/useAuthStore';
import { Spinner } from '@radix-ui/themes';

const ResponsiveLayout = () => {
  const isLoading = useAuthStore((s) => s.isLoading);

  return (
    <Flex className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <Flex
        direction="column"
        className="flex-1 min-h-screen"
      >
        <Header />
        <main className="flex-1 p-4">
          {isLoading ? (
            <Flex
              align="center"
              justify="center"
              className="h-full w-full"
            >
              <Spinner size="3" />
            </Flex>
          ) : (
            <>
              <MetaHandler />
              <Outlet />
            </>
          )}
        </main>
      </Flex>
    </Flex>
  );
};

export default ResponsiveLayout;
