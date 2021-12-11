import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textEllipsis: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "pre"
  }
}));

const NewsCard = ({ feed, subtitle }) => {
  const classes = useStyles();

  // TODO EX:4
  // 1. Install react-window using `yarn add react-window` command
  // 2. Use the `FixedSizeList` component from react-window to render the list as shown in the video

  return (
    <Card>
      <CardHeader title="Reviews " subheader={subtitle} />
      <Divider />
      <List>
        {feed.map((item, index) => (
          <ListItem key={index}>
            {item.avatar ? (
              item.avatar
            ) : (
              <Avatar>{item.subject.charAt(0)}</Avatar>
            )}
            <ListItemText
              primary={item.subject}
              secondary={item.message}
              inset
              classes={{
                primary: classes.textEllipsis,
                secondary: classes.textEllipsis
              }}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

NewsCard.propTypes = {
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      avatar: PropTypes.element,
      subject: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
  subtitle: PropTypes.string
};

export default NewsCard;
