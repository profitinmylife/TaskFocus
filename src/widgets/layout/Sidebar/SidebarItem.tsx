import { NavLink } from 'react-router-dom';

type SidebarItemProps = {
    to: string;
    icon: React.ReactNode;
    label: string;
    collapsed?: boolean;
    onClick?: () => void;  // добавляем onClick
};

export const SidebarItem = ({ to, icon, label, collapsed = false, onClick }: SidebarItemProps) => {
    return (
        <NavLink
            to={to}
            onClick={onClick} // прокидываем сюда
            className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${
                    isActive ? 'bg-gray-800' : ''
                }`
            }
            title={label}
        >
            <span className="text-lg">{icon}</span>
            {!collapsed && <span>{label}</span>}
        </NavLink>
    );
};
