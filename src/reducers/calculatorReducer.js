/* eslint no-eval: 0 */
import * as math from 'mathjs';
import {ADD_SYMBOL, CLEAN_INPUT, COMPUTE} from '../actions/types';

const initialState = {
    equation: "",
}

const calculatorReducer = (state = initialState, action) =>{
    switch(action.type){

        case ADD_SYMBOL:
        let newEquation = state.equation + action.payload;
        return {
            ...state,
            equation:newEquation,
        };

        case CLEAN_INPUT:
        return{
            ...state,
            equation:'',
        }

        case COMPUTE:
        let computedValue = math.eval(state.equation);
        return{
            ...state,
            equation:computedValue,
        }

        default:
            return state;
    }
}
export default calculatorReducer;