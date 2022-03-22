import React from 'react';
import classes from './GameScreen.module.css';
import Questions from '../components/Questions';
import Header from '../components/Header';
import Timer from './../components/Timer';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rank from './../components/Rank';
import { startTime } from '../data';

const GameScreen = () => {
  const questionTime = 2;
  const numberOfQuestions = 3;

  let collapsibles = ['disabled', 'disabled', 'disabled'];
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getDifferenceInMinutes = (date1, date2) => {
    const diffInMs = date2 - date1;
    return Math.floor(diffInMs / (1000 * 60));
  };

  const getDifferenceInSeconds = (date1, date2) => {
    const diffInMs = date2 - date1;
    return Math.floor(diffInMs / 1000);
  };

  const getCount = () => {
    const start = new Date(startTime);
    const now = new Date();

    let minDiff = getDifferenceInMinutes(start, now);

    return Math.floor(minDiff / questionTime) + 1;
  };

  const total = getCount();

  if (total >= numberOfQuestions + 1) {
    navigate('/congratulations', { replace: true });
  }

  collapsibles[Math.min(total - 1, numberOfQuestions - 1)] = 'enabled';

  const getTime = useCallback(() => {
    const start = new Date(startTime);
    const now = new Date();

    let minDiff = getDifferenceInMinutes(start, now) % questionTime;

    let sec = 59 - (getDifferenceInSeconds(start, now) % 60),
      min = questionTime - minDiff - 1;

    let timeDiff = '';

    if (getCount() === numberOfQuestions) {
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
    }, 1000);
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <div className={classes.body}>
        <div className={classes.level}>
          <Rank />
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
