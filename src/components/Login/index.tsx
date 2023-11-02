import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { authService } from '../../services/authService';
import { User } from '../../types';
import { getValidationMessage } from '../../utils/getValidationMessage';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<User> = data => {
    authService.login(data, navigate);
  };

  return (
    <>
      <h2>Log in</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <ul className="form__errors-list">
          {getValidationMessage(errors).map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
        <label htmlFor="username">
          <input id="username" type="text" placeholder="Username" {...register('username')} />
        </label>
        <label htmlFor="password">
          <input id="password" type="password" placeholder="Password" {...register('password')} />
        </label>
        <button type="submit">Log in</button>
      </form>
      <small className="caption">
        Does not have an account? <Link to="/auth/sign-up">Sign Up</Link>
      </small>
    </>
  );
};
