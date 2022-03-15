import React, { useRef, useState } from 'react';
import classes from './FlagForm.module.css';
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';
import data from '../../data';
import axios from 'axios';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

const FlagForm = (props) => {
  const flagInputRef = useRef();
  const url = 'https://pure-brook-94362.herokuapp.com/api/v1/team/submit';
  const [submitting, setSubmitting] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const flag = flagInputRef.current.value;
    const authtoken = localStorage.getItem('auth-token');
    console.log(authtoken);

    axios
      .post(
        url,
        {
          id: '623090a2e8e04a0cf99e7abd',
          answer: flag,
          hintTaken: props.isHintTaken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authtoken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setSubmitting(false);
        flagInputRef.current.value = '';
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };

  return (
    <>
      {submitting ? (
        <Box className={classes.spinner} sx={{ display: 'flex' }}>
          <CircularProgress color='secondary' />
        </Box>
      ) : (
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.flagcontainer}>
            <AssistantPhotoRoundedIcon fontSize='inherit' />
          </div>
          <input
            className={classes.forminput}
            ref={flagInputRef}
            placeholder='{ Your Flag Goes Here }'
          />
          <button type='submit' className={classes.formbtn}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default FlagForm;
