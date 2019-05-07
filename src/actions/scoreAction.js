import {GET_SCORE} from './types';

export const scoreAction = (data) => {

    return{
        type:GET_SCORE,
        payload:data
    }

}
