import { BrowserRouter, Outlet } from "react-router-dom";
import './App.css';
import { I18nProvider } from "@app/providers/I18nProvider.tsx";
import '@shared/config/i18n.ts';
import { SidebarProvider } from "@widgets/sidebar/lib/useSidebar";
import { Sidebar } from "@widgets/sidebar/ui/Sidebar";
import { ThemeProvider, useTheme } from "@app/providers/ThemeProvider";

const AppContent = () => {
    const { toggleTheme } = useTheme();

    return (
        <I18nProvider>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <SidebarProvider>
                <div className="flex h-screen">
                    <Sidebar />
                    <main className="flex-1 p-8 overflow-auto">
                        <Outlet />
                    </main>
                </div>
            </SidebarProvider>
        </I18nProvider>
    );
};

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AppContent />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
