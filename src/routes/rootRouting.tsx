import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../views/HomePage/HomePage';
import { AuthPage } from '../views/AuthPage/AuthPage';
import { Login } from '../components/Login';
import { SignUp } from '../components/SignUp';

export const rootRouting = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: 'auth',
    element: <AuthPage />,
    children: [
      {
        path: '',
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'sign-up',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
