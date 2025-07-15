import { RouterProvider } from 'react-router-dom';
import { AuthProvider, I18nProvider, RouterConfig, ThemeProvider } from './providers';

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={RouterConfig} />
        </AuthProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
