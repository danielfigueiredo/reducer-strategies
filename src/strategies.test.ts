import {
  createAction,
  createReducerFromStrategies,
} from './strategies.reducer';

describe('Reducer Strategies tests', () => {
  it('should create an action', () => {
    const payload = 'some payload';
    const meta = { prop: true };
    const someAction = createAction('ACTION_TYPE', payload, meta);
    expect(someAction).toEqual({ type: 'ACTION_TYPE', payload, meta });
  });

  it('should map action to reducers', () => {
    const myReducer = createReducerFromStrategies<any, any, any>({
      ACTION: (state, action) => ++state,
    }, 10);
    expect(myReducer(undefined, { type: 'ACTION' })).toBe(11);
  });
});
