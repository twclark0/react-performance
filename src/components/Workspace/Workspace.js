import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { drawerWidth } from '../../styleVariables';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
    width: '100%',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '-webkit-overflow-scrolling': 'touch'
  },
  'content-left': {
    [theme.breakpoints.up('md')]: {
      marginLeft: -drawerWidth
    }
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  }
}));

const Workspace = ({ children, opened }) => {
  const classes = useStyles();
  return (
    <main
      className={classNames(classes.content, classes[`content-left`], {
        [classes.contentShift]: opened,
        [classes[`contentShift-left`]]: opened
      })}
    >
      {children}
    </main>
  );
};

Workspace.prototypes = {
  children: PropTypes.node.isRequired,
  opened: PropTypes.bool
};

export default Workspace;
