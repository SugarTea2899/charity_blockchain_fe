import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { formatDateTime, getColorFromStatusCode, getStatusFromStatusCode } from '../../utils/helpers';

export const ProjectItemExpand = ({name, address, timestamp, status, amountDonated, percentAccepted}) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container item xs={4}>
          <Grid container item xs={3}>
            <div className={classes.donation}>
              <Typography className={classes.bk}>P</Typography>
            </div>
          </Grid>
          <Grid container item xs={9} direction="column" justify="center">
            <Link style={{ textDecoration: 'none' }} to={`/projects/${address}`}>
              <Typography className={classes.blueText}>{name} </Typography>
            </Link>
            <Typography className={classes.grayText}>
              {formatDateTime(new Date(timestamp))}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} justify="center" direction="column">
          <Typography
            className={classes.blueText}
            style={{ color: 'red', fontWeight: 'bold' }}
          >
            <span style={{ color: 'black', fontWeight: 'normal' }}>
              Approval Rate:{' '}
            </span>{' '}
            {`${percentAccepted}%`}
          </Typography>
          <Typography
            className={classes.blueText}
            style={{ color: getColorFromStatusCode(status), fontWeight: 'bold' }}
          >
            <span style={{ color: 'black', fontWeight: 'normal' }}>
              Status:{' '}
            </span>{' '}
            {getStatusFromStatusCode(status)}
          </Typography>
        </Grid>
        <Grid container item xs={4} justify="flex-end" alignItems="center">
          <Typography className={classes.blueText}>
            <span style={{ color: 'black' }}>Amount Donated: </span> {amountDonated}
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
    fontSize: '0.9rem',
  },
  grayText: {
    color: '#bdbdbd',
    fontSize: '0.7rem',
  },
});

export default ProjectItemExpand;
