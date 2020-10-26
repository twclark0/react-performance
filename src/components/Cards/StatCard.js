import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    position: 'relative',
    padding: theme.spacing(1) * 2,
    '&:last-child': {
      paddingBottom: theme.spacing(1) * 2
    }
  },
  icon: {
    boxShadow: 'none',
    color: 'white'
  },
  iconFloat: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    marginTop: '-20px',
    opacity: '0.2',
    transform: 'rotate(-5deg)'
  },
  lightText: {
    color: 'white'
  }
}));

const StatCard = ({ type, title, value, icon, color }) => {
  const classes = useStyles();
  let before = null;
  let after = null;

  const cardIcon = (
    <Grid item className={type === 'fill' ? classes.iconFloat : null}>
      <IconButton
        className={classes.icon}
        aria-label={title}
        style={{ backgroundColor: color }}
      >
        {icon}
      </IconButton>
    </Grid>
  );

  if (icon) {
    type === 'fill' ? (after = cardIcon) : (before = cardIcon);
  }

  return (
    <Card style={type === 'fill' ? { backgroundColor: color } : null}>
      <CardContent className={classes.content}>
        <Grid
          container
          alignItems={'center'}
          direction={'row'}
          justify={'flex-start'}
        >
          {before}
          <Grid item>
            <div className={type === 'fill' ? 'pr-1' : 'px-1'}>
              <Typography
                variant="h6"
                className={type === 'fill' ? classes.lightText : null}
              >
                {value}
              </Typography>
              <Typography
                variant="caption"
                className={type === 'fill' ? classes.lightText : null}
              >
                {title}
              </Typography>
            </div>
          </Grid>
          {after}
        </Grid>
      </CardContent>
    </Card>
  );
};

StatCard.propTypes = {
  type: PropTypes.oneOf(['fill']),
  title: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.element,
  color: PropTypes.string
};

export default StatCard;
