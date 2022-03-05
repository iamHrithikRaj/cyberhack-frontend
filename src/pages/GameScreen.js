import React from 'react';
import classes from './GameScreen.module.css';
import Questions from '../components/Questions';
import Header from '../components/Header';
import Timer from './../components/Timer';
import { useState, useCallback, useMemo, useEffect } from 'react';

const GameScreen = () => {
  // const startTime = 1646502000000;
  // const questionTime = 1;

  // const c = useMemo(() => ['disabled', 'disabled', 'disabled', 'disabled'], []);
  // const [collapsibles, setCollabsibles] = useState(c);

  // const getCount = () => {
  //   const start = new Date(startTime);
  //   const now = new Date();

  //   let minDiff = now.getMinutes() - start.getMinutes();

  //   return Math.floor(minDiff / questionTime) + 1;
  // };

  // const collapsibleChangeHandler = () => {
  //   const total = getCount();
  //   let copy = ['enabled', 'disabled', 'disabled', 'disabled'];
  //   for (let i = 0; i < total; i++) {
  //     copy[i] = 'enabled';
  //   }
  //   setCollabsibles(copy);
  // };

  return (
    <>
      <Header />
      <div className={classes.body}>
        <div className={classes.level}>
          <Timer
          // start={startTime}
          // questionTime={questionTime}
          // collapsibleHanlder={collapsibleChangeHandler}
          />
          <h1 className={classes.leveltext}>Level 1!</h1>
        </div>
        <div className={classes.questioncontainer}>
          <Questions
          // collapsibles={collapsibles}
          />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
