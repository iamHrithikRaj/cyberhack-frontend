import React from 'react';
import classes from './GameScreen.module.css';
import Questions from '../components/Questions';
import Header from '../components/Header';
import Timer from './../components/Timer';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GameScreen = () => {
  const startTime = 1647355320000;
  const questionTime = 2;

  let collapsibles = ['disabled', 'disabled', 'disabled'];
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getCount = () => {
    const start = new Date(startTime);
    const now = new Date();

    let minDiff = now.getMinutes() - start.getMinutes();

    return Math.floor(minDiff / questionTime) + 1;
  };

  const total = getCount();

  if (total >= 4) {
    navigate('/congratulations', { replace: true });
  }

  collapsibles[Math.min(total - 1, 2)] = 'enabled';

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

    let timeDiff = '';

    if (total === 3) {
      timeDiff = `Contest ends in ${min} : ${sec} mins`;
    } else {
      timeDiff = `Next question unlocks in ${min} : ${sec} mins`;
    }

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
          <Questions collapsibles={collapsibles} uncollapsed={total} />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
