import { Link } from 'react-router-dom';

export const AuthLogin = () => {
  return (
    <>
      <h2>Вход в аккаунт</h2>
      <form>
        <label htmlFor="login">
          <input id="login" type="text" />
        </label>
        <label htmlFor="password">
          <input id="password" type="text" />
        </label>
        <button>Войти</button>
      </form>
      <span>
        У вас нет аккаунта? <Link to="/auth/sign-up">Зарегистрировать</Link>
      </span>
    </>
  );
};
