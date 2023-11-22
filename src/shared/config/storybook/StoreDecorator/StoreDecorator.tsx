import { type StateSchema } from 'app/providers/storeProvider';
import { type Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/storeProvider';
import { type ReducersMapObject } from 'redux';
import { loginReducer } from 'features/authByUsername';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addNewCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsComments';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  ArticleDetailsComments: articleDetailsCommentsReducer,
  articlesPage: articlesPageReducer
};
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (StoryComponent: Story) =>
      (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
      );
