import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type User, type UserSchema } from '../types/user';

const initialState: UserSchema = {
  authData: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    }
  }
});

// like in the dock
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
