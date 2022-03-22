import React, { useState } from 'react';
import classes from './QuestionBody.module.css';
import DownloadingIcon from '@mui/icons-material/Downloading';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Text from './QuestionBody/Text.js';
import FlagForm from './QuestionBody/FlagForm';
import FlippingCard from './FlippingCard';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const QuestionBody = (props) => {
  const [body, setBody] = useState(<Text text={props.title} />);
  const [isHintTaken, setIsHintTaken] = useState(false);

  const changeHintTaken = () => {
    setIsHintTaken(true);
  };

  const copyHandler = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <div
          className={classes.buttonscontainer}
          onClick={() => {
            setBody(<Text text={props.title} />);
          }}
        >
          <div className={classes.icon}>
            <RemoveRedEyeOutlinedIcon />
          </div>
          <div className={classes.titlecontainer}>
            <div className={classes.title}>View Description</div>
            <div className={classes.subtitle}>
              Brief about the problem statement.
            </div>
          </div>
        </div>
        <a href={props.zip}>
          <div className={classes.buttonscontainer}>
            <div className={classes.icon}>
              <DownloadingIcon />
            </div>
            <div className={classes.titlecontainer}>
              <div className={classes.title}>Download Files</div>
              <div className={classes.subtitle}>
                Necessary files to play the challenge.
              </div>
            </div>
          </div>
        </a>
        <div
          className={classes.buttonscontainer}
          onClick={() => {
            setBody(<FlagForm id={props.id} isHintTaken={isHintTaken} />);
          }}
        >
          <div className={classes.icon}>
            <EmojiFlagsIcon />
          </div>
          <div className={classes.titlecontainer}>
            <div className={classes.title}>Submit Flag</div>
            <div className={classes.subtitle}>
              Submit a flag to this challenge.
            </div>
          </div>
        </div>
        <div
          className={classes.buttonscontainer}
          onClick={() => {
            setBody(
              <FlippingCard
                hint={props.hint}
                changeHintTaken={changeHintTaken}
              />
            );
          }}
        >
          <div className={classes.icon}>
            <HelpOutlineOutlinedIcon />
          </div>
          <div className={classes.titlecontainer}>
            <div className={classes.title}>Hint</div>
            <div className={classes.subtitle}>
              It will reduce your points by 50%.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.question} onCopy={copyHandler}>
        {body}
      </div>
    </div>
  );
};

export default QuestionBody;
