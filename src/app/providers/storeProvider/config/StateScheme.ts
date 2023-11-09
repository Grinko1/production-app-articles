import {
  type ReducersMapObject,
  type EnhancedStore,
  type AnyAction,
  type Reducer,
  type CombinedState
} from '@reduxjs/toolkit';
import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/authByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchema, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
