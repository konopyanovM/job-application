import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpData, User } from '../../types';
import { authService } from '../../services/authService';
import { getValidationMessage } from '../../utils/getValidationMessage';
import { useEffect } from 'react';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpData>();
  const navigate = useNavigate();

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
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true, minLength: 8 })}
          />
        </label>
        <label htmlFor="rePassword">
          <input
            id="rePassword"
            type="password"
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
        </label>
        <button>Sign Up</button>
      </form>
      <small className="caption">
        Already have an account? <Link to="/auth/login">Log in</Link>
      </small>
    </>
  );
};
