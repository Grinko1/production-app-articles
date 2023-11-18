import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type User, type UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

const initialState: UserSchema = {
  authData: undefined,
  _inited: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (userData) {
        state.authData = JSON.parse(userData);
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
});

// like in the dock
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
