import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  }
};

class LinearDeterminate extends React.Component {
  timer = null;

  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  UNSAFE_componentWillMount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={this.state.completed} />
        <br />
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={this.state.completed}
        />
      </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinearDeterminate);
