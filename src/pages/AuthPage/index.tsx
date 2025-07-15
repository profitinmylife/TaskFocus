import { useEffect } from 'react';
import { useAuthStore } from '@entities/user/model/useAuthStore';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  from?: { pathname: string };
}

const AuthPage = () => {
  const login = useAuthStore((s) => s.login);
  const isAuth = useAuthStore((s) => s.isAuth);
  const isLoading = useAuthStore((s) => s.isLoading);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from?.pathname || '/';

  useEffect(() => {
    if (isAuth && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [isAuth, isLoading, from, navigate]);

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
