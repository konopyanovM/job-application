import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpData } from '../../types';
import { authService } from '../../services/authService';
import { getValidationMessage } from '../../utils/getValidationMessage';
import { useState } from 'react';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpData>();
  const navigate = useNavigate();
  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);
  const [rePasswordHidden, setRePasswordHidden] = useState<boolean>(true);

  const onSubmit: SubmitHandler<SignUpData> = data => {
    const signUpData = {
      username: data.username,
      password: data.password,
    };
    authService.register(signUpData, navigate);
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <ul className="form__errors-list">
          {getValidationMessage(errors).map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            placeholder="Username"
            {...register('username', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
          />
        </label>
        <label htmlFor="password" className="input-group">
          <input
            id="password"
            type={passwordHidden ? 'password' : 'text'}
            placeholder="Enter your password"
            {...register('password', { required: true, minLength: 8 })}
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
        <label htmlFor="rePassword" className="input-group">
          <input
            id="rePassword"
            type={rePasswordHidden ? 'password' : 'text'}
            placeholder="Repeat your password"
            {...register('rePassword', {
              required: true,
              minLength: 8,
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return 'Your passwords do no match';
                }
              },
            })}
          />
          <button
            type="button"
            className="input-group__suffix"
            onClick={() => {
              setRePasswordHidden(prevState => !prevState);
            }}
          >
            <img
              src="/assets/images/icons/tuiIconShowLarge.svg"
              alt="eye open"
              className={rePasswordHidden ? '--password-hidden' : ''}
            />
          </button>
        </label>
        <button className="app-button">Sign Up</button>
      </form>
      <small className="caption">
        Already have an account? <Link to="/auth/login">Log in</Link>
      </small>
    </>
  );
};
