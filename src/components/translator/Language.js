import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Language extends Component {
  handleChange = (e) => {
    this.props.changeLang(e.target.value);
  }

  render() {
    return (
      <FormControlLabel
        control={
          <Switch
            checked={this.props.value == this.props.choosen ? true : false}
            value={this.props.value}
            color='primary'
            onChange={this.handleChange} />
        }
        label={this.props.value} />
    );
  }
}

export default Language;
