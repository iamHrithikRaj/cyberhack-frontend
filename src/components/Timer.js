import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import classes from './Timer.module.css';

const Timer = (props) => {
  return <div className={classes.container}>{props.timer}</div>;
};

export default Timer;
