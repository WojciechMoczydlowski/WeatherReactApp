import {
    WEATHER_INPUT_CHANGE
  } from "../actions/types";
  
  const cityName = '';
  
  const searchWeatherReducer = (state = cityName, action) => {
     console.log(action.payload);
    switch (action.type) {
      case WEATHER_INPUT_CHANGE:
        return {
          ...state,
          cityName: action.payload
        };
      default:
        return state;
    }
  };
  export default searchWeatherReducer;
  