import { RouterProvider } from 'react-router-dom';
import {
  AuthProvider,
  I18nProvider,
  Router,
  ThemeProvider,
} from './providers';

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={Router} />
        </AuthProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
