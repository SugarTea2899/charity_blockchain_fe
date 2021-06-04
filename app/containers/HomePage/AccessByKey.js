import React, {memo} from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ColorButton } from '../../components/ColorButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export const AccessByKey = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
    <TextField 
      label="Private Key"
      fullWidth
    />
    <ColorButton
      fullWidth
      variant="contained"
      className={classes.nextButton}
      endIcon={<ArrowRightAltIcon />}
    >
      Next      
    </ColorButton>
  </div>
  )
}

const useStyle = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  nextButton: {
    marginTop: '5%',
    fontSize: '1rem',
    height: '50%'
  }
});


const mapStateToProps = createStructuredSelector({


});


const mapDispatchToProps = dispatch => {
  return {}
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);


export default compose(
  withConnect,
  memo,
)(AccessByKey);