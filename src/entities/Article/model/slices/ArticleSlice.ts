import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/ArticleSchema';

const initialState: ArticleSchema = {
    
};

export const ArticleSlice = createSlice({
    name: 'Article',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
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

export const { actions: ArticleActions } = ArticleSlice;
export const { reducer: ArticleReducer } = ArticleSlice;