import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <h2>Вход в аккаунт</h2>
      <form className="form">
        <label htmlFor="login">
          <input id="login" type="text" placeholder="Логин" />
        </label>
        <label htmlFor="password">
          <input id="password" type="text" placeholder="Пароль" />
        </label>
        <button>Войти</button>
      </form>
      <small className="caption">
        У вас нет аккаунта? <Link to="/auth/sign-up">Зарегистрироваться</Link>
      </small>
    </>
  );
};
