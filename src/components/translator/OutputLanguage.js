import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class OutputLanguage extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="overline">
          Translation
        </Typography>
        <Typography variant="body2" gutterBottom>
        </Typography>
      </Fragment>
    );
  }
}

export default OutputLanguage;
