import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increase, decrease, incrementByAmount } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
