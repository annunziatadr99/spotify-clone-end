import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
  query: "",
};

const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.tracks = action.payload;
    },
    fetchFail: (state) => {
      state.tracks = [];
    },
  },
});

export const { fetchSuccess, fetchFail } = searchReducer.actions;
export default searchReducer.reducer;
