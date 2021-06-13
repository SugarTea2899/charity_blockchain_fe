import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const DisbursedItem = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container item xs={4}>
          <Grid container item xs={3}>
            <div className={classes.donation}>
              <Typography className={classes.bk}>Db</Typography>
            </div>
          </Grid>
          <Grid container item xs={9} direction="column" justify="center">
            <Link style={{ textDecoration: 'none' }} to={`/donations/1`}>
              <Typography className={classes.blueText}>1712785</Typography>
            </Link>
            <Typography className={classes.grayText}>
              15:00, 1/1/2021
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} alignItems="center">
          <Typography
            style={{ color: '#66bb6a', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '15%' }}
          >
            Accepted
          </Typography>
        </Grid>
        <Grid container item xs={4} direction="column" justify="center">
          <Typography className={classes.blueText}>
            <span style={{ color: 'black' }}>Amount: </span> 12.000
          </Typography>
          <Typography className={classes.blueText}>
            <span style={{ color: 'black' }}>Reason: </span> Mua mì ăn liền
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    marginBottom: '2%',
    paddingBottom: '2%',
    paddingRight: '2.5%',
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
    fontSize: '0.9rem',
  },
  grayText: {
    color: '#bdbdbd',
    fontSize: '0.7rem',
  },
});

export default DisbursedItem;
