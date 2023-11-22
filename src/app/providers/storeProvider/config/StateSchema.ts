import {
  type ReducersMapObject,
  type EnhancedStore,
  type AnyAction,
  type Reducer,
  type CombinedState
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type ArticleDetailsSchema } from 'entities/Article/model/types/ArticleDetailsSchema';
import { type CounterSchema } from 'entities/Counter';
import { type ProfileSchema } from 'entities/Profile';
import { type UISchema } from 'entities/UI';
import { type UserSchema } from 'entities/User';
import { type AddCommentFormSchema } from 'features/addNewCommentForm';
import { type LoginSchema } from 'features/authByUsername';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { type ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  // async
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  ArticleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
