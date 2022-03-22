import ReactCardFlip from 'react-card-flip';

import React, { useState } from 'react';
import classes from './FlippingCard.module.css';

const FlippingCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const clickHandler = () => {
    setIsFlipped((prevState) => !prevState);
    props.changeHintTaken();
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection='vertical'
      className={classes.outercontainer}
    >
      <div onClick={clickHandler} className={classes.container}>
        <h1 className={classes.heading}>HINT</h1>
        <h2 className={classes.whitetext}>Click to flip the card</h2>
        <div className={classes.deduct}>
          Upon taking hint 50% of the score will be deducted for this question.
        </div>
      </div>

      <div onClick={clickHandler} className={classes.container}>
        {props.hint}
      </div>
    </ReactCardFlip>
  );
};

export default FlippingCard;
