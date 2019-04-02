import React, { Component } from 'react';
import {Provider} from 'react-redux';

import Calculator from './components/Calculator.js';

import './styles/main.scss'

import store from './store.js';

class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <Calculator/>
      </div>
      </Provider>
    );
  }
}

export default App;
