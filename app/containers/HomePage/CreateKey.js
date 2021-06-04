import React, {memo} from 'react';
import { makeStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ColorButton } from '../../components/ColorButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const CreateKey = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <ColorButton variant="contained" color="primary" endIcon={<VpnKeyIcon />}>
        Generate Private Key
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
    height: '100%',
  },
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
)(CreateKey);