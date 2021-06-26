import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';
import { useSelector } from 'react-redux';
import { TramRounded } from '@material-ui/icons';

const EndProjectDialog = ({ open, onClose, onSend }) => {
  const classes = useStyle();
  const [privateKey, setPrivateKey] = useState('');
  const [privateKeyError, setPrivateKeyError] = useState('');

  useEffect(() => {
    if (privateKey.length === 64) setPrivateKeyError('');
    else setPrivateKeyError('Private key is invalid');
  }, [privateKey]);


  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <DialogTitle>{'End Project'}</DialogTitle>
      <DialogContent>
        <TextField
          style={{ marginBottom: '3%' }}
          fullWidth
          label="Project Private key"
          value={`${privateKey}`}
          onChange={e => setPrivateKey(e.target.value)}
          helperText={privateKeyError}
          error={privateKeyError !== ''}
        />
      </DialogContent>
      <DialogActions>
        <ColorButton
          onClick={() => {
            if (privateKeyError !== '') return;

            setPrivateKey('');
            onSend(privateKey);
            onClose();
          }}
          fullWidth
          className={classes.sendButton}
        >
          END
        </ColorButton>
      </DialogActions>
    </Dialog>
  );
};

const useStyle = makeStyles({
  sendButton: {
    marginLeft: '2.2%',
    marginRight: '2.2%',
    marginBottom: '2%',
  },
});

export default EndProjectDialog;
