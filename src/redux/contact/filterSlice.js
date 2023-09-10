import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtering: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filtering } = filterSlice.actions;
export default filterSlice.reducer;
export const getfilterValue = state => state.filter.value;
