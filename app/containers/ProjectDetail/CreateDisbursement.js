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

const CreateDisbursement = ({ open, onClose, onSend, remain }) => {
  const classes = useStyle();
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  const [reason, setReason] = useState('');
  const [reasonError, setReasonError] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [privateKeyError, setPrivateKeyError] = useState('');

  useEffect(() => {
    if (amount <= remain) setAmountError('');
    else setAmountError('Your project is not enough coin to disburse');
  }, [amount]);

  useEffect(() => {
    if (reason.length > 0) setReasonError('');
    else setReasonError('Reason is not empty');
  }, [reason]);

  useEffect(() => {
    if (privateKey.length === 64) setPrivateKeyError('');
    else setPrivateKeyError('Project private key is not valid.');
  }, [privateKey]);

  return (
    <Dialog open={open} fullWidth onClose={onClose}>
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
          value={privateKey}
          onChange={e => setPrivateKey(e.target.value)}
          helperText={privateKeyError}
          error={privateKeyError !== ''}
          label="Project Private Key"
        />
        <TextField
          style={{ marginBottom: '2%' }}
          fullWidth
          label="Reason"
          value={reason}
          onChange={e => setReason(e.target.value)}
          helperText={reasonError}
          error={reasonError !== ''}
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
