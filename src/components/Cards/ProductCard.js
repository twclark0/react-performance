import BookmarkIcon from "@material-ui/icons/Bookmark";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { formatPrice } from "../../helpers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mediaGrid: {
    textAlign: "center",
    overflow: "hidden"
  },
  mediaGridCompact: {
    borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`
  },
  figure: {
    position: "relative",
    cursor: "pointer",
    background: "rgba(0,0,0,.38)",
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    textAlign: "center",
    "&:hover $captionAnchor": {
      transform: "translate3d(0,0,0)",
      opacity: 1
    },
    "&:hover $caption::before": {
      transform: "translate3d(0,0,0)"
    }
  },
  figureCompact: {
    borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`
  },
  figureImg: {
    position: "relative",
    display: "block",
    maxWidth: "100%",
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    transition: "opacity 300ms, transform 300ms",
    opacity: 0.85
  },
  figureImgCompact: {
    borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`
  },
  badge: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    position: "absolute",
    borderTop: `30px solid ${theme.palette.error.main}`,
    borderBottom: "30px solid transparent",
    borderRight: "30px solid transparent",
    borderLeft: `30px solid ${theme.palette.error.main}`,
    top: 0,
    left: 0,
    zIndex: 100
  },
  badgeText: {
    position: "absolute",
    transform: "rotate(-45deg)",
    top: "-18px",
    left: "-25px",
    whiteSpace: "nowrap",
    color: theme.palette.primary.contrastText
  },
  caption: {
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    "&::before": {
      pointerEvents: "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      borderStyle: "solid",
      borderColor: "rgba(0,0,0,.38)",
      content: "''",
      transition: "transform 300ms",
      right: 0,
      bottom: 0,
      borderWidth: "0 45px 0 0",
      transform: "translate3d(45px,0,0)"
    }
  },
  captionAnchor: {
    position: "relative",
    transition: "opacity 300ms, transform 300ms",
    display: "block",
    color: theme.palette.primary.contrastText,
    transform: "translate3d(90px,0,0)",
    margin: `${theme.spacing(1)}px 0`,
    "&:first-child": {
      transitionDelay: "0.025s"
    },
    "&:nth-child(2)": {
      transitionDelay: "0.05s"
    },
    "&:nth-child(3)": {
      transitionDelay: "0.075s"
    },
    "&:nth-child(4)": {
      transitionDelay: " 0.1s"
    }
  },
  paragraph: {
    margin: 0,
    float: "right",
    clear: "both",
    textAlign: "center",
    textTransform: "none",
    fontSize: "1rem",
    width: "45px",
    position: "relative"
  },
  price: {
    display: "flex",
    alignItems: "baseline"
  },
  mainPrice: {
    color: "green"
  }
}));

const ProductCard = ({
  id,
  name,
  price,
  description,
  sale,
  discounted,
  discount
}) => {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.mediaGrid}>
        <figure className={classes.figure}>
          {sale && (
            <div className={classes.badge}>
              <Typography className={classes.badgeText}>Sale</Typography>
            </div>
          )}
          <img
            alt={name}
            src={`${process.env.PUBLIC_URL}/static/images/unsplash/${id}.jpg`}
            className={classes.figureImg}
          />
          <figcaption className={classes.caption}>
            <p className={classes.paragraph}>
              <IconButton
                className={classes.captionAnchor}
                aria-label="Add to cart"
              >
                <ShoppingBasketIcon />
              </IconButton>

              <IconButton
                className={classes.captionAnchor}
                aria-label="Favourite"
              >
                <FavoriteIcon />
              </IconButton>

              <IconButton className={classes.captionAnchor} aria-label="Share">
                <ShareIcon />
              </IconButton>

              <IconButton
                className={classes.captionAnchor}
                aria-label="Bookmark"
              >
                <BookmarkIcon />
              </IconButton>
            </p>
          </figcaption>
        </figure>
      </div>
      <CardContent className="pa-1">
        <Grid
          container
          spacing={0}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography>{name}</Typography>
            <Typography variant="caption">{description}</Typography>
          </Grid>
          <Grid
            item
            className={classNames(classes.price, "mat-text-primary text-xl")}
          >
            {discounted && (
              <Typography
                variant="caption"
                className="strikethrough"
                component="span"
              >
                {formatPrice(discount)}
              </Typography>
            )}
            <Typography variant="h6" className={classes.mainPrice}>
              {" "}
              {formatPrice(price)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  sale: PropTypes.bool,
  discounted: PropTypes.bool,
  discount: PropTypes.number
};

export default ProductCard;
