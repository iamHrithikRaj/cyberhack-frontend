import React from 'react';
import classes from './GameScreen.module.css';
import Questions from '../components/Questions';
import Header from '../components/Header';
import Timer from './../components/Timer';
import { useState, useCallback, useMemo, useEffect } from 'react';

const GameScreen = () => {
  const startTime = 1646545080000;
  const questionTime = 1;

  const collapsibles = ['disabled', 'disabled', 'disabled', 'disabled'];

  const getCount = () => {
    const start = new Date(startTime);
    const now = new Date();

    let minDiff = now.getMinutes() - start.getMinutes();

    return Math.floor(minDiff / questionTime) + 1;
  };

  const total = getCount();
  for (let i = 0; i < Math.min(total, 4); i++) {
    collapsibles[i] = 'enabled';
  }

  const getTime = useCallback(() => {
    const start = new Date(startTime);
    const now = new Date();

    let minDiff = (now.getMinutes() - start.getMinutes()) % questionTime;
    let secDiff = now.getSeconds() - start.getSeconds();

    let sec = 0,
      min = questionTime - minDiff;

    if (secDiff > 0) {
      sec = 60 - secDiff;
      min -= 1;
    }

    const timeDiff = `${min} : ${sec}`;

    return timeDiff;
  }, []);

  const [timer, setTimer] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTimer(getTime());
    });
  }, []);

  return (
    <>
      <Header />
      <div className={classes.body}>
        <div className={classes.level}>
          <Timer timer={timer} />
          <h1 className={classes.leveltext}>Level 1!</h1>
        </div>
        <div className={classes.questioncontainer}>
          <Questions collapsibles={collapsibles} />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
