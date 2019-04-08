import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store.js';

import './styles/main.scss'

import MainPage from './MainPage/MainPage'

class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <MainPage/>
      </div>
      </Provider>
    );
  }
}

export default App;
