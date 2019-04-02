import React, { Component } from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import {addSymbol,cleanInput,compute} from '../actions/calculatorActions';
import '.././App.css';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="input">
        {this.props.equation}
        </div>

        <div className = "mainPart">

          <div className= "row40">
            <div className = "col75">
              <div className = "col33" ><Button symbol = "c" class = "ActionButton" toogleOnClick = {this.props.cleanInput}/></div>
              <div className = "col33"><Button symbol = "/"  class = "ActionButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "*"  class = "ActionButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "7"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "8"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "9"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
            </div>
            <div className = "col25"> <Button symbol = "-" class = "ActionButton" toogleOnClick = {this.props.addSymbol}/></div>
          </div>

          <div className= "row40">
            <div className = "col75">
              <div className = "col33"><Button symbol = "4"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "5"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol= "6"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "1"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "2"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
              <div className = "col33"><Button symbol = "3"  class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
            </div>
            <div className = "col25"> <Button symbol = "+"  class = "ActionButton" toogleOnClick = {this.props.addSymbol}/></div>
          </div>
          <div className= "row20">
             <div className = "col25"> <Button symbol = "." class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>              
             <div className = "col25"> <Button symbol = "0" class = "NumberButton" toogleOnClick = {this.props.addSymbol}/></div>
            <div className = "col50"> <Button symbol = "="  class = "ActionButton" toogleOnClick = {this.props.compute}/></div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state =>({
  equation:state.calculator.equation,
});

export default connect(mapStateToProps,{addSymbol,compute,cleanInput})(Calculator);