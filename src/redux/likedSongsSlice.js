import { createSlice } from "@reduxjs/toolkit";

const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState: [],
  reducers: {
    likeSong: (state, action) => {
      if (state.includes(action.payload)) {
        return state.filter((song) => song !== action.payload);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { likeSong } = likedSongsSlice.actions;
export default likedSongsSlice.reducer;
