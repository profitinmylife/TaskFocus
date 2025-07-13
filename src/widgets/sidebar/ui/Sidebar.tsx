import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapsible.Root
            open={isOpen}
            onOpenChange={setIsOpen}
            className="bg-gray-900 text-white p-4 h-screen"
        >
            <Collapsible.Trigger className="mb-4 p-2 hover:bg-gray-700 rounded">
                {isOpen ? "Свернуть" : "Развернуть"}
            </Collapsible.Trigger>

            <Collapsible.Content>
                <nav>
                    <SidebarItem label="Задачи" to="/" icon="📝" />
                    <SidebarItem label="Календарь" to="/" icon="📅" />
                    <SidebarItem label="Настройки" to="/" icon="⚙️" />
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    );
};