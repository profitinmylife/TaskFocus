import { useAuthStore } from '@entities/user/model/useAuthStore';
import { redirect } from 'react-router-dom';
import type { MatchWithMeta } from '@shared/types/router-meta';

export const privateLoader = async ({
  meta,
}: MatchWithMeta['data'] = {}) => {
  const { isAuth, isLoading } = useAuthStore.getState();

  if (isLoading) {
    return { meta };
  }

  if (!isAuth) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'auth_redirect',
        window.location.pathname,
      );
    }
    throw redirect('/auth');
  }

  return { meta };
};
