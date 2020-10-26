import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  stream: {
    padding: theme.spacing(1),
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '8px',
      bottom: 0,
      [theme.breakpoints.down('sm')]: {
        left: '44px'
      },
      [theme.breakpoints.up('sm')]: {
        left: '43px'
      },
      width: '1px',
      backgroundColor: theme.palette.divider
    }
  },
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '74px'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '80px'
    }
  }
}));

const ActivityStream = ({ title, stream }) => {
  const classes = useStyles();
  return (
    <div className={classes.stream}>
      <div className={classes.card}>
        <Button variant="contained" color="primary">
          {title}
        </Button>
      </div>

      {stream.map((item, index) => (
        <Card key={index} className={classes.card}>
          <CardHeader
            avatar={item.avatar}
            title={item.title}
            subheader={item.subtitle}
          />
          <CardContent className={classes.content}>
            <Typography component="p">{item.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

ActivityStream.propTypes = {
  title: PropTypes.string.isRequired,
  stream: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.element,
      body: PropTypes.string
    })
  ).isRequired
};

export default ActivityStream;
