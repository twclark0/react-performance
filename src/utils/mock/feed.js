import Avatar from "@material-ui/core/Avatar";
import React from "react";
import red from "@material-ui/core/colors/red";

export default [
  {
    from: "Ali Connors",
    message: "Dapibus Tellus",
    avatar: (
      <Avatar
        alt="Ali Connors"
        src={`${process.env.PUBLIC_URL}/static/images/face3.jpg`}
      />
    ),
    subject: "Quam Amet Vehicula"
  },
  {
    from: "Trevor Hansen",
    message: "Sit Malesuada",
    subject: "Sem Adipiscing Tristique"
  },
  {
    from: "Sandra Adams",
    message: "Adipiscing Mattis",
    avatar: (
      <Avatar
        alt="Sandra Adams"
        src={`${process.env.PUBLIC_URL}/static/images/face4.jpg`}
      />
    ),
    subject: "Ullamcorper Bibendum Ligula"
  },
  {
    from: "Jeff Jones",
    message: "Consectetur Dolor",
    avatar: (
      <Avatar aria-label="Post" style={{ backgroundColor: red[500] }}>
        J
      </Avatar>
    ),
    subject: "Ullamcorper Bibendum Ligula"
  }
];
