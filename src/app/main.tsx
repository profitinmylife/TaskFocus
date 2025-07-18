import { StrictMode } from 'react';
import App from '@app/App.tsx';
import { createRoot } from 'react-dom/client';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
