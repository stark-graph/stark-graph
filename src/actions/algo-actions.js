import * as types from './action-types';

export function setAlgorithm(algorithm) {
  return {
    type: types.SET_ALGOS,
    algorithm,
  };
}
