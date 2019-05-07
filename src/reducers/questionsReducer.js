import {FETCH_QUESTIONS} from '../actions/types';
const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUESTIONS:
        return  action.payload
            
         
         default:
         return state; 
        }
    } 
    