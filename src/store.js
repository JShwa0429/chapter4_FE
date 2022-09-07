import { configureStore } from "@reduxjs/toolkit";
import movie from "./redux/modules/MovieSlice"
import comment from "./redux/modules/CommentSlice"

const store = configureStore({
  reducer: {movie,comment},
});

export default store;
