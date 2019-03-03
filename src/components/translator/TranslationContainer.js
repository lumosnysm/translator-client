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

  changeInput = (input) => {
    this.props.changeInput(input);
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
                <Grid item xs={12} sm={6} className={this.classes.GridItem}>
                  <SelectLanguage
                    changeLang={this.changeInputLang}
                    languages={this.props.languages}
                    chosen={this.props.chosen.inputLang}
                    type='in' />
                </Grid>
                <Grid item xs={12} sm={6} className={this.classes.GridItem}>
                <SelectLanguage
                  changeLang={this.changeOutputLang}
                  languages={this.props.languages}
                  chosen={this.props.chosen.outputLang}
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
