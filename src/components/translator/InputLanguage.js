import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class InputLanguage extends Component {
  handleChange = (e) => {
    this.props.changeInput(e.target.value);
    console.log(e.target.value)
  }

  render() {
    return (
      <Fragment>
        <Typography variant='button'>
          Type here to translate your text ...
        </Typography>
        <TextField
          fullWidth
          autoFocus={true}
          rows={4}
          rowsMax={100}
          multiline
          margin='normal'
          onChange={this.handleChange}
          variant='outlined'
        />
      </Fragment>
    );
  }
}

export default InputLanguage;
