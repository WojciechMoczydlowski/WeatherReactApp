import { combineReducers } from 'redux';
import todayWeatherReducer from './todayWeatherReducer';

export default combineReducers({
    todayWeather : todayWeatherReducer
});