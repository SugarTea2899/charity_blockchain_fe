import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';

export default function MyAppBar() {
  const classes = useStyles();
  const isAccessed = localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY) !== null;

  const onLogOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_PRIVATE_KEY);
    history.replace('/');
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <p onClick={() => history.replace('/')} className={classes.logo}>
            T - Charity
          </p>
          <div className={classes.rightSection}>
            {isAccessed && (
              <>
                <p
                  onClick={() => history.push('/explore')}
                  className={classes.title}
                >
                  Explore
                </p>
                <div onClick={onLogOut}>
                  <ExitToAppIcon className={classes.existButton} />
                </div>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    justifyContent: 'flex-start',
    marginRight: theme.spacing(2),
  },
  title: {
    paddingRight: '8%',
    color: 'white',
    cursor: 'pointer',
  },
  existButton: {
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
  },
  logo: {
    fontFamily: 'Lobster',
    color: 'white',
    width: '100%',
    fontSize: '1.3rem',
    cursor: 'pointer',
  },
  rightSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));
