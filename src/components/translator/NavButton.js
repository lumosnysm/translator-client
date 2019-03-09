import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 150,
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
    if(e.target.textContent.match('ext') != null) {
      this.props.changeView('Text');
    } else {
      this.props.changeView('Document');
    }
    console.log("++++++++++++")
  }

  render() {
    return (
      <div style={{margin: 20}}>
        <Button variant='contained' color='primary' className={this.classes.button} onClick={this.handleClick}>
          <Icon>text_fields</Icon>
          Text
        </Button>
        <Button variant='contained' className={this.classes.button} onClick={this.handleClick}>
          <Icon>description</Icon>
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
