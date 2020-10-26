import ArchiveIcon from '@material-ui/icons/Archive';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import ForwardIcon from '@material-ui/icons/Forward';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { fade } from '@material-ui/core/styles/colorManipulator';
import format from 'date-fns/format';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  message: {
    boxShadow: '0 0 0 1px rgba(0,0,0,.05),0 1px 1px rgba(0,0,0,.05)',
    boxSizing: 'content-box',
    display: 'block',
    margin: 0,
    transition: 'box-shadow 300ms',
    overflow: 'hidden',
    '&:first-child': {
      borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`
    },
    '&:last-child': {
      borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`
    }
  },
  messageOpened: {
    boxShadow: `0 0 0 1px ${fade(
      theme.palette.primary.main,
      0.5
    )}, 0 1px 1px ${fade(theme.palette.primary.main, 0.5)}`,
    boxSizing: 'content-box',
    zIndex: 1,
    position: 'relative'
  },
  header: {
    width: '100%',
    height: '65px',
    cursor: 'pointer',
    padding: `0 ${theme.spacing(1) * 2}px`,
    flexWrap: 'nowrap',
    alignItems: 'center',
    background: theme.palette.background.paper,
    '&::after': {
      content: "''",
      minHeight: 'inherit',
      fontSize: 0
    }
  },
  card: {
    background: theme.palette.background.paper,
    borderRadius: 0
  },
  button: {
    margin: `0 ${theme.spacing(1)}px`
  }
}));

const Item = ({ message, index, activeMessage, toggleMessage }) => {
  const classes = useStyles();
  const currentlyOpened = activeMessage === index ? true : false;
  const createMarkup = body => {
    return { __html: body };
  };
  return (
    <div
      className={classNames(
        classes.message,
        currentlyOpened ? classes.messageOpened : null
      )}
    >
      <Grid
        container
        spacing={0}
        alignItems={'center'}
        direction={'row'}
        className={classes.header}
        onClick={() => toggleMessage(index)}
      >
        {!currentlyOpened && message.avatar}
        {!currentlyOpened && <span className="mx-xs" />}
        <Hidden xsDown>
          <Typography
            className={classNames('mr-1', currentlyOpened ? null : 'pl-1')}
            style={{ minWidth: '120px' }}
          >
            {message.from}
          </Typography>
        </Hidden>
        <Typography noWrap>{message.subject}</Typography>
        <span className="flexSpacer" />
        <Hidden smDown>
          <Typography variant="caption">
            {format(message.date, 'MMMM Do YYYY')}
          </Typography>
        </Hidden>
      </Grid>

      <Collapse
        in={currentlyOpened ? true : false}
        timeout="auto"
        unmountOnExit
      >
        <Card className={classes.card}>
          <Divider />
          <CardHeader
            avatar={message.avatar}
            title={message.from}
            subheader={format(message.date, 'MMMM Do YYYY')}
            className="pb-0"
          />
          <CardContent className="pt-0">
            <Typography
              dangerouslySetInnerHTML={createMarkup(message.body)}
              component="div"
            />
          </CardContent>
          <Divider />
          <CardActions disableSpacing>
            <Hidden xsDown>
              <span className="flexSpacer" />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Archive
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Delete
              </Button>
              <Button variant="contained" className={classes.button}>
                Forward
              </Button>
              <Button variant="contained" disabled className={classes.button}>
                Edit
              </Button>
            </Hidden>

            <Hidden smUp>
              <IconButton>
                <ArchiveIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <ForwardIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Hidden>
          </CardActions>
        </Card>
      </Collapse>
    </div>
  );
};

Item.propTypes = {
  message: PropTypes.shape({
    from: PropTypes.string,
    date: PropTypes.number,
    subject: PropTypes.string,
    avatar: PropTypes.element,
    body: PropTypes.string
  }).isRequired,
  index: PropTypes.number,
  activeMessage: PropTypes.number,
  toggleMessage: PropTypes.func
};

export default Item;
