import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../views/HomePage/HomePage';
import { AuthPage } from '../views/AuthPage/AuthPage';
import { Login } from '../components/Login/Login';
import { SignUp } from '../components/SignUp/SignUp';

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
