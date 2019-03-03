import React, { Component } from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import TranslationContainer from './components/translator/TranslationContainer';
import UploadContainer from './components/translator/UploadContainer';
import NavButton from './components/translator/NavButton';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Text',
      input: '',
      chosen: {
        inputLang: '',
        outputLang: '',
      },
      languages: ["English", "Japanese", "Vietnamese"],
    }
  }

  handleChangeInput = (input) => {
    this.setState({input})
  }

  changeInputLang = (inputLang) => {
    let chosen = {...this.state.chosen}
    chosen.inputLang = inputLang;
    this.setState({chosen})
  }

  changeOutputLang = (outputLang) => {
    let chosen = {...this.state.chosen}
    chosen.outputLang = outputLang;
    this.setState({chosen})
  }

  changeView = (view) => {
    this.setState({view})
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <NavButton changeView={this.changeView} />
        <TranslationContainer
          changeInputLang={this.changeInputLang}
          changeOutputLang={this.changeOutputLang}
          languages={this.state.languages}
          chosen={this.state.chosen}
          changeInput={this.handleChangeInput}
          text={this.state.input}
          view={this.state.view}
          />
      </div>
    );
  }
}

export default App;
