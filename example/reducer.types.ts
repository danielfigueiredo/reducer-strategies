import {
  Action,
  Reducer,
  ReducerStrategy
} from '../src/strategies.types';

export type SomeKnownState = {
  someProp: string;
  otherProp: number;
};

type SomeActionType = 'SOME_ACTION';
type OtherActionType = 'OTHER_ACTION';

export const SomeAction: SomeActionType = 'SOME_ACTION';
export const OtherAction: OtherActionType = 'OTHER_ACTION';

export type SomeKnownAction = Action<SomeActionType, string, void>;
export type OtherKnownAction = Action<OtherActionType, number, void>;

export type AllKnownActions = SomeKnownAction | OtherKnownAction;

export type SomeReducer = Reducer<SomeKnownState, SomeKnownAction>;
export type OtherReducer = Reducer<SomeKnownState, OtherKnownAction>;

// the purpose here is to replace the switch case statements inside the reducers
// state reducer implementation
export interface KnownReducers extends ReducerStrategy<KnownReducers, SomeKnownState, AllKnownActions> {
  SOME_ACTION: SomeReducer,
  OTHER_ACTION: OtherReducer,
}
