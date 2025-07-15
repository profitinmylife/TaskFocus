import { I18nProvider } from '@app/providers/I18nProvider.tsx';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import '@shared/config/i18n.ts';
import { ResponsiveLayout } from '@widgets/layout/ResponsiveLayout/ResponsiveLayout.tsx';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const AppContent = () => {
  return (
    <I18nProvider>
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
