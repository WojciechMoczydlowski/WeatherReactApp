import React, { Component } from 'react';
import {Provider} from 'react-redux';

import './styles/main.scss'

import store from './store.js';

class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <WeatherMainComp/>
      </div>
      </Provider>
    );
  }
}

export default App;
