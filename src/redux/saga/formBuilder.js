import { call, put, takeLatest } from 'redux-saga/effects';
import fetchForm from '../../Api/index';

function* fetchFormBuilder() {
  try {
    console.log('ok');
    const response = yield call(fetchForm());
    console.log(response);
    yield put({ type: 'FETCH_FORM_SUCCESS', form: response });
    console.log('passed');
  } catch (error) {
    yield put({ type: 'FETCH_FORM_FAIL', form: [] });
  }
}

function* watchFetchFormBuilder() {
  yield takeLatest('FETCH_FORM_REQUEST', fetchFormBuilder);
}

export default watchFetchFormBuilder;
