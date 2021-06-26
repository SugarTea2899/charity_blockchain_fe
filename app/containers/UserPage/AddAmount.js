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
import { makeSelectBalance } from './selectors';

const AddAmount = ({ open, onClose, onSend }) => {
  const classes = useStyle();
  const [amount, setAmount] = useState('');

  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <DialogTitle>{'Add Amount'}</DialogTitle>
      <DialogContent>
        <TextField
          style={{ marginBottom: '2%' }}
          type="number"
          fullWidth
          label="Amount"
          value={`${amount}`}
          onChange={e => setAmount(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <ColorButton
          onClick={() => {
            onClose();
            onSend(amount);
            setAmount('');
          }}
          fullWidth
          className={classes.sendButton}
        >
          Add
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

export default AddAmount;
