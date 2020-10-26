import AssignmentIcon from "@material-ui/icons/Assignment";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import green from "@material-ui/core/colors/green";
import pink from "@material-ui/core/colors/pink";

const styles = {
  pinkAvatar: {
    color: "#fff",
    backgroundColor: pink[500]
  },
  greenAvatar: {
    color: "#fff",
    backgroundColor: green[500]
  }
};

export default [
  {
    title: "Vestibulum Fusce Purus",
    subtitle: "Etiam Ullamcorper Tellus Pharetra",
    avatar: <Avatar style={{ ...styles.pinkAvatar }}>H</Avatar>,
    body:
      "Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  },
  {
    title: "Magna Consectetur Ipsum",
    subtitle: "Dapibus Parturient Lorem Etiam Quam",
    avatar: (
      <Avatar style={{ ...styles.greenAvatar }}>
        <AssignmentIcon />
      </Avatar>
    ),
    body:
      "Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum."
  },
  {
    title: "Parturient Justo Fringilla Nibh",
    subtitle: "Ullamcorper Parturient Ridiculus",
    avatar: (
      <Avatar
        alt=""
        src={`${process.env.PUBLIC_URL}/static/images/face1.jpg`}
      />
    ),
    body:
      "Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
  },
  {
    title: "Fermentum Pharetra",
    subtitle: "Fringilla Pellentesque Risus Tristique",
    avatar: (
      <Avatar
        alt=""
        src={`${process.env.PUBLIC_URL}/static/images/face2.jpg`}
      />
    ),
    body:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum."
  },
  {
    title: "Lorem Aenean Fermentum",
    subtitle: "Inceptos Vulputate",
    avatar: (
      <Avatar
        alt=""
        src={`${process.env.PUBLIC_URL}/static/images/face3.jpg`}
      />
    ),
    body:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper."
  }
];
