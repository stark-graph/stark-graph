import * as types from '../actions/action-types';

export function setAlgorithm(algorithm){
	return {
		type: types.SET_ALGOS,
		algorithm
	}
}
 
