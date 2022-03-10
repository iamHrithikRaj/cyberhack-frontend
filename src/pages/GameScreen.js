import React from 'react';
import classes from './GameScreen.module.css';
import Questions from '../components/Questions';
import Header from '../components/Header';
import Timer from './../components/Timer';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GameScreen = () => {
  const startTime = 1646920080000;
  const questionTime = 10;

  let collapsibles = ['disabled', 'disabled', 'disabled', 'disabled'];
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getCount = () => {
    const start = new Date(startTime);
    const now = new Date();

    let minDiff = now.getMinutes() - start.getMinutes();

    return Math.floor(minDiff / questionTime) + 1;
  };

  const total = getCount();

  if (total - 1 >= 4) {
    navigate('/congratulations', { replace: true });
  }

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
    if (!isAuthenticated) {
      navigate('/', { replace: true });
    }
    setInterval(() => {
      setTimer(getTime());
    });
  }, [isAuthenticated]);

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
