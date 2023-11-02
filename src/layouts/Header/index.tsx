import './Header.css';
import { authService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from 'react';

export const Header = (): ReactElement => {
  const navigate = useNavigate();
  const logout = () => {
    authService.logout(navigate);
  };
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">Vacancy Search</div>
        <div className="header__buttons">
          <button className="app-button app-button--sm app-button--outline" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
