import React, { Component } from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersistentDrawerLeft from './components/translator/PersistentDrawerLeft';

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
      value: {
        input: -1,
        output: -1,
      },
    }
  }

  changeInput = (input) => {
    this.setState({input})
    console.log('==============')
  }

  changeInputLang = (inputLang) => {
    let chosen = {...this.state.chosen}
    chosen.inputLang = inputLang;
    this.setState({
      chosen,
      value: {
        output: this.state.value.output,
        input: this.state.languages.indexOf(inputLang)
      }
    })
  }

  changeOutputLang = (outputLang) => {
    let chosen = {...this.state.chosen}
    chosen.outputLang = outputLang;
    this.setState({
      chosen,
      value: {
        input: this.state.value.input,
        output: this.state.languages.indexOf(outputLang)
      }
    })
  }

  changeView = (view) => {
    this.setState({view})
  }

  swapLang = () => {
    let inputLang = this.state.chosen.inputLang
    let outputLang = this.state.chosen.outputLang
    this.setState({
      chosen: {
        inputLang: outputLang,
        outputLang: inputLang,
      },
      value: {
        output: this.state.languages.indexOf(inputLang),
        input: this.state.languages.indexOf(outputLang)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <PersistentDrawerLeft
          changeInputLang={this.changeInputLang}
          changeOutputLang={this.changeOutputLang}
          languages={this.state.languages}
          chosen={this.state.chosen}
          changeInput={this.changeInput}
          text={this.state.input}
          view={this.state.view}
          changeView={this.changeView}
          input={this.state.input}
          swapLang={this.swapLang}
          value={this.state.value}
          />
      </div>
    );
  }
}

export default App;
