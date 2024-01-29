import {createSlice} from '@reduxjs/toolkit';

interface InitialStateType {
  count: number;
}

const initialState: InitialStateType = {count: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: state => {
      state.count++;
    },
    decrementCount: state => {
      state.count--;
    },
  },
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
