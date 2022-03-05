import React from 'react';
import classes from './FlagForm.module.css';
import AssistantPhotoRoundedIcon from '@mui/icons-material/AssistantPhotoRounded';

const FlagForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.flagcontainer}>
        <AssistantPhotoRoundedIcon fontSize='inherit' />
      </div>
      <input
        className={classes.forminput}
        placeholder='{ Your Flag Goes Here }'
      />
      <button type='submit' className={classes.formbtn}>
        Submit
      </button>
    </form>
  );
};

export default FlagForm;
