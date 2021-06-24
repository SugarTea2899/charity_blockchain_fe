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

const CreateDisbursement = ({ open, onClose, onSend }) => {
  const classes = useStyle();
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');

  // const balance = useSelector(makeSelectBalance());

  // useEffect(() => {
  //   if (amount <= balance) setAmountError('');
  //   else setAmountError('You not enough coin to send');
  // }, [amount]);
  return (
    <Dialog open={false} fullWidth onClose={onClose}>
      <DialogTitle>{'Disbursement'}</DialogTitle>
      <DialogContent>
        <TextField
          style={{ marginBottom: '3%' }}
          type="number"
          fullWidth
          label="Amount"
          value={`${amount}`}
          onChange={e => setAmount(e.target.value)}
          helperText={amountError}
          error={amountError !== ''}
        />
        <TextField
          style={{ marginBottom: '2%' }}
          fullWidth
          label="Reason"
        />
      </DialogContent>
      <DialogActions>
        <ColorButton
          onClick={() => {
            if (amountError !== '') return;

            setAmount('');
            onSend(address, amount);
          }}
          fullWidth
          className={classes.sendButton}
        >
          disburse
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

export default CreateDisbursement;
