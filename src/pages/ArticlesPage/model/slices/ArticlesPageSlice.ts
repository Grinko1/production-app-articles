import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { ArticleView, type Article } from 'entities/Article';
import { type StateSchema } from 'app/providers/storeProvider';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
  name: 'ArticlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    ids: [],
    entities: {}
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
