import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Rank.module.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Rank = () => {
  const url = 'https://pure-brook-94362.herokuapp.com/api/v1/team/rank';
  const [rank, setRank] = useState('_');

  useEffect(() => {
    setInterval(() => {
      const authtoken = localStorage.getItem('auth-token');
      axios
        .get(url, { headers: { 'auth-token': authtoken } })
        .then((response) => {
          setRank(`${response.data.rank}`);
        });
    }, 60000);
  }, []);
  return (
    <div className={classes.rank}>
      <div className={classes.mbs}>
        Your rank is &nbsp;{' '}
        <LocalFireDepartmentIcon style={{ color: '#ff3333' }} /> {rank}
      </div>
      <div className={classes.info}>*rank is updated every 1 min</div>
    </div>
  );
};

export default Rank;
