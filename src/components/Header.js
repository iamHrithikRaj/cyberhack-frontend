import React from 'react';
import classes from './Header.module.css';
import cyberhacklogo from '../images/cyberlogo.png';

const Header = () => {
  return (
    <div className={classes.nav}>
      <img className={classes.cyberhacklogo} src={cyberhacklogo} alt='' />
    </div>
  );
};

export default Header;