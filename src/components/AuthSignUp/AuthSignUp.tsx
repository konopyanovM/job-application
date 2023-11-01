import { Link } from 'react-router-dom';

export const AuthSignUp = () => {
  return (
    <>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Войти</button>
      </form>
      <span>
        У вас нет аккаунта? <Link to="/auth/sign-up">Зарегистрировать</Link>
      </span>
    </>
  );
};
