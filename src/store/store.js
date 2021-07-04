import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import formBuildReducer from '../redux/formBuilder/index';
import fetchFormSaga from '../redux/saga/formBuilder';

const sagaMiddleware = createSagaMiddleware();

// export default configureStore({
//   reducer: {
//     formData: formBuildReducer,
//   },
//   middleware: applyMiddleware(sagaMiddleware),
// });

const configStore = () => {
  const store = configureStore({
    reducer: {
      formData: formBuildReducer,
    },
    middleware: applyMiddleware(sagaMiddleware),
  });
  sagaMiddleware.run(fetchFormSaga);
  return store;
};

export default configStore;
