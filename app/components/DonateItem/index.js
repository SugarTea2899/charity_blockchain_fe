import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { formatDateTime, hideCharacter } from '../../utils/helpers';

export const DonateItem = ({ id, timestamp, nameEvent, isSent, amount }) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container item xs={5}>
          <Grid container item xs={4}>
            <div className={classes.donation}>
              <Typography className={classes.bk}>Dn</Typography>
            </div>
          </Grid>
          <Grid container item xs={8} direction="column" justify="center">
            <Link style={{ textDecoration: 'none' }} to={`/donations/1`}>
              <Typography className={classes.blueText}>
                {hideCharacter(id, 10)}
              </Typography>
            </Link>
            <Typography className={classes.grayText}>
              {formatDateTime(new Date(timestamp))}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} justify="center" direction="column">
          <Typography className={classes.blueText}>
            <span style={{ color: 'black' }}>To </span> {nameEvent}
          </Typography>
          <Typography className={classes.blueText}>
            <span
              style={{ color: isSent ? '#00e676' : 'red', fontWeight: 'bold' }}
            >
              {isSent ? 'Success' : 'Waiting'}
            </span>
          </Typography>
        </Grid>
        <Grid container item xs={3} justify="flex-end" alignItems="center">
          <Typography className={classes.blueText}>
            <span style={{ color: 'black' }}>Amount: </span> {amount}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    marginBottom: '2%',
    paddingBottom: '2.5%',
    paddingRight: '1.5%',
    borderBottom: '1px solid #e0e0e0',
  },
  donation: {
    width: '40px',
    height: '40px',
    background: '#bdbdbd',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bk: {
    color: 'white',
    fontSize: '0.9rem',
  },
  blueText: {
    color: '#2196f3',
    fontSize: '0.8rem',
  },
  grayText: {
    color: '#bdbdbd',
    fontSize: '0.6rem',
  },
});

export default DonateItem;
