import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@widgets/layout/Sidebar/Sidebar.tsx';
import { useTheme } from '@shared/hooks/useTheme';

export const ResponsiveLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <div className="bg-white text-black min-h-screen">
            <nav>
                <Sidebar />
            </nav>

            <Dialog open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <DialogTrigger asChild>
                    <button
                        aria-label="Открыть меню"
                        className="bg-black text-white px-2 py-1 rounded"
                    >
                        <HamburgerMenuIcon />
                    </button>
                </DialogTrigger>

                <DialogContent
                    onInteractOutside={() => setSidebarOpen(false)}
                    className="bg-gray-100 text-black"
                >
                    <div>
                        <h2>Меню</h2>
                        <DialogClose asChild>
                            <button
                                aria-label="Закрыть меню"
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                <Cross2Icon />
                            </button>
                        </DialogClose>
                    </div>

                    <ScrollArea>
                        <Sidebar onLinkClick={() => setSidebarOpen(false)} />
                    </ScrollArea>
                </DialogContent>
            </Dialog>

            <div className="flex gap-2 flex-wrap my-4">
                <span className="bg-black text-white px-2 py-1 rounded">primary</span>
                <span className="bg-gray-100 text-black px-2 py-1 rounded">secondary</span>
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">accent</span>
                <span className="bg-gray-200 text-black px-2 py-1 rounded">muted</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">error</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded">success</span>
                <span className="bg-yellow-300 text-black px-2 py-1 rounded">warning</span>
                <span className="border text-black px-2 py-1 rounded">border</span>
            </div>

            <div className="bg-gray-100 text-black p-2 text-sm">
                Текущая тема: <span className="font-bold">{theme}</span>
            </div>

            <main className="bg-white text-black min-h-[200px] p-4">
                <Outlet />
            </main>
        </div>
    );
};
