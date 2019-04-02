import {ADD_SYMBOL,COMPUTE,CLEAN_INPUT} from './types';

export const addSymbol = (symbol) => ({
     type: ADD_SYMBOL,
     payload: symbol,
 
});

export const compute = () =>({
    type: COMPUTE,
});

export const cleanInput = () =>({
    type: CLEAN_INPUT,
})