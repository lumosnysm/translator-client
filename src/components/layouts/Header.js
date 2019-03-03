import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }

  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton className={this.classes.menuButton} color="inherit" aria-label="Menu" >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Translator
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
