import React, { useState } from "react";
import { formatPrice, getStocks } from "../../helpers";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import format from "date-fns/format";
import { makeStyles } from "@material-ui/core/styles";
import { notificationCenterWidth } from "../../styleVariables";
import useMountEffect from "../../mountEffect";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: notificationCenterWidth,
    maxWidth: notificationCenterWidth,
    [theme.breakpoints.down("sm")]: {
      top: "56px!important",
      height: "calc(100vh - 56px)"
    },
    [theme.breakpoints.up("sm")]: {
      top: "64px!important",
      height: "calc(100vh - 64px)"
    },
    zIndex: theme.zIndex.drawer + 99
  },
  modal: {
    [theme.breakpoints.down("sm")]: {
      top: "56px"
    },
    [theme.breakpoints.up("sm")]: {
      top: "64px"
    },
    zIndex: theme.zIndex.drawer + 99
  },
  backdrop: {
    [theme.breakpoints.down("sm")]: {
      top: "56px"
    },
    [theme.breakpoints.up("sm")]: {
      top: "64px"
    }
  },
  container: {
    position: "relative",
    overflowX: "hidden",
    overflowY: "auto",
    zIndex: 1,
    flexGrow: 1
  },
  tabsRoot: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: "50%",
    color: theme.palette.text.primary
  },
  padding: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1) * 2,
      paddingRight: theme.spacing(1) * 2,
      paddingTop: theme.spacing(1) * 2,
      paddingBottom: theme.spacing(1) * 2
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(1) * 3,
      paddingRight: theme.spacing(1) * 3,
      paddingTop: theme.spacing(1) * 2,
      paddingBottom: theme.spacing(1) * 2
    }
  }
}));

const NotificationCenter = ({ notificationsOpen, toogleNotifications }) => {
  const classes = useStyles();
  const [tab, setTab] = useState(1);
  const [stocks, setStocks] = useState(undefined);
  const [today] = useState(Date.now());

  const handleTabToggle = (event, tab) => setTab(tab);

  useMountEffect(() => {
    (async function () {
      try {
        const stocks = await getStocks("MSFT,FB,AAPL,GOOG,DAX");
        if (stocks && stocks["Stock Quotes"]) {
          setStocks(stocks);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={notificationsOpen}
      ModalProps={{
        keepMounted: false,
        className: classes.modal,
        BackdropProps: {
          className: classes.backdrop
        },
        onBackdropClick: toogleNotifications
      }}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Tabs
        value={tab}
        onChange={handleTabToggle}
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        centered
      >
        <Tab classes={{ root: classes.tabRoot }} label="Today" />
        <Tab classes={{ root: classes.tabRoot }} label="Notifications" />
      </Tabs>
      <div className={classes.container}>
        {tab === 0 && (
          <>
            <div className={classes.padding}>
              <Typography variant="h6" gutterBottom>
                {format(today, "dddd")}
              </Typography>
              <Typography variant="subtitle1">
                {format(today, "MMM Do YY")}
              </Typography>
            </div>
            {stocks && (
              <>
                <Divider />
                <List
                  component="nav"
                  subheader={
                    <ListSubheader disableSticky>Stocks</ListSubheader>
                  }
                >
                  {stocks["Stock Quotes"].map((stock, index) => (
                    <ListItem button key={index}>
                      <ListItemText primary={stock["1. symbol"]} />
                      <ListItemSecondaryAction className="mx-1">
                        <Typography variant="caption">
                          {formatPrice(stock["2. price"])}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </>
            )}
            <Divider />
            <List
              subheader={<ListSubheader disableSticky>Tasks</ListSubheader>}
            ></List>
            <Divider />
            <List
              subheader={<ListSubheader disableSticky>Stats</ListSubheader>}
            ></List>
          </>
        )}
        {tab === 1 && <List></List>}
      </div>
    </Drawer>
  );
};

NotificationCenter.propTypes = {
  notificationsOpen: PropTypes.bool,
  toogleNotifications: PropTypes.func
};

export default NotificationCenter;
