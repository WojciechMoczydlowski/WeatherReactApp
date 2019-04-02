import React, { Component } from 'react';
import { connect} from 'react-redux';
import {addSymbol} from '../actions/calculatorActions'
import '../App.css';

class Button extends Component {
  render() {
    return (
      <button className={this.props.class} onClick ={() =>this.props.toogleOnClick(this.props.symbol)}>
        {this.props.symbol}
      </button>
    );
  }
}
export default connect(null,{addSymbol})(Button);
