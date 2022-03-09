import React, { useRef } from 'react';
import classes from './Login.module.css';
import amitylogo from '../images/amitylogo.png';
import cyberlogo from '../images/cyberlogo.png';
import axios from 'axios';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const baseURL = 'https://pure-brook-94362.herokuapp.com/api/v1/team';

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);
    const data = {
      teamName: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(data);
    axios
      .post(`${baseURL}/login`, data)
      .then(function (response) {
        console.log(response);
        window.location.href = '/game';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
