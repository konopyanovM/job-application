import './AuthPage.css';
import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

export const AuthPage = (): ReactElement => {
  return (
    <div className="auth">
      <div className="auth__content">
        <Outlet />
      </div>
    </div>
  );
};
