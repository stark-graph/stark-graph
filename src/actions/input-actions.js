import * as types from '../actions/action-types';

export function setInput(input){
	return {
		type: types.SET_INPUT,
		input
	};
}


