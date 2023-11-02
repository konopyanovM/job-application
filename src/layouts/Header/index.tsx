import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">Vacancy Search</div>
        <div className="header__buttons">
          <button className="app-button app-button--sm app-button--outline">Logout</button>
        </div>
      </div>
    </header>
  );
};
