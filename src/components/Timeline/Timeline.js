import { infoColor, warningColor } from '../../styleVariables';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  timeline: {
    '&::before': {
      position: 'absolute',
      top: '6px',
      width: '4px',
      height: '100%',
      content: '""',
      backgroundColor: theme.palette.background.paper,
      left: '4px',
      [theme.breakpoints.up('lg')]: {
        left: '50%',
        marginLeft: '-2px'
      }
    },
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1) * 2
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1) * 3
    }
  },
  icon: {
    position: 'absolute',
    top: '15px',
    width: '12px',
    height: '12px',
    textAlign: 'center',
    borderRadius: '50%',
    left: '0',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '2px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.paper
    },
    [theme.breakpoints.up('lg')]: {
      left: '50%',
      marginLeft: '-6px'
    }
  },
  card: {
    position: 'relative',
    margin: '40px 0',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:first-child': {
      marginTop: 0
    }
  },
  content: {
    position: 'relative',
    marginLeft: '30px',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up('lg')]: {
      width: '47%',
      marginLeft: 0
    },
    [theme.breakpoints.down('md')]: {
      marginleft: '30px'
    }
  },
  body: {
    float: 'left',
    display: 'inline-block',
    margin: 0,
    padding: '16px',
    '&::before': {
      position: 'absolute',
      top: '11px',
      width: 0,
      height: 0,
      content: '""',
      pointerEvents: 'none',
      borderWidth: '10px',
      borderStyle: 'solid',
      right: '100%',
      borderColor: `transparent ${theme.palette.divider} transparent transparent`
    },
    '&::after': {
      position: 'absolute',
      top: '12px',
      width: 0,
      height: 0,
      content: '""',
      pointerEvents: 'none',
      borderWidth: '9px',
      borderStyle: 'solid',
      right: '100%',
      borderColor: `transparent ${theme.palette.background.paper} transparent transparent`
    },
    [theme.breakpoints.down('md')]: {
      float: 'left',
      marginBottom: 0
    }
  },
  date: {
    display: 'inline-block',
    padding: '4px 0 10px',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      top: '7px',
      width: '100%',
      left: '112%'
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 0,
      width: '100%',
      left: 'auto'
    }
  },
  contentOdd: {
    [theme.breakpoints.up('lg')]: {
      float: 'right'
    }
  },
  dateOdd: {
    [theme.breakpoints.up('lg')]: {
      right: '112%',
      left: 'auto',
      textAlign: 'right'
    }
  },
  contentEven: {
    [theme.breakpoints.up('lg')]: {
      float: 'left'
    }
  },
  bodyEven: {
    [theme.breakpoints.up('lg')]: {
      float: 'right',
      '&::before': {
        position: 'absolute',
        right: 'auto',
        left: '100%',
        borderColor: `transparent transparent transparent ${theme.palette.divider}`
      },
      '&::after': {
        position: 'absolute',
        right: 'auto',
        left: '100%',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`
      }
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  success: {
    backgroundColor: theme.palette.secondary.main
  },
  info: {
    backgroundColor: infoColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: theme.palette.error.main
  }
}));

const Timeline = ({ title, timeline }) => {
  const classes = useStyles();
  return (
    <div className={classes.timeline}>
      {title && (
        <div className={classNames(classes.card, 'text-lg-center')}>
          <Button variant="contained" color="primary">
            {title}
          </Button>
        </div>
      )}
      {timeline.map((item, index) => (
        <div key={index} className={classes.card}>
          <div className={classNames(classes.icon, classes[item.color])}></div>
          <section
            className={classNames(
              classes.content,
              index % 2 ? classes.contentOdd : classes.contentEven
            )}
          >
            <Paper
              className={classNames(
                classes.body,
                index % 2 ? classes.bodyOdd : classes.bodyEven
              )}
            >
              <Typography variant="body1">{item.text}</Typography>
            </Paper>
            <Typography
              variant="body1"
              component="div"
              className={classNames(
                classes.date,
                index % 2 ? classes.dateOdd : classes.dateEven
              )}
            >
              {distanceInWordsToNow(item.date)}
            </Typography>
          </section>
        </div>
      ))}
      <div className={classes.card}>
        <div
          className={classNames(classes.icon, classes.bgDanger)}
          style={{ top: 0 }}
        ></div>
      </div>
    </div>
  );
};

Timeline.prototypes = {
  title: PropTypes.string,
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      date: PropTypes.string,
      color: PropTypes.string
    })
  )
};

export default Timeline;
