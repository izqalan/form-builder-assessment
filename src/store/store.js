import { configureStore } from '@reduxjs/toolkit';
import formBuildReducer from '../redux/formBuilder/index';

export default configureStore({
  reducer: {
    formData: formBuildReducer,
  },
});
