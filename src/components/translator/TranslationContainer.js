import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import InputLanguague from './InputLanguage';
import Grid from '@material-ui/core/Grid';
import OutputLanguage from './OutputLanguage';
import SelectLanguage from './SelectLanguage';

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
    this.props.handleChangeInputLang(inputLang);
  }

  changeOutputLang = (outputLang) => {
    this.props.handleChangeOutputLang(outputLang);
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Paper>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6} className={this.classes.GridItem}>
                  <SelectLanguage
                    changeLang={this.changeInputLang}
                    languages={this.props.languages}
                    choosen={this.props.choosen.inputLang} />
                </Grid>
                <Grid item xs={12} sm={6} className={this.classes.GridItem}>
                <SelectLanguage
                  changeLang={this.changeOutputLang}
                  languages={this.props.languages}
                  choosen={this.props.choosen.outputLang} />
                </Grid>
              </Grid>
            <Divider />
            </Grid>
            <Grid item xs={12} sm={6} className={this.classes.GridItem}>
              <InputLanguague />
            </Grid>
            <Grid item xs={12} sm={6}className={classNames(this.classes.GridItem, this.classes.verticalLine)}>
              <OutputLanguage />
            </Grid>
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
