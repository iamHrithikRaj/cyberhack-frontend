import React, { useEffect } from 'react';
import classes from './Congrats.module.css';
import cyberhacklogo from '../images/cyberlogo.png';
import ReactTypingEffect from 'react-typing-effect';
import congoImage from '../images/congo-img.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Congrats() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/', { replace: true });
    }
  });
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
          <div className={classes.bottom}>
            <div>We Received Your Responses.</div>
            <div style={{ marginBottom: '2vh' }}>
              Please check your mail for further instructions.
            </div>
            <hr className={classes.line} />
            <div className={classes.trouble}>
              Having Trouble?{' '}
              <span className={classes.underline}>Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Congrats;
