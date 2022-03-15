import React from 'react';
import classes from './QuestionHeader.module.css';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const QuestionHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <div>{props.sno}</div>
        <div>{props.title}</div>
        <div className={classes.pointscontainer}>
          <DiamondOutlinedIcon />
          {props.points}
        </div>
      </div>
    </div>
  );
};

export default QuestionHeader;
