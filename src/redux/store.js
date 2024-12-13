import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentSongReducer from "./currentSongSlice";
import likedSongsReducer from "./likedSongsSlice";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  likedSongs: likedSongsReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
