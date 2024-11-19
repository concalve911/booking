import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../services/api";
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from "../slices/hotelsSlice";

function* fetchHotelsSaga() {
  try {
    const response = yield call(axios.get, "/hotels");
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
}

export default rootSaga;
