import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from "./slices/hotelsSlice";

function* fetchHotelsSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://booking.free.beeceptor.com/hotels"
    );
    console.log("API Response:", response.data);
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    console.error("Error fetching hotels:", error.message);
    yield put(fetchHotelsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
}
