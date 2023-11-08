import { createSlice } from '@reduxjs/toolkit';
import { type CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

// like in the dock
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
