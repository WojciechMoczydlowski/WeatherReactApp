import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator.js';
import {Provider} from 'react-redux';

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
