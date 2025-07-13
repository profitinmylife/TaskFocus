import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';

import { SidebarItem } from './SidebarItem.tsx';

type SidebarProps = {
    onLinkClick?: () => void; // <-- добавляем проп
};

export const Sidebar = ({ onLinkClick }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapsible.Root
            open={isOpen}
            onOpenChange={setIsOpen}
            className={`bg-gray-900 text-white p-4 h-screen ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}
        >
            <Collapsible.Trigger
                className="mb-4 p-2 hover:bg-gray-700 rounded self-end"
                aria-label={isOpen ? 'Свернуть меню' : 'Развернуть меню'}
            >
                {isOpen ? '⬅' : '➡'}
            </Collapsible.Trigger>

            <nav className="flex flex-col gap-2 flex-1 overflow-auto">
                <SidebarItem label="Задачи" to="/" icon="📝" onClick={onLinkClick} />
                <SidebarItem label="Календарь" to="/calendar" icon="📅" onClick={onLinkClick} />
                <SidebarItem label="Настройки" to="/settings" icon="⚙️" onClick={onLinkClick} />
            </nav>
        </Collapsible.Root>
    );
};
