import { createSlice } from '@reduxjs/toolkit';
import { statusAppInitialState } from './constants';

const statusAppSlice = createSlice({
  name: "statusApp",
  initialState: statusAppInitialState,
  reducers: {
    setAdding(state, action) {
      state.adding = action.payload;
    },
    setSearching(state, action) {
      state.searching = action.payload;
    },
    setEditing(state, action) {
      state.editing = action.payload;
    }
  }
})

export const { setAdding, setSearching, setEditing } = statusAppSlice.actions;
export const statusAppReducer = statusAppSlice.reducer;