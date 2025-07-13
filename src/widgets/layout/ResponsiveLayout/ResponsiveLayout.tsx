import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@widgets/layout/Sidebar/Sidebar.tsx';

import styles from './ResponsiveLayout.module.scss'; // если используешь CSS модули

export const ResponsiveLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={styles.root}>
            <nav className={styles.sidebarDesktop}>
                <Sidebar />
            </nav>

            <Dialog open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <DialogTrigger asChild>
                    <button
                        className={styles.mobileMenuButton}
                        aria-label="Открыть меню"
                    >
                        <HamburgerMenuIcon />
                    </button>
                </DialogTrigger>

                <DialogContent
                    className={styles.mobileSidebar}
                    onInteractOutside={() => setSidebarOpen(false)}
                >
                    <div className={styles.mobileSidebarHeader}>
                        <h2>Меню</h2>
                        <DialogClose asChild>
                            <button
                                aria-label="Закрыть меню"
                                className={styles.closeButton}
                            >
                                <Cross2Icon />
                            </button>
                        </DialogClose>
                    </div>

                    <ScrollArea className={styles.scrollArea}>
                        <Sidebar onLinkClick={() => setSidebarOpen(false)} />
                    </ScrollArea>
                </DialogContent>
            </Dialog>

            <main className={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
};
