import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SelectLanguage extends React.Component {

  handleChange = (e) => {
    this.props.changeLang(e.target.value);
  }


  render() {
    return (
      <FormGroup row>
        {
          this.props.languages.map( (language) =>
            <FormControlLabel
              control={<Switch checked={language === this.props.chosen ? true : false} value={language} color="primary" onChange={this.handleChange} />}
              label={language}
              key={`${language}-${this.props.type}`} />
          )
        }
      </FormGroup>
    );
  }
}

export default SelectLanguage;
