import { createSlice } from '@reduxjs/toolkit';

// Reducers
export const formBuildSlice = createSlice({
  name: 'formData',
  initialState: {
    id: 0,
    form: [],
  },
  reducers: {
    addForm: (state, action) => {
      state.id += 1;
      action.payload = { ...action.payload, id: state.id };
      state.form.push(action.payload);
    },
    removeForm: (state, action) => ({
      ...state,
      form: [
        ...state.form.slice(0, action.payload),
        ...state.form.slice(action.payload + 1),
      ],
    }),
  },
});

export const { addForm, removeForm } = formBuildSlice.actions;

// selectors
export const selectorForm = (state) => state.formData.form;

export default formBuildSlice.reducer;
