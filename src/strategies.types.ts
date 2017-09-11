// generic typings
export type Action<T, P, M> = { type: T, payload?: P, meta?: M };

export type Reducer<S, A> = (state: S, action: A) => S;

export type ReducerStrategy<T, S, A extends Action<keyof T, any, any>> = {
  [K in keyof T]: Reducer<S, A>;
  };

export type DefineReducerStrategies = <
  T extends ReducerStrategy<T, S, A>,
  S,
  A extends Action<keyof T, any, any>
  >(strategies: T, initialState: S) => Reducer<S, A>;
