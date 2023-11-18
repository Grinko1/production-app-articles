import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/ArticleDetailsPageSchema';

const initialState: ArticleDetailsPageSchema = {
    
};

export const ArticleDetailsPageSlice = createSlice({
    name: 'ArticleDetailsPage',
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

export const { actions: ArticleDetailsPageActions } = ArticleDetailsPageSlice;
export const { reducer: ArticleDetailsPageReducer } = ArticleDetailsPageSlice;