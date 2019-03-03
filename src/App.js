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
      input: '',
      choosen: {
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
    let choosen = {...this.state.choosen}
    choosen.inputLang = inputLang;
    this.setState({choosen})
  }

  changeOutputLang = (outputLang) => {
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
          changeInputLang={this.changeInputLang}
          changeOutputLang={this.changeOutputLang}
          languages={this.state.languages}
          choosen={this.state.choosen}
          changeInput={this.handleChangeInput}
          text={this.state.input} />
      </div>
    );
  }
}

export default App;
