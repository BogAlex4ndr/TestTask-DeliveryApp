import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  disabled: false,
};

const filterSlice = createSlice({
  name: 'filtres',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setDisabled(state, action) {
      state.disabled = action.payload;
    },
  },
});

export const { setCategoryId, setDisabled } = filterSlice.actions;
export default filterSlice.reducer;
