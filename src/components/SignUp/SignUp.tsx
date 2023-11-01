import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
      <h2>Регистрация</h2>
      <form className="form">
        <label htmlFor="login">
          <input id="login" type="text" placeholder="Логин" />
        </label>
        <label htmlFor="password">
          <input id="password" type="text" placeholder="Введите пароль" />
        </label>
        <label htmlFor="password">
          <input id="password" type="text" placeholder="Подтвердите пароль" />
        </label>
        <button>Зарегистрироваться</button>
      </form>
      <small className="caption">
        У вас уже есть аккаунт? <Link to="/auth/login">Войти</Link>
      </small>
    </>
  );
};
