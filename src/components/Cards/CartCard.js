import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { formatPrice } from '../../helpers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0
  },
  actions: {
    display: 'flex'
  }
}));

const CartCard = ({ title, price, image, imageHeight }) => {
  const classes = useStyles();
  return (
    <Card>
      <Grid container spacing={0} alignItems="center" className="pa-1">
        <Grid item className="flexSpacer">
          <Typography variant="subtitle1">{title}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            {formatPrice(price)}
          </Button>
        </Grid>
      </Grid>
      <CardMedia
        className={classes.media}
        style={{ paddingTop: imageHeight }}
        image={image}
        title={title}
      />
      <CardActions className={classes.actions} disableSpacing>
        <div className="flexSpacer">
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
        </div>
        <Button variant="contained" color="secondary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

CartCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired
};

export default CartCard;
