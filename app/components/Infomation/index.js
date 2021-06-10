import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const Information = ({ title, content, markBlue = false, customColor, isBold = false }) => {
  const classes = useStyle();
  let contentColor = markBlue ? '#2196f3' : 'black';
  contentColor = customColor || contentColor;
  let bold = isBold ? 'bold' : '';

  return (
    <Grid container className={classes.container} >
      <Grid container item xs={3} alignItems="center" alignContent='center'>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid container item xs={9} alignItems="center" alignContent='center'>
        <Typography className={classes.content} style={{ color: contentColor, fontWeight: bold }}>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyle = makeStyles({
  container: {
    borderBottom: '1px solid #e0e0e0',
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '1.5%',
    paddingRight: '1.5%'
  },
  title: {
    fontSize: '1rem'
  },
  content: {
    fontSize: '1rem'
  },
});

export default Information;
