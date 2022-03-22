import React, { useEffect, useState } from 'react';
import { startTime, questionTime, numberOfQuestions } from '../data';
import classes from './Countdown.module.css';

const Countdown = () => {
  const getCounter = () => {
    const now = new Date().getTime();

    const distance = startTime - now;
    const ended = distance + questionTime * numberOfQuestions * 60 * 1000;

    console.log(ended);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let timer;

    if (distance < 0) {
      if (ended < 0) {
        timer = 'Contest has ended';
      } else {
        timer = 'Contest has begun';
      }
    } else {
      timer =
        'Contest starts in ' +
        days +
        'd ' +
        hours +
        'h ' +
        minutes +
        'm ' +
        seconds +
        's';
    }

    return timer;
  };

  const [timer, setTimer] = useState(getCounter());

  useEffect(() => {
    setInterval(() => {
      setTimer(getCounter());
    }, 1000);
  }, []);
  return <div className={classes.container}>{timer}</div>;
};

export default Countdown;
