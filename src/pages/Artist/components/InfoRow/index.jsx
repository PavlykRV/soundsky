import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './InfoRow.module.scss';

const InfoRow = ({ label, value }) => {
  return (
    <div className={styles.root}>
      <Typography className={styles.label} component='span'>
        {label}:
      </Typography>
      <Typography className={styles.value} component='span'>
        {value}
      </Typography>
    </div>
  );
};

export default InfoRow;
