import React from 'react';
import classes from './Text.module.css';

const Text = (props) => {
  return <div className={classes.container}>{props.text}</div>;
};

export default Text;
