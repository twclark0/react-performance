import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0
  },
  content: {
    paddingBottom: theme.spacing(1) * 2
  },
  center: {
    textAlign: 'center'
  }
}));

const ImageStatCard = ({ title, image, imageHeight, stats }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        title={title}
        image={image}
        className={classes.media}
        style={{ paddingTop: imageHeight }}
      />
      <CardContent className={classes.content}>
        <Grid
          container
          spacing={0}
          alignItems={'center'}
          direction={'row'}
          justify={'space-between'}
        >
          {stats.map((stat, index) => (
            <Grid item xs className={classes.center} key={index}>
              <Typography variant="h6" gutterBottom>
                {stat.value}
              </Typography>
              <Typography variant="caption">{stat.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

ImageStatCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};

export default ImageStatCard;
