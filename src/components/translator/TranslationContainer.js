import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import InputLanguague from './InputLanguage';
import Grid from '@material-ui/core/Grid';
import OutputLanguage from './OutputLanguage';
import SelectLanguage from './SelectLanguage';
import UploadContainer from './UploadContainer';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  verticalLine: {
    borderLeft: `2px solid ${theme.palette.divider}`,
  },

  GridItem: {
    padding: 20,
  },
});

class TranslationContainer extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }

  changeInputLang = (inputLang) => {
    this.props.changeInputLang(inputLang);
  }

  changeOutputLang = (outputLang) => {
    this.props.changeOutputLang(outputLang);
  }

  handleClick = () => {
    this.props.swapLang()
  }

  render() {
    let view;
    if (this.props.view === 'Text') {
      view =
        <Fragment>
          <Grid item xs={12} sm={6} className={this.classes.GridItem}>
            <InputLanguague changeInput={this.props.changeInput} />
          </Grid>
          <Grid item xs={12} sm={6} className={classNames(this.classes.GridItem, this.classes.verticalLine)}>
            <OutputLanguage text={this.props.text} />
          </Grid>
        </Fragment>
    } else {
      view =
        <Grid item xs={12} sm={12} className={this.classes.GridItem}>
          <UploadContainer />
        </Grid>
    }
    return (
      <div className={this.classes.root}>
        <Paper style={{margin: 20}}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={5}>
                  <SelectLanguage
                    changeLang={this.changeInputLang}
                    languages={this.props.languages}
                    value={this.props.value.input}
                    type='in' />
                </Grid>
                <Grid item xs={2} sm={2} style={{textAlign: 'center'}}>
                  <IconButton  onClick={this.handleClick}>
                    <Icon>swap_horiz</Icon>
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={5} >
                <SelectLanguage
                  changeLang={this.changeOutputLang}
                  languages={this.props.languages}
                  value={this.props.value.output}
                  type='out' />
                </Grid>
              </Grid>
            <Divider />
            </Grid>
            {view}
          </Grid>
        </Paper>
      </div>
    );
  }
}

TranslationContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TranslationContainer);
