import {GET_SCORE} from '../actions/types';

export const scoreReducer=(state=0,action)=>{
    switch(action.type){
        case GET_SCORE:
        return action.payload

        default:
        return state;
    }
}