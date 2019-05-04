import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../styles/main.scss';

import {weatherInputChange} from '../../actions/searchWeatherActions';
import searchWeatherReducer from '../../reducers/searchWeatherReducer';

class SearchPanel extends Component {

handleInput = (event) =>{
  this.props.weatherInputChange(event.target.value);
 }

  render() {
    return (
      <div className="search-panel">
          <input onChange = {this.handleInput} value = {this.props.cityName}/>
      </div>
    );
  }
}


const mapStateToProps = state =>({
 cityName: state.searchWeatherReducer.cityName,
});

export default connect(null,{weatherInputChange})(SearchPanel);;