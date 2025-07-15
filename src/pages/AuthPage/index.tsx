import { useEffect } from 'react';
import { useAuthStore } from '@entities/user/model/useAuthStore';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const login = useAuthStore((s) => s.login);
  const isAuth = useAuthStore((s) => s.isAuth);
  const isLoading = useAuthStore((s) => s.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && !isLoading) {
      const redirectTo =
        localStorage.getItem('auth_redirect') || '/';
      localStorage.removeItem('auth_redirect');
      navigate(redirectTo, { replace: true });
    }
  }, [isAuth, isLoading, navigate]);

  if (isLoading) {
    return <div>Проверка сессии...</div>;
  }

  return (
    <div>
      Авторизация
      <button onClick={login}>Войти (заглушка)</button>
    </div>
  );
};

export default AuthPage;
