import { Button } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, [i18n]);

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <Button
      size="2"
      variant="outline"
      onClick={toggleLang}
      aria-label={t('common.button.language') || 'Switch language'}
      className="ml-2"
    >
      {i18n.language === lang ? 'EN' : 'RU'}
    </Button>
  );
};
