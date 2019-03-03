import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

class OutputLanguage extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="button">
          Translation
        </Typography>
        <TextField
          fullWidth
          multiline
          disabled
          rows={4}
          rowsMax={100}
          margin="normal"
          value={this.props.text}
        />
      </Fragment>
    );
  }
}

export default OutputLanguage;
