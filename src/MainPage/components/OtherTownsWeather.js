import React, { Component } from 'react';
import '../../styles/main.scss';

import {otherTowns} from '../abstract/abstract.js'

class OtherTownsWeather extends Component {
  render() {
    return (
      <div className="other-towns-weather">
        {otherTowns}
      </div>
    );
  }
}


export default OtherTownsWeather;