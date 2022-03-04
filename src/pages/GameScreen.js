import React from 'react';
import classes from './GameScreen.module.css';
import Questions from '../components/Questions';
import Header from '../components/Header';

const GameScreen = () => {
  return (
    <>
      <Header />
      <div className={classes.body}>
        <div className={classes.level}>
          <h1 className={classes.leveltext}>Level 1!</h1>
        </div>
        <div className={classes.questioncontainer}>
          <Questions />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
