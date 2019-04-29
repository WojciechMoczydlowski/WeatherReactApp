import {
  TODAY_WEATHER_REQUEST,
  TODAY_WEATHER_SUCCESS,
  TODAY_WEATHER_FAILURE
} from "../actions/types";

const todayWeather = {
  weather: {},
  loading: false,
  error: {}
};

const todayWeatherReducer = (state = todayWeather, action) => {
  switch (action.type) {
    case TODAY_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TODAY_WEATHER_SUCCESS:
      const weather = action.payload;
      return {
        ...state,
        weather,
        loading: false,
     
      };
    case TODAY_WEATHER_FAILURE:
      return {
        loading: false,
        ...state
      };
    default:
      return state;
  }
};
export default todayWeatherReducer;
