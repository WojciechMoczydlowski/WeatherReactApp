import {SET_TODAY_WEATHER} from '../actions/types';

const initialState = {
    todayWeather: {},
}

const weatherReducer = (state = initialState, action) =>{
    console.log(action.type);
    switch(action.type){   
        case SET_TODAY_WEATHER:
        const todayWeather = action.payload;
        console.log(action.type);
        return {
            ...state,
            todayWeather
        };
        default:
            return state;
    }
}
export default weatherReducer;