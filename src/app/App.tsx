import { BrowserRouter } from "react-router-dom";

import './App.css';
import { I18nProvider } from "@app/providers/I18nProvider.tsx";
import { ThemeProvider } from "@app/providers/ThemeProvider";
import { useTheme } from "@app/providers/useTheme";
import '@shared/config/i18n.ts';
import { ResponsiveLayout } from "@widgets/layout/ResponsiveLayout/ResponsiveLayout.tsx";

const AppContent = () => {
    const { toggleTheme } = useTheme();

    return (
        <I18nProvider>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ResponsiveLayout />
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
