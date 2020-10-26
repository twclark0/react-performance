import { Link } from 'react-router-dom';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  session: {
    position: 'relative',
    zIndex: 4000,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    flexDirection: 'column',
    minHeight: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: '150px',
    lineHeight: 1.2,
    fontWeight: 100,
    display: 'inline-table',
    position: 'relative',
    background: theme.palette.primary.main,
    color: '#fff',
    padding: `0 ${theme.spacing(1) * 3}px`,
    borderRadius: '60px',
    cursor: 'pointer',
    margin: `0 0 ${theme.spacing(1)}px`,
    '&:after': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: '""',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderTopColor: theme.palette.primary.main,
      borderWidth: '8px',
      marginLeft: '-8px'
    }
  },
  subtitle: {
    fontSize: '32px',
    fontWeight: 900
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.session}>
      <div className={classes.content}>
        <Typography className={classes.title}>404</Typography>
        <Typography className={classes.subtitle}>Page not found!</Typography>
        <Typography variant="caption">
          Sorry, but the page you were trying to view does not exist.{' '}
          <Link to="/">Report this error?</Link>
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
