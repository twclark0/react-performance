import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'center',
    cursor: 'default',
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  title: {
    fontSize: '1rem',
    overflow: 'hidden',
    marginBottom: theme.spacing(1),
    whiteSpace: 'nowrap',
    letterSpacing: '.01rem',
    textOverflow: 'ellipsis'
  },
  subheader: {
    textTransform: 'capitalize',
    fontSize: '12px'
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: 900,
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  symbol: {
    fontSize: '1rem',
    verticalAlign: 'super'
  },
  period: {
    fontSize: '0.8125rem',
    display: 'inline-block',
    padding: 0,
    opacity: '.7'
  },
  feature: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  description: {
    fontSize: '14px',
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    lineHeight: 1
  },
  inactive: {
    color: theme.palette.text.secondary
  },
  centered: {
    margin: '0 auto'
  }
}));

const Pricing = ({ title, subtitle, price, features }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={subtitle}
        classes={{
          title: classes.title,
          subheader: classes.subheader
        }}
      />
      <Typography variant="h2" className={classes.price}>
        <span className={classes.symbol}>$</span>
        <span>{price}</span>
        <span className={classes.period}>/ month</span>
      </Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem button className={classes.feature} key={index}>
            <ListItemText
              primary={feature.title}
              className={classNames(
                classes.description,
                feature.available ? '' : classes.inactive
              )}
              disableTypography
            />
          </ListItem>
        ))}
      </List>
      <CardActions className={classes.actions} disableSpacing>
        <Button
          variant="contained"
          color="secondary"
          className={classes.centered}
        >
          Choose plan
        </Button>
      </CardActions>
    </Card>
  );
};

Pricing.prototypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      available: PropTypes.bool
    })
  )
};

export default Pricing;
