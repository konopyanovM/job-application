import './AuthPage.css';
import { Outlet } from 'react-router-dom';

export const AuthPage = () => {
  return (
    <div className="auth">
      <div className="auth__content">
        <Outlet />
      </div>
    </div>
  );
};
