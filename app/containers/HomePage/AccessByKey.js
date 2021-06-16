import React, {memo, useState} from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { ColorButton } from '../../components/ColorButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { accessWallet } from './actions';

export const AccessByKey = () => {
  const classes = useStyle();
  const [privateKey, setPrivateKey] = useState('');
  const dispatch = useDispatch();

  const onClick = (privateKey, dispatch) => {
    dispatch(accessWallet(privateKey, dispatch));
  }

  return (
    <div className={classes.container}>
    <TextField 
      label="Private Key"
      fullWidth
      value={privateKey}
      onChange={(e) => setPrivateKey(e.target.value)}
    />
    <ColorButton
      fullWidth
      variant="contained"
      className={classes.nextButton}
      endIcon={<ArrowRightAltIcon />}
      onClick={() => onClick(privateKey, dispatch)}
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
    fontSize: '0.9rem',
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