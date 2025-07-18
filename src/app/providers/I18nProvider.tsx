import type { ReactNode } from 'react';
import i18n from '@shared/config/i18n';
import { I18nextProvider } from 'react-i18next';

export const I18nProvider = ({ children }: { children: ReactNode }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);
