import {TODAY_WEATHER_REQUEST,TODAY_WEATHER_SUCCESS,TODAY_WEATHER_FAILURE} from '../actions/types';

const todayWeather = {
    todayWeather: {},
    loading: false,
    error: {}
}

const todayWeatherReducer = (state = todayWeather, action) =>{
    console.log(action.payload);
    switch(action.type){   
        case TODAY_WEATHER_REQUEST: 
        return {
           ...state,
            loading: true, 
        };
        case TODAY_WEATHER_SUCCESS:
        const todayWeather = action.payload;
        return {
            todayWeather,
            loading: false,
        };
        case TODAY_WEATHER_FAILURE:
        return {
            ...state,
            loading: false,
        };
        default:
            return state;
    }
}
export default todayWeatherReducer;