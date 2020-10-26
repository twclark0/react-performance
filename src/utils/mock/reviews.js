export default [
  {
    from: "Ali Connors",
    message: "I will be in your neighborhood",
    photo: `${process.env.PUBLIC_URL}/static/images/face3.jpg`,
    subject: "Brunch this weekend?",
    rating: Math.floor(Math.random() * 6)
  },
  {
    from: "Trevor Hansen",
    message: "Wish I could but we have plans",
    photo: `${process.env.PUBLIC_URL}/static/images/face6.jpg`,
    subject: "Brunch this weekend?",
    rating: Math.floor(Math.random() * 6)
  },
  {
    from: "Sandra Adams",
    message: "Do you have Paris recommendations instead?",
    photo: `${process.env.PUBLIC_URL}/static/images/face4.jpg`,
    subject: "Brunch this weekend?",
    rating: Math.floor(Math.random() * 6)
  }
];
