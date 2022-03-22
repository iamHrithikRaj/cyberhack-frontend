import React, { useRef, useState } from 'react';
import classes from './FlagForm.module.css';
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';
import data from '../../data';
import axios from 'axios';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

const FlagForm = (props) => {
  const flagInputRef = useRef();
  const url = 'https://pure-brook-94362.herokuapp.com/api/v1/team/submit';
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('');

  const copyPasteHandler = (e) => {
    e.preventDefault();
    return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const flag = flagInputRef.current.value;

    if (flag === '') {
      return;
    }

    setSubmitting(true);
    setOpen(false);

    const authtoken = localStorage.getItem('auth-token');

    axios
      .post(
        url,
        {
          id: data[props.id].id,
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
        if (response.data.error !== undefined) {
          setOpen(true);
          setSeverity('info');
          setError(response.data.error);
        }

        if (response.data.score !== undefined) {
          setOpen(true);
          setSeverity('success');
          setError('Successful Submission!!!');
        }
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
          <Collapse in={open} className={classes.alert}>
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
              severity={severity}
            >
              {error}
            </Alert>
          </Collapse>
          <input
            className={classes.forminput}
            ref={flagInputRef}
            onPaste={copyPasteHandler}
            onCopy={copyPasteHandler}
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
