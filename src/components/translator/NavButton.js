import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 100,
  },
  input: {
    display: 'none',
  },
});

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }

  handleClick = (e) => {
    this.props.changeView(e.target.textContent)
  }

  render() {
    return (
      <div style={{margin: 20}}>
        <Button variant="contained" color="primary" className={this.classes.button} onClick={this.handleClick}>
          Text
        </Button>
        <Button variant="contained" className={this.classes.button} onClick={this.handleClick}>
          Document
        </Button>
      </div>
    );
  }
}

NavButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButton);
