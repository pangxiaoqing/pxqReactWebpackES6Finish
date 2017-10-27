import { combineReducers } from 'redux';

function operate(state=[],action){
    switch(action.type){
        case 'apply':
            return action.data;
        default:
            return state
    }
}

const rootReducer = {
    operate
}

export default {
    rootReducer
}