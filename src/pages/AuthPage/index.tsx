import { useEffect } from 'react';
import { useAuthStore } from '@entities/user/model/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AuthPage = () => {
  const login = useAuthStore((s) => s.login);
  const isAuth = useAuthStore((s) => s.isAuth);
  const isLoading = useAuthStore((s) => s.isLoading);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuth && !isLoading) {
      const redirectTo = localStorage.getItem('auth_redirect') || '/';
      localStorage.removeItem('auth_redirect');
      navigate(redirectTo, { replace: true });
    }
  }, [isAuth, isLoading, navigate]);

  if (isLoading) {
    return <div>{t('auth.checkingSession')}</div>;
  }

  return (
    <div>
      {t('auth.login')}
      <button onClick={login}>{t('auth.login')}</button>
    </div>
  );
};

export default AuthPage;
