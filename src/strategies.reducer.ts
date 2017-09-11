import {
  Action,
  DefineReducerStrategies,
} from './strategies.types';

export const createAction = <T, P, M>(type: T, payload?: P, meta?: M): Action<T, P, M> =>
  ({ type, payload, meta });

export const createReducerFromStrategies: DefineReducerStrategies = (strategies, initialState) =>
  (state = initialState, action) => {
    const reducer = strategies[action.type];
    if (typeof reducer === 'undefined') return state;
    return reducer(state, action);
  };
