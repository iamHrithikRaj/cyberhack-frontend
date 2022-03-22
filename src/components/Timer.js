import React from 'react';
import classes from './Timer.module.css';

const Timer = (props) => {
  return <span className={classes.container}>{props.timer}</span>;
};

export default Timer;
