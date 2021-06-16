import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
  Grid,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ColorButton } from '../../components/ColorButton';
import { formatDate } from '../../utils/helpers';

export const CreateProject = ({ open, onClose, onCreate }) => {
  const classes = useStyle();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onClickCreate = () => {
    if (name === '' || description === '') {
      alert('Empty information');
      return;
    }

    if (startDate >= endDate) {
      alert('Start Date is greater than End Date');
      return;
    }

    onCreate({
      name,
      description,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    });
    onClose();
  };
  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <DialogTitle>{'Create Project'}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          style={{ marginTop: '2%' }}
          fullWidth
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-between">
            <KeyboardDatePicker
              margin="normal"
              id="start-date"
              label="Start Date"
              format="dd/MM/yyyy"
              value={startDate}
              onChange={date => setStartDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="end-date"
              label="End Date"
              format="dd/MM/yyyy"
              value={endDate}
              onChange={date => setEndDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <ColorButton
          onClick={onClickCreate}
          fullWidth
          className={classes.sendButton}
        >
          create
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

export default CreateProject;
