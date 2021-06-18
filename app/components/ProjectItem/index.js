import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { formatDate, formatDateTime, getColorFromStatusCode, getStatusFromStatusCode } from '../../utils/helpers';

export const ProjectItem = ({address, name, timestamp, status, amountDonated}) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container item xs={5}>
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
        <Grid container item xs={3} alignItems="center">
          <Typography style={{color: getColorFromStatusCode(status), fontSize: '0.8rem', fontWeight: 'bold'}}>
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

export default ProjectItem;
