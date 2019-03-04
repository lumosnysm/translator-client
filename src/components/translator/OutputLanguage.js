import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class OutputLanguage extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant='button'>
          Translation
        </Typography>
        <TextField
          fullWidth
          multiline
          InputProps={{
            readOnly: true,
          }}
          rows={4}
          rowsMax={100}
          margin='normal'
          value={this.props.text}
          variant='outlined'
        />
      </Fragment>
    );
  }
}

export default OutputLanguage;
