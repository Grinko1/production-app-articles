import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum } from '../../selectors/getArticlesState';
import { type ThunkConfig } from 'app/providers/storeProvider';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticles({}));
    }
  }
);
