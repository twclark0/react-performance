import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(1)
  },
  card: {
    position: 'relative',
    clear: 'both'
  },
  appBar: {
    boxShadow: theme.shadows[0]
  }
}));

const Example = ({ index, title, js: DemoComponent, docs }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography color="inherit" className="flexSpacer">
              {title}
            </Typography>
            <Tooltip
              id={`${index}`}
              title={'View official documentation'}
              placement="top"
            >
              <IconButton
                onClick={() => window.open(docs, '_blank')}
                aria-labelledby={index}
              >
                <LinkIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <CardContent className={classes.content}>
          <DemoComponent />
        </CardContent>
      </Card>
    </div>
  );
};

Example.prototypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  js: PropTypes.node.isRequired,
  docs: PropTypes.string.isRequired
};

export default Example;
