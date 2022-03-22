import React, { useRef, useEffect, useState } from 'react';
import classes from './Login.module.css';
import amitylogo from '../images/amitylogo.png';
import cyberlogo from '../images/cyberlogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import { startTime, questionTime, numberOfQuestions } from '../data';
import Countdown from './../components/Countdown';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

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

    if (data.teamName === '' || data.password === '') {
      return;
    }

    setIsAuthenticating(true);

    console.log(data);
    axios
      .post(`${baseURL}/login`, data)
      .then((response) => {
        localStorage.setItem('auth-token', response.data);
        navigate('/game');
        setIsAuthenticating(false);
      })
      .catch(function (error) {
        setIsAuthenticating(false);
        setOpen(true);
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

    setInterval(() => {
      const ended =
        startTime +
        questionTime * numberOfQuestions * 60 * 1000 -
        new Date().getTime();
      if (new Date() >= new Date(startTime)) {
        setIsEnabled(true);
      }
      if (ended < 0) {
        setIsEnabled(false);
      }
    }, 1000);
  });

  return (
    <div className={classes.background}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          severity='error'
        >
          Authentication Falied
        </Alert>
      </Collapse>
      <div className={classes.outer}>
        <div className={classes.container}>
          <Countdown />
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
          {isAuthenticating ? (
            <Box className={classes.spinner} sx={{ display: 'flex' }}>
              <CircularProgress color='secondary' />
            </Box>
          ) : (
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
              <button
                type='submit'
                className={isEnabled ? classes.formbtn : classes.formdisablebtn}
                disabled={!isEnabled}
                style={{ marginBottom: '20px' }}
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
