import React, { memo, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { ColorButton } from '../../components/ColorButton';
import { createPrivateKey } from './actions';

import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';

export const CreateKey = ({}) => {
  const classes = useStyle();
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <TextField
        label="Nick Name"
        placeholder="Enter you nick name"
        value={name}
        fullWidth
        style={{marginBottom: '5%'}}
        onChange={(e) => setName(e.target.value)}
      />
      <ColorButton
        onClick={() => {
          setName('');
          dispatch(createPrivateKey(dispatch, name));
        } }
        variant="contained"
        color="primary"
        fullWidth
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
    flexDirection: 'column'
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
