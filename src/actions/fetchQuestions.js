import axios from 'axios';
import {FETCH_QUESTIONS} from './types';

export const fetchQuestions = (data) => async dispatch => {
   

    const response =  await axios.get(`https://opentdb.com/api.php`,
    {params:
        {amount:data.num,
         category:data.category,
         dificulty:data.dificulty   
        
        }});
       

    dispatch({  type:FETCH_QUESTIONS, payload:response.data });
 
    };
