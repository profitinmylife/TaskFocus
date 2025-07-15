export interface Auth {
  isAuth: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
  refresh: () => void;
}
