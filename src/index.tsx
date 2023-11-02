import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { rootRouting } from './routes';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={rootRouting}></RouterProvider>
    <Toaster position="top-right"></Toaster>
  </React.StrictMode>
);
