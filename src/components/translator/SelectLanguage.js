import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  tabsIndicator: {
    backgroundColor: 'blue'
  },

  tabSelected: {
    color: 'blue',
  },
});

class SelectLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }

  handleChange = (e) => {
    this.props.changeLang(e.target.textContent);
  }


  render() {
    return (
        <Fragment>
          <Tabs
            value={this.props.value}
            variant='scrollable'
            scrollButtons='auto'
            style={{borderBottom: '1px solid #e8e8e8',}}
            classes={{ indicator: this.classes.tabsIndicator }}
          >

          {
            this.props.languages.map( (language) =>
              <Tab
                label={language}
                onClick={this.handleChange}
                style={{fontWeight: 700}}
                classes={{ selected: this.classes.tabSelected }}/>
            )
          }
          </Tabs>
        </Fragment>
    );
  }
}

SelectLanguage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectLanguage);
