import { NavLink } from "react-router-dom";

type SidebarItemProps = {
    to: string;
    icon: string;
    label: string;
};

export const SidebarItem = ({ to, icon, label }: SidebarItemProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${
                    isActive ? "bg-gray-800" : ""
                }`
            }
        >
            <span>{icon}</span>
            <span>{label}</span>
        </NavLink>
    );
};