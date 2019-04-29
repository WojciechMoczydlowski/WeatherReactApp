import {
    LONGTIME_WEATHER_REQUEST,
    LONGTIME_WEATHER_SUCCESS,
    LONGTIME_WEATHER_FAILURE
  } from "../actions/types";
  
  const longTimeWeather = {
    weather: {},
    loading: false,
    error: {}
  };
  
  const longTimeWeatherReducer = (state = longTimeWeather, action) => {
    switch (action.type) {
      case LONGTIME_WEATHER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case LONGTIME_WEATHER_SUCCESS:
        const weather = action.payload;
        return {
          ...state,
          weather,
          loading: false,
       
        };
      case LONGTIME_WEATHER_FAILURE:
        return {
          loading: false,
          ...state
        };
      default:
        return state;
    }
  };
  export default longTimeWeatherReducer;
  