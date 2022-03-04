import React from 'react';
import classes from './Congrats.module.css';
import cyberhacklogo from '../images/cyberlogo.png';
import ReactTypingEffect from 'react-typing-effect';
import congoImage from '../images/congo-img.png';

function Congrats() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.nav}>
          <img className={classes.cyberhacklogo} src={cyberhacklogo} alt='' />
        </div>
        <div className={classes.congocontainer}>
          <ReactTypingEffect
            text={['Congratulations!!!', 'You have made it!!!']}
            cursorRenderer={(cursor) => (
              <h1 className={classes.congotext}>{cursor}</h1>
            )}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} className={classes.congotext}>
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
          <img src={congoImage} alt='' className={classes.congoimg} />
        </div>
      </div>
    </>
  );
}

export default Congrats;
