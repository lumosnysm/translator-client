import React, { Component } from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import TranslationContainer from './components/translator/TranslationContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosen: {
        inputLang: '',
        outputLang: '',
      },
      languages: ["English", "Japanese", "Vietnamese"],
    }
  }

  handleChangeInputLang = (inputLang) => {
    let choosen = {...this.state.choosen}
    choosen.inputLang = inputLang;
    this.setState({choosen})
  }

  handleChangeOutputLang = (outputLang) => {
    let choosen = {...this.state.choosen}
    choosen.outputLang = outputLang;
    this.setState({choosen})
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <TranslationContainer
          handleChangeInputLang={this.handleChangeInputLang}
          handleChangeOutputLang={this.handleChangeOutputLang}
          languages={this.state.languages}
          choosen={this.state.choosen} />
      </div>
    );
  }
}

export default App;
