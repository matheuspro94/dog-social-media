import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm'
import styles from './Login.module.css'
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginCreate from './LoginCreate';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/criar" element={<LoginCreate />}/>
        <Route path="/perdeu" element={<LoginPasswordLost />}/>
        <Route path="/resetar" element={<LoginPasswordReset />}/>
      </Routes>
    </div>
  )
}

export default Login;
