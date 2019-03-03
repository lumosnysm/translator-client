import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class InputLanguage extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="overline">
          Type here to translate your text ...
        </Typography>
        <TextField
          fullWidth
          autoFocus={true}
          label="Text"
          multiline
          margin="normal"
        />
      </Fragment>
    );
  }
}

export default InputLanguage;
