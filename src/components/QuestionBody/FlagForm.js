import React, { useRef } from 'react';
import classes from './FlagForm.module.css';
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';
import data from '../../data';
import axios from 'axios';

const FlagForm = (props) => {
  const flagInputRef = useRef();
  const url = 'https://pure-brook-94362.herokuapp.com/api/v1/team/submit';
  let points = data[props.id].points;

  const submitHandler = (e) => {
    e.preventDefault();

    const flag = flagInputRef.current.value;

    if (flag.trim() === data[props.id]) {
      axios.post(url, { points }, { headers: 'abc' });
    }
  };

  return (
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
  );
};

export default FlagForm;
