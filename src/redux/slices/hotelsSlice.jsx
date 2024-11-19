import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {
    fetchHotelsRequest(state) {
      state.status = "loading";
    },
    fetchHotelsSuccess(state, action) {
      state.status = "succeeded";
      state.list = action.payload;
    },
    fetchHotelsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchHotelsRequest, fetchHotelsSuccess, fetchHotelsFailure } =
  hotelSlice.actions;

export default hotelSlice.reducer;
