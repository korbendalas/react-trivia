import { combineReducers } from 'redux';

import questionsReducer from './questionsReducer';
import {scoreReducer} from './scoreReducer';


export default combineReducers({
  questions:questionsReducer,
  score:scoreReducer
 
});