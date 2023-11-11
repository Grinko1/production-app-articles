import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    resetData: (state) => {
      state.password = '';
      state.username = '';
    }
  },
  extraReducers (builder) {
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(loginByUsername.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
