import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { drawerWidth } from '../../styleVariables';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    maxWidth: drawerWidth,
    height: '100%',
    zIndex: theme.zIndex.drawer + 99
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px!important'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px!important'
    },
    zIndex: '1000!important'
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    }
  }
}));

const Sidebar = ({ opened, toggleDrawer, routes, location }) => {
  const classes = useStyles();
  const [activeRoute, setActiveRoute] = useState(undefined);
  const toggleMenu = index =>
    setActiveRoute(activeRoute === index ? undefined : index);

  const menu = (
    <List component="div">
      {routes.map((route, index) => {
        const isCurrentPath =
          location.pathname.indexOf(route.path) > -1 ? true : false;
        return (
          <SidebarItem
            key={index}
            index={index}
            route={route}
            activeRoute={activeRoute}
            toggleMenu={toggleMenu}
            currentPath={isCurrentPath}
          />
        );
      })}
    </List>
  );

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="persistent"
          classes={{
            paper: classes.drawerPaper
          }}
          open={opened}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop
            },
            onBackdropClick: toggleDrawer
          }}
        >
          {menu}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          classes={{
            paper: classes.drawerPaper
          }}
          open={opened}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          disableBackdropTransition={!iOS}
          ModalProps={{
            keepMounted: false,
            className: classes.modal,
            BackdropProps: {
              className: classes.backdrop
            },
            onBackdropClick: toggleDrawer
          }}
        >
          {menu}
        </SwipeableDrawer>
      </Hidden>
    </>
  );
};

Sidebar.prototypes = {
  opened: PropTypes.func,
  toggleDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  openDrawer: PropTypes.func,
  routes: PropTypes.object
};

const SidebarWithRouter = withRouter(Sidebar);

export default withWidth()(SidebarWithRouter);
