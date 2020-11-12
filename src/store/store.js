import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import formBuildReducer from '../redux/formBuilder/index';

export default configureStore({
  reducer: {
    counter: counterReducer,
    formData: formBuildReducer,
  },
});
