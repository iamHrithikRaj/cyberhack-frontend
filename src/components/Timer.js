import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import classes from './Timer.module.css';

const Timer = (props) => {
  // const getTime = useCallback(() => {
  //   const start = new Date(props.start);
  //   const now = new Date();

  //   let minDiff = (now.getMinutes() - start.getMinutes()) % props.questionTime;
  //   let secDiff = now.getSeconds() - start.getSeconds();

  //   let sec = 0,
  //     min = props.questionTime - minDiff;

  //   if (secDiff > 0) {
  //     sec = 60 - secDiff;
  //     min -= 1;
  //   }

  //   if (min === props.questionTime && sec === 0) {
  //     props.collapsibleHanlder();
  //   }

  //   const timeDiff = `${min} : ${sec}`;

  //   return timeDiff;
  // }, [props]);

  // const [timer, setTimer] = useState(getTime());

  // useEffect(() => {
  //   console.log(Date.now());
  //   setInterval(() => {
  //     setTimer(getTime());
  //   }, 1000);
  // }, [getTime]);

  return (
    <div className={classes.container}>
      Next question unlocks in {props.timer} mins
    </div>
  );
};

export default Timer;
