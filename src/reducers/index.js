import { combineReducers } from 'redux';
import todayWeatherReducer from './todayWeatherReducer';
import longTimeWeatherReducer from './longTimeWeatherReducer';

export default combineReducers({
    todayWeather : todayWeatherReducer,
    longTimeWeather: longTimeWeatherReducer,
});