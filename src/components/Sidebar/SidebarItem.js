import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { capitalize } from '../../helpers';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import useMountEffect from '../../mountEffect';

const useStyles = makeStyles(theme => ({
  badge: {
    width: '20px',
    height: '20px',
    display: 'flex',
    zIndex: 1,
    flexWrap: 'wrap',
    fontSize: '0.75rem',
    alignItems: 'center',
    borderRadius: '50%',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuLink: {
    position: 'relative',
    display: 'block'
  },
  menuItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(1) * 1.5,
    paddingBottom: theme.spacing(1) * 1.5
  },
  menuIcon: {
    marginLeft: theme.spacing(1) * 2,
    marginRight: theme.spacing(1) * 2
  },
  menuSubItem: {
    paddingLeft: '55px',
    paddingRight: '55px',
    paddingTop: theme.spacing(1) * 1.5,
    paddingBottom: theme.spacing(1) * 1.5
  },
  menuCollapsed: {
    backgroundColor: theme.palette.action.hover
  },
  menuActive: {
    backgroundColor: theme.palette.action.hover
  },
  menuClosed: {
    backgroundColor: 'transparent'
  },
  caret: {
    marginLeft: theme.spacing(1) * 2,
    marginRight: theme.spacing(1) * 2,
    minWidth: 0
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  }
}));

const SidebarItem = ({
  route,
  index,
  activeRoute,
  toggleMenu,
  currentPath
}) => {
  const classes = useStyles();

  useMountEffect(() => {
    if (!currentPath || activeRoute === index || route.path === '/') return;
    toggleMenu(index);
  });

  const badge = badge => {
    if (!badge) return;
    const badgeClassName = classNames(classes.badge, {
      [classes[`${badge.type}`]]: badge.type !== 'default'
    });
    return (
      <Typography
        className={classNames(classes.badge, badgeClassName)}
        component="div"
      >
        {badge.value}
      </Typography>
    );
  };

  if (route.type === 'external') {
    return (
      <a
        href={route.path}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
        className={classes.menuLink}
      >
        <ListItem className={classes.menuItem} button>
          <ListItemIcon>
            <route.icon className={classes.menuIcon} />
          </ListItemIcon>
          <Typography variant="body1" className="flexSpacer">
            {capitalize(route.name)}
          </Typography>
          {badge(route.badge)}
        </ListItem>
      </a>
    );
  }

  if (route.type === 'submenu') {
    return (
      <div
        className={
          activeRoute === index ? classes.menuCollapsed : classes.menuClosed
        }
      >
        <ListItem
          className={classes.menuItem}
          button
          key={index}
          onClick={() => toggleMenu(index)}
        >
          <ListItemIcon>
            <route.icon className={classes.menuIcon} />
          </ListItemIcon>
          <Typography variant="body1" className="flexSpacer">
            {capitalize(route.name)}
          </Typography>
          {badge(route.badge)}
          <ListItemIcon className={classes.caret}>
            {activeRoute === index ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </ListItemIcon>
        </ListItem>
        <Collapse
          in={activeRoute === index ? true : false}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>
            {route.children.map((subitem, index) => (
              <NavLink
                to={`${route.path ? route.path : ''}${
                  subitem.path ? subitem.path : ''
                }`}
                exact
                className={classes.menuLink}
                activeClassName={classes.menuActive}
                key={index}
              >
                <ListItem className={classes.menuSubItem} button>
                  <Typography variant="body1" className="flexSpacer">
                    {capitalize(subitem.name)}
                  </Typography>
                  {badge(subitem.badge)}
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Collapse>
      </div>
    );
  }

  return (
    <NavLink
      to={route.path}
      exact
      className={classes.menuLink}
      activeClassName={classes.menuActive}
      key={index}
    >
      <ListItem
        className={classes.menuItem}
        button
        onClick={() => toggleMenu(index)}
      >
        <ListItemIcon>
          <route.icon className={classes.menuIcon} />
        </ListItemIcon>
        <Typography variant="body1" className="flexSpacer">
          {capitalize(route.name)}
        </Typography>
        {badge(route.badge)}
      </ListItem>
    </NavLink>
  );
};

SidebarItem.prototypes = {
  route: PropTypes.object,
  index: PropTypes.number,
  activeRoute: PropTypes.number,
  toggleMenu: PropTypes.func
};

export default SidebarItem;
