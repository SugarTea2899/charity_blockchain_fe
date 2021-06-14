import React, { memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { ColorButton } from '../../components/ColorButton';
import { createPrivateKey } from './actions';

import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';

export const CreateKey = ({}) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <ColorButton
        onClick={() => dispatch(createPrivateKey(dispatch))}
        variant="contained"
        color="primary"
        endIcon={<VpnKeyIcon />}
      >
        Generate Private Key
      </ColorButton>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = connect(
  undefined,
  undefined,
);

export default compose(
  withConnect,
  memo,
)(CreateKey);
