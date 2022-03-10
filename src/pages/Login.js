import React, { useRef, useEffect } from 'react';
import classes from './Login.module.css';
import amitylogo from '../images/amitylogo.png';
import cyberlogo from '../images/cyberlogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const baseURL = 'https://pure-brook-94362.herokuapp.com/api/v1/team';
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      teamName: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(data);
    axios
      .post(`${baseURL}/login`, data)
      .then((response) => {
        localStorage.setItem('auth-token', response.data);
        navigate('/game');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/game', { replace: true });
      return;
    }

    const authtoken = localStorage.getItem('auth-token');
    if (authtoken != null) {
      dispatch(authActions.login(authtoken));
    }
  });

  return (
    <div className={classes.background}>
      <div className={classes.outer}>
        <div className={classes.container}>
          <div className={classes.logocontainer}>
            <img
              className={classes.amitylogo}
              src={amitylogo}
              alt='Amity Logo'
            />
            <img
              className={classes.cyberlogo}
              src={cyberlogo}
              alt='Cyberhack logo'
            />
          </div>
          <form className={classes.form} onSubmit={submitHandler}>
            <input
              ref={emailInputRef}
              className={classes.forminput}
              placeholder='{ Username }'
            />
            <input
              ref={passwordInputRef}
              className={classes.forminput}
              placeholder='{ Password }'
            />
            <button type='submit' className={classes.formbtn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
