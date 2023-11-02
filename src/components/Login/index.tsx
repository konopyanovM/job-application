import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { authService } from '../../services/authService';
import { User } from '../../types';
import { getValidationMessage } from '../../utils/getValidationMessage';
import { useState } from 'react';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const navigate = useNavigate();
  const [passwordHidden, setPasswordHidden] = useState(true);
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
        <label htmlFor="password" className="input-group">
          <input
            id="password"
            type={passwordHidden ? 'password' : 'text'}
            placeholder="Password"
            {...register('password')}
          />
          <button
            type="button"
            className="input-group__suffix"
            onClick={() => {
              setPasswordHidden(prevState => !prevState);
            }}
          >
            <img
              src="/assets/images/icons/tuiIconShowLarge.svg"
              alt="eye open"
              className={passwordHidden ? '--password-hidden' : ''}
            />
          </button>
        </label>
        <button type="submit" className="app-button">
          Log in
        </button>
      </form>
      <small className="caption">
        Does not have an account? <Link to="/auth/sign-up">Sign Up</Link>
      </small>
    </>
  );
};
