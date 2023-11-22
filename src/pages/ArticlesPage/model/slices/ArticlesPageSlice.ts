import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ArticlesPageSchema } from '../types/ArticlesPageSchema';

const initialState: ArticlesPageSchema = {};

export const ArticlesPageSlice = createSlice({
  name: 'ArticlesPage',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {}
  }
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: ArticlesPageActions } = ArticlesPageSlice;
export const { reducer: ArticlesPageReducer } = ArticlesPageSlice;
