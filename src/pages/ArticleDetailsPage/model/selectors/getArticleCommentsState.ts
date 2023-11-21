import { type StateSchema } from 'app/providers/storeProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
  return state.ArticleDetailsComments?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
  return state.ArticleDetailsComments?.error;
};
