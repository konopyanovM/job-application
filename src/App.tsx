import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage';
import { AuthPage } from './views/AuthPage/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="auth" element={<AuthPage />}>
          <Route path=""></Route>
          <Route path="login"></Route>
          <Route path="sign-up"></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
