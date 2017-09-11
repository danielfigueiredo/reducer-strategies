import {
  createAction,
  createReducerFromStrategies,
} from '../src/strategies.reducer';
import {
  AllKnownActions,
  KnownReducers,
  OtherAction,
  OtherKnownAction,
  OtherReducer,
  SomeAction,
  SomeKnownAction,
  SomeKnownState,
  SomeReducer,
} from './reducer.types';

const someReducer: SomeReducer = (state, action) => {
  return { ...state, someProp: action.payload };
};

// type safe action payloads
const otherReducer: OtherReducer = (state, action) => {
  return { ...state, otherProp: action.payload };
};

const initialState: SomeKnownState = {
  someProp: '',
  otherProp: 0,
};

// mapping of action and reducer
const reducer = createReducerFromStrategies<KnownReducers, SomeKnownState, AllKnownActions>({
  SOME_ACTION: someReducer,
  OTHER_ACTION: otherReducer,
}, initialState);

// action creators
const createSomeKnownAction = (payload: string): SomeKnownAction =>
  createAction(SomeAction, payload);

const createOtherKnownAction = (payload: number): OtherKnownAction =>
  createAction(OtherAction, payload);

console.log(reducer(undefined, createSomeKnownAction('Some value'))); // { someProp: 'Some value', otherProp: 0 }
console.log(reducer(undefined, createOtherKnownAction(10))); // { someProp: 'Some value', otherProp: 10 }
