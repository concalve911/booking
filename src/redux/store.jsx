import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import hotelReducer from "./slices/hotelsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
